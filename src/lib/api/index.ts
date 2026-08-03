import type { FeaturedJob, ApiMaid, ApiBlog, ApiBlogDetail } from '@/types'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'https://api.pickmymaid.com/api'

export class ApiError extends Error {
  status: number
  constructor(message: string, status: number) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const { headers: extra, ...rest } = options ?? {}
  const res = await fetch(`${BASE_URL}${path}`, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...(extra as Record<string, string>) },
    ...rest,
  })
  if (!res.ok) {
    let message = `API error: ${res.status}`
    try {
      const body = await res.json()
      if (body?.message) message = body.message
    } catch { /* ignore parse errors */ }
    throw new ApiError(message, res.status)
  }
  return res.json()
}

export const api = {
  get: <T>(path: string, options?: RequestInit) => request<T>(path, options),
  post: <T>(path: string, body: unknown) =>
    request<T>(path, { method: 'POST', body: JSON.stringify(body) }),
}

export async function getFeaturedJobs(): Promise<{ data: FeaturedJob[] }> {
  return api.get<{ data: FeaturedJob[] }>('/v1/job/featured', { next: { revalidate: 1800 } } as RequestInit)
}

export interface SearchJobsParams {
  q?: string
  service?: string
  nationality?: string
  location?: string
  religion?: string
  language?: string
  page?: number
  limit?: number
}

export interface SearchJobsResponse {
  data: FeaturedJob[]
  total: number
  page: number
  limit: number
}

export async function searchJobs(params: SearchJobsParams): Promise<SearchJobsResponse> {
  const query = new URLSearchParams()
  for (const [key, val] of Object.entries(params)) {
    if (val !== undefined && val !== '') query.set(key, String(val))
  }
  return api.get<SearchJobsResponse>(`/v1/job/search?${query.toString()}`)
}

export interface FindMaidsParams {
  page?: number
  option?: string
  location?: string
  country?: string
  availability?: string
  skills?: string
  ageFrom?: number
  ageTo?: number
  nationality?: string
  salary?: string
  salaryFrom?: number
  salaryTo?: number
  service?: string
  visa?: string
  religion?: string
  searchParams?: string
  sort?: string
}

export interface FindMaidsResponse {
  data: {
    maids: ApiMaid[]
    count: number
  }
}

export interface MaidDetailResponse {
  data: {
    jobApplication: ApiMaid
  }
}

export async function getMaid(id: string): Promise<MaidDetailResponse> {
  return api.post<MaidDetailResponse>(`/v1/job/id`, { id })
}

export interface WishlistResponse {
  data: { favorites: ApiMaid[] }
}

export async function getWishlist(userId: string): Promise<WishlistResponse> {
  return api.get<WishlistResponse>(`/v1/job/wishlist?user_id=${encodeURIComponent(userId)}`)
}

export interface RegisterBody {
  first_name: string
  last_name: string
  email: string
  password: string
  emirate_of_residence: string
  position_required: string
  phone?: string
}

export interface RegisterResponse {
  status: string
  statusCode: number
  message: string
  data: { token: string; user_id: string }
}

export async function registerCustomer(body: RegisterBody): Promise<RegisterResponse> {
  return api.post<RegisterResponse>('/v1/auth/customer/register', body)
}

export interface VerifyAuthUser {
  _id: string
  user_id: string
  first_name: string
  last_name?: string
  email: string
  phone: string
  profile: string
  is_blocked: boolean
  createdAt: string
}

export interface VerifyAuthResponse {
  status: string
  statusCode: number
  message: string
  data: { user: VerifyAuthUser; message: string }
}

export interface LoginBody { email: string; password: string }
export interface LoginResponse {
  status: string
  statusCode: number
  message: string
  data: { user_id: string; name?: string }
}

export async function loginCustomer(body: LoginBody): Promise<LoginResponse> {
  return api.post<LoginResponse>('/v2/auth/local', body)
}

export async function verifyAuth(): Promise<VerifyAuthResponse> {
  return request<VerifyAuthResponse>('/v2/auth/login/success')
}

export async function logoutUser(): Promise<void> {
  await request<unknown>('/v2/auth/logout', { method: 'GET' })
}

export interface ToggleWishlistBody {
  maidId: string
  user_id: string
}

export interface ToggleWishlistResponse {
  status: string
  message: string
}

export async function toggleWishlist(body: ToggleWishlistBody): Promise<ToggleWishlistResponse> {
  return api.post<ToggleWishlistResponse>('/v1/job/toggle-wishlist', body)
}

export interface ContactBody {
  name: string
  email: string
  subject: string
  message: string
  mobile: string
}

export async function createContact(body: ContactBody): Promise<void> {
  await api.post<unknown>('/v1/contact/', body)
}

export interface CreatePaymentResponse {
  status: string
  statusCode: number
  message: string
  data: { ref: string; payment_url: string }
}

export async function createPayment(type: 0 | 1 | 2): Promise<CreatePaymentResponse> {
  return api.post<CreatePaymentResponse>('/v2/payment/create-payment', { type })
}

export interface GetBlogsResponse {
  status: string
  statusCode: number
  message: string
  data: {
    blogs: ApiBlog[],
    total_counts: number
  }
}

export async function getBlogs(page: number = 1): Promise<GetBlogsResponse> {
  return api.get<GetBlogsResponse>(`/v1/blog/page/${page}`, { next: { revalidate: 3600 } } as RequestInit)
}

export interface GetBlogDetailResponse {
  status: string
  statusCode: number
  message: string
  data: { blog: ApiBlogDetail }
}

export async function getBlogBySlug(slug: string): Promise<GetBlogDetailResponse> {
  return api.get<GetBlogDetailResponse>(`/v1/blog/id/${slug}`, { next: { revalidate: 86400 } } as RequestInit)
}

export interface PaymentDetailsResponse {
  status: string
  statusCode: number
  message: string
  data: {
    user: {
      status: number       // 1 = active subscription
      type: 0 | 1 | 2     // 0 = basic, 1 = standard, 2 = premium
    }
  }
}

export async function getPaymentDetails(): Promise<PaymentDetailsResponse> {
  return api.get<PaymentDetailsResponse>('/v1/payment/payment-details')
}

export interface AcknowledgePaymentResponse {
  status: string
  statusCode: number
  message: string
  data: {
    status: 0 | 1 | 2
    type: 0 | 1 | 2
    expiryDate: string
    ref: string
    paymentDate: string
  }
}

export async function acknowledgePayment(ref: string): Promise<AcknowledgePaymentResponse> {
  return api.post<AcknowledgePaymentResponse>(`/v2/payment/acknowledge/${ref}`, {})
}

export function trackCategoryUsage(category: string, maidId: string, userId?: string | null): void {
  const body: { category: string; maid_id: string; user_id?: string } = { category, maid_id: maidId }
  if (userId) body.user_id = userId
  api.post<unknown>('/v1/analytics/category-usage', body).catch(() => {})
}

export async function findMaids(params: FindMaidsParams = {}): Promise<FindMaidsResponse> {
  const { page = 1, ...rest } = params
  const query = new URLSearchParams()
  for (const [key, val] of Object.entries(rest)) {
    if (val !== undefined && val !== '') query.set(key, String(val))
  }
  const qs = query.toString()
  return api.get<FindMaidsResponse>(`/v2/maids/find/${page}${qs ? `?${qs}` : ''}`, { next: { revalidate: 900 } } as RequestInit)
}
