import Link from "next/link";

export function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-26 lg:py-26">
        <h1 className="text-3xl font-bold text-dark mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted mb-10">
          Effective date: {new Date().getFullYear()}
        </p>

        <div className="flex flex-col divide-y divide-gray-100">
          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">Overview</h2>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              Pickmymaid respects and recognizes the importance of
              customers&apos; privacy and personal information. Personal
              information is data that identifies a specific individual (as that
              term is defined below).
            </p>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              This privacy statement (&quot;Privacy Statement&quot; or
              &quot;Policy&quot;) outlines how Pickmymaid treats the Personal
              Information it receives from you when you use the website
              pickmymaid.com and any of its subdomains or subsidiary websites
              (referred to collectively as the &quot;Website&quot; in this
              Privacy Statement).
            </p>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              Our policy explains the types of Personal Information we collect,
              the reasons behind its collection, how we utilize it, our measures
              to protect it, and the circumstances under which we may share it
              with third parties. Additionally, we provide you with the ability
              to make decisions regarding your Personal Information, including
              requesting changes, amendments, or deletions at any time.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed">
              Please be aware that our Website may contain links to external
              websites operated by third parties. While we strive to ensure your
              privacy, we cannot be held responsible for the privacy practices
              or content of those websites. Similarly, the Website may include
              links to terms and conditions and privacy policies of third-party
              providers who offer tools or services on our site. Therefore, we
              strongly advise you to carefully review the privacy policies and
              terms of those.
            </p>
          </section>

          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">Terms</h2>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              In this Privacy Policy, terms such as &quot;you,&quot;
              &quot;User,&quot; &quot;Service Seeker,&quot; and &quot;Service
              Provider&quot; refer to individuals who engage with our Website.
              We consider it important to define these terms to ensure a shared
              understanding of their usage within our policies.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              Any information that may be used to identify a specific person is
              considered &quot;Personal Information&quot; (also known as
              &quot;Personal Data&quot;). Examples include but are not limited
              to, name, email address, mailing address, gender, date of birth,
              and any other information you willingly submit electronically
              through our website. Please be aware that the Personal Information
              you submit during registration will only be used in accordance
              with this Privacy Policy, as outlined in our Terms of Service.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed">
              To maintain consistency and avoid confusion, the terms and phrases
              used in this Privacy Policy have the same meanings as those in our
              Terms of Service. However, in the event of any inconsistency
              between the terms or conditions of this Privacy Policy and the
              Terms of Service, the provisions found in the Terms of Service
              shall prevail to interpret this Privacy Policy.
            </p>
          </section>

          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">
              What data do we collect?
            </h2>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              You voluntarily provide us with certain personal information when
              you register for a user account on our website. This information
              is used to identify you as a user of the site and for some
              profile-related purposes. Your name, email address, home address,
              age, and cell phone number are just a few examples of the data
              that could be included.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed">
              In addition to the Personal Information you provide, we also
              collect certain information about your activity on our Website
              when you visit or contact us as mentioned in the section titled
              &quot;Our Use of Cookies and Log Files&quot; in our Privacy
              Policy.
            </p>
          </section>

          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">
              How do we use personal data?
            </h2>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              In order to provide you with the services offered by Pickmymaid,
              we use the personal information we learn about you, and you accept
              that we may use that information for the following reasons:
            </p>
            <ul className="flex flex-col gap-2 text-sm text-dark/70 leading-relaxed list-disc list-inside">
              <li>
                For the Services offered by Pickmymaid via the website, and to
                respond to your inquiries.
              </li>
              <li>To periodically contact you with service or user updates.</li>
              <li>
                To assist you and the User(s) you have transacted business with
                through Pickmymaid Services.
              </li>
              <li>
                To adjust, track, analyze, and improve our advertising, content,
                and services.
              </li>
              <li>
                To learn more about you and your product preferences by
                examining your computer&apos;s IP address and your website
                usage.
              </li>
              <li>
                To make available services associated with the Website or those
                of Pickmymaid and or our affiliates.
              </li>
              <li>
                To monitor, look into, or take legal action against behavior we
                believe to be potentially damaging, illegal, or unlawful.
              </li>
              <li>
                To carry out any other purpose mentioned here or there,
                including the enforcement of our Terms and Privacy Policy.
              </li>
            </ul>
          </section>

          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">
              How and where are personal data processed?
            </h2>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              Pickmymaid will obtain, process, store, and use personal
              information. Other businesses can also give and process personal
              information under Pickmymaid&apos;s direction. Your personal data
              might be handled, processed, or stored outside the United Arab
              Emirates.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              Pickmymaid may use Google Analytics to gather data on user
              behavior, website traffic, and other matters. Google may gather
              information and use it to track or analyze how a website or
              application is used or to compile reports on its usage and share
              them with other Google services.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed">
              By using the Website, you consent to Pickmymaid&apos;s use of the
              mentioned services as well as any additional analytic services
              that Google may occasionally make accessible. The interaction and
              information gathered are governed by the privacy policies and
              terms of service of Google, social networking networks, and
              third-party platforms, respectively.
            </p>
          </section>

          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">
              Sharing Your Personal Data
            </h2>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              We may disclose information to our financial, insurance, legal,
              accounting, and other advisors who offer us professional services
              in compliance with this Policy.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              We won&apos;t share, sell, rent, or otherwise transfer your
              Personal Information to a third party in a way that can be used to
              identify you unless it&apos;s absolutely essential in our good
              faith judgment to do so: (i) complete the Services offered by
              Pickmymaid; (ii) comply with applicable laws or regulations; (iii)
              respond to a legitimate subpoena, order, or government request;
              (iv) establish or exercise Pickmymaid&apos;s legal rights or
              defend against legal claims; (v) investigate, identify, stop, or
              prevent dangers to someone&apos;s safety or suspected fraud; or
              (vi) as otherwise required by law.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              Your information may no longer contain any personal identifiers
              once we remove them, and we may continue to use and maintain it in
              an anonymous form. This anonymous form may then be merged with
              other information to produce aggregate data.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              Your Personal Information will only be kept by us for as long as
              it&apos;s required to fulfill the goals outlined in this policy,
              as well as any reasonable backup, archival, audit, or other
              similar needs.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed">
              To process credit card payments, Pickmymaid uses a third-party
              service provider. Secure electronic encryption is used to complete
              every credit card transaction.
            </p>
          </section>

          <section id="cookies" className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">
              Cookies and Log Files We Use
            </h2>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              We employ browser tracking cookies, which are little text files
              that websites store on a computer&apos;s hard drive. Cookies are
              assigned to you specifically, and only the website or web server
              that provided them to you can read them. We also use log files
              that your browser creates when you visit a website to store
              information such as your IP address.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              We use cookies and log files to recognize you when you return to
              our website; monitor activity and remember what items you have
              clicked on; analyze how you navigate through our website; and
              customize the delivery of online advertisements and emails sent to
              you. We might work with other service providers to help us collect
              and analyze this browsing data.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed">
              You have the choice of whether to consent to our use of cookies.
              By disabling or rejecting cookies in your web browser, you can
              reject cookies. Our website might not work properly if you choose
              to disable or restrict cookies.
            </p>
          </section>

          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">
              Updating and Having Access to Your Personal Data
            </h2>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              You can contact us at any time to: stop receiving emails from us;
              review the Personal Information held by the Company; withdraw your
              consent for our use and disclosure of your information; ask for a
              list of any third parties to whom Pickmymaid may have disclosed
              your Personal Information; close your account; and, where
              practical, update your Personal Information.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed">
              If you get in touch with us to do any of the aforementioned
              things, we might ask for enough information to identify you.
              We&apos;ll answer on time at no extra charge.
            </p>
          </section>

          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">
              Third-party Websites and Links
            </h2>
            <p className="text-sm text-dark/70 leading-relaxed">
              We might include links to other, external websites on our website.
              These websites run separately from us and have their own privacy
              and security policies in place. Your disclosure of Personal
              Information to third parties through linked pages is done at their
              request and is subject to their privacy policies. This Policy does
              not extend to those linked pages or other websites, and we are not
              liable for their content or privacy policies.
            </p>
          </section>

          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">
              Data Security and Integrity
            </h2>
            <p className="text-sm text-dark/70 leading-relaxed">
              In order to properly secure the security and privacy of your
              personal information against loss, theft, and unauthorized access,
              disclosure, copying, use, or modification, we have put in place a
              number of physical, electronic, technological, and organizational
              precautions. The confidentiality of any communication or content
              sent to or from the website or via email cannot be guaranteed,
              despite our best efforts to make a secure and trustworthy Website
              for users.
            </p>
          </section>

          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">
              Online Privacy Protection for Children
            </h2>
            <p className="text-sm text-dark/70 leading-relaxed">
              Without the permission of their parent or legal guardian, children
              under the age of 19 are not permitted to use the website. Children
              under the age of 13 are not intentionally targeted by Pickmymaid
              for the collection or use of their personal information. We will
              use commercially reasonable measures to remove any Personal
              Information from our database that was unintentionally obtained
              from a child under the age of 13 if we become aware of it.
            </p>
          </section>

          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">
              Modifications to the Privacy Policy
            </h2>
            <p className="text-sm text-dark/70 leading-relaxed">
              Pickmymaid retains the right to modify this Privacy Policy at any
              time by providing notice to users on this page and by always
              maintaining an equivalent level of protection for users&apos;
              Personal Information. It is highly advised to frequently check
              this page for updates.
            </p>
          </section>

          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">
              Precautions
            </h2>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              To protect your Personal Information on our Website, it&apos;s
              crucial that you keep your email address and password private and
              don&apos;t share them with anybody.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              On occasion, scammy &quot;phishing&quot; emails are sent to those
              who the attackers suspect may be signed-up users of the website.
              We never send emails asking recipients to give their email
              address, password, or any other personal information. Your user ID
              or password will never be requested through email. If you ever get
              one of these emails, don&apos;t click any links in it to log in,
              and don&apos;t give any personal information.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed">
              We use Secure Sockets Layer (SSL) software, which encrypts data
              you input, to safeguard the security of credit card information
              during transmission. When verifying an order, we never disclose
              credit card information.
            </p>
          </section>

          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">
              Contact Us
            </h2>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              If you have inquiries or feedback regarding this privacy statement
              or your personal data, please contact us.
            </p>
            <Link
              href="mailto:support@pickmymaid.com"
              className="text-sm font-medium text-primary hover:underline"
            >
              support@pickmymaid.com
            </Link>
          </section>
        </div>

        <div className="border-t border-gray-100 pt-8 mt-4">
          <p className="text-xs text-muted leading-relaxed">
            © {new Date().getFullYear()} Pickmymaid. All Rights Reserved.
            Unauthorized use, reproduction, or distribution of content on this
            website is strictly prohibited.
          </p>
        </div>
      </div>
    </div>
  );
}
