import Link from "next/link";

export function TermsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-26 lg:py-26">
        <h1 className="text-3xl font-bold text-dark mb-2">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm text-muted mb-2">
          Effective date: {new Date().getFullYear()}
        </p>
        <p className="text-sm text-dark/70 leading-relaxed mb-10">
          YOU MAY NOT ACCESS OR USE THE WEBSITE OR ANY OF ITS SERVICES IF YOU DO
          NOT AGREE WITH ANY PART OF THESE TERMS OF SERVICE.
        </p>

        <div className="flex flex-col divide-y divide-gray-100">
          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">
              1. Summary of Services
            </h2>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              Pickmymaid provides online services to connect people and families
              with different service providers. These services are collectively
              referred to as &quot;Services&quot; and are only intended for the
              limited purpose of reviewing job-posting details and individual
              profiles uploaded by members looking for work as a childcare
              provider or housekeeper. Pickmymaid enables people and/or
              organizations offering childcare services (&quot;Service
              Providers&quot;) to post information profiles on the website to
              make it easier for Users looking for services (&quot;Service
              Seekers&quot;) to connect with those Service Providers.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              Pickmymaid Services make it easier for Service Seekers and Service
              Providers to connect by offering search features that let Service
              Seekers identify the best Service Provider based on their
              requirements and preferences.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              No one may use or access the Site for any other purpose, except
              for the Services and other uses described here. The Site is not a
              referral service; rather, it is a website for posting jobs online.
              No fees or other payments are levied by Pickmymaid to Service
              Providers or Service Seekers based on a Service Seeker&apos;s
              choice to enter into an employee or independent contractor
              agreement.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              Pickmymaid is not a party to the connection between the Service
              Seeker and Service Provider once a match has been made. In any
              employment or independent contractor agreement between the
              parties, Pickmymaid is not a party and shall not be held
              responsible to a Service Seeker, Service Provider, or any other
              third party.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              Pickmymaid doesn&apos;t validate the legitimacy of any of its
              Users or the information they publish on the Website by
              interviewing, screening, or otherwise vetting them. You accept all
              risks, including the possibility of bodily injury, that occur with
              interacting with other people you meet through the website&apos;s
              services for Pickmymaid.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed">
              For further details on the offered Services, please frequently
              check the Website.
            </p>
          </section>

          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">
              2. Accounts and Passwords for Users
            </h2>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              You must register for a user account (&quot;User Account&quot;) on
              the website in order to access and use some services of the
              website. Your name, email address, and any other data or
              information that Pickmymaid has requested during the client
              account registration process (&quot;Registration Data&quot;) must
              be provided to Pickmymaid as part of the process to create,
              register, and maintain your User Account.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              In these Terms of Service, &quot;Personal Information&quot; refers
              to any data that can be used to identify a specific individual,
              including name, email address, mailing address, gender, date of
              birth, and any other information that you choose to submit
              electronically through the Website. Pickmymaid will only use
              Registration Data and Personal Information in line with the
              Pickmymaid Privacy Policy and these Terms of Service.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              You will get a password and account designation from Pickmymaid
              after your user account has been created and approved. You are
              entirely responsible for any and all activities that take place
              under your username and password, and you are responsible for
              keeping your username and password private.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              You understand and agree that Pickmymaid has the right, in its
              sole discretion, to reject your request to create a User Account,
              as well as to cancel or suspend your User Account, if Pickmymaid
              has a good faith belief that you or a third party who has used
              your User Account has misused or may misuse the Website or
              Services.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              You further agree that you will (a) keep all Registration Data
              current, complete, and accurate; (b) keep any passwords or other
              account identifiers confidential; and (c) be responsible for all
              activities that take place under such password or account. You
              agree to promptly alert Pickmymaid of any unauthorized use of your
              user name and password or any other security breach involving your
              User Account.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed">
              You acknowledge that Pickmymaid may, at any time and for any
              reason, terminate your password, User Account (or any part
              thereof), or use of the Website or Services, and remove any
              Website content from the Site.
            </p>
          </section>

          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">
              3. Eligibility Requirements
            </h2>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              You warrant and represent the following in order to be qualified
              to use the services provided by Pickmymaid:
            </p>
            <ul className="flex flex-col gap-2 text-sm text-dark/70 leading-relaxed list-disc list-inside mb-6">
              <li>
                That on the date your user account was created, you were
                nineteen (19) years of age or older.
              </li>
              <li>
                That you are legally able to work in the country where you are
                looking for employment if you are registering as a service
                provider.
              </li>
              <li>
                You are not currently required to register as a sex offender
                with any government agency in any jurisdiction, and neither you
                nor any member of your household may have ever been the subject
                of a complaint, restraining order, or any other legal action or
                criminal offense involving violence, abuse, neglect, fraud, or
                any other offense that involves endangering the safety of
                others.
              </li>
            </ul>

            <h3 className="text-sm font-semibold text-dark mb-3">
              Fees for User Accounts, Terms, and Renewal
            </h3>
            <div className="flex flex-col gap-3 text-sm text-dark/70 leading-relaxed">
              <p>
                <span className="font-medium text-dark">A.</span> The Website
                and the Services are free for Service Providers to utilize.
              </p>
              <p>
                <span className="font-medium text-dark">B.</span> For usage of
                the Website and the Services, Pickmymaid charges Service
                Seekers. Once complete payment is received, Pickmymaid will
                activate a Service Seeker&apos;s account and give them access to
                the database of Service Providers.
              </p>
              <p>
                <span className="font-medium text-dark">C.</span> In the case of
                requesting a refund or canceling your paid membership with
                pickmymaid.com, please note that membership fees are
                non-refundable under any circumstances. pickmymaid.com Maid and
                Nannies Portal Service membership is intended for your personal
                use only, and it cannot be assigned or transferred to another
                individual or entity.
              </p>
              <p>
                <span className="font-medium text-dark">D.</span> Employees or
                affiliates of cleaning companies, competitor businesses,
                maid/nanny services, or any other housekeeping-related
                organizations are prohibited from registering on our platform.
                Pickmymaid is dedicated to connecting individual households with
                independent service providers only.
              </p>
            </div>
          </section>

          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">4. Renew</h2>
            <p className="text-sm text-dark/70 leading-relaxed">
              Your package won&apos;t automatically renew once it expires. If
              you want to continue the service you&apos;ll need to renew
              manually.
            </p>
          </section>

          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">
              5. Site Usage Restrictions
            </h2>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              Except as expressly provided herein, you agree not to utilize the
              Website for any commercial purpose without first obtaining
              Pickmymaid&apos;s prior written consent. Without limiting the
              generality of the aforementioned, prohibited commercial uses
              include using the Website and/or any Website content primarily for
              the purpose of earning advertising or subscription revenue,
              selling advertising space on any third-party websites, and using
              the Website to post jobs, find childcare at home, find nannies, or
              run babysitting businesses without Pickmymaid&apos;s express
              consent.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed">
              Use of Website content that has been expressly designated in
              writing by Pickmymaid (&quot;Designated Information&quot;) in
              press releases or on external websites is not considered a
              prohibited commercial use as long as it does not primarily serve
              to generate advertising revenue or to compete with Pickmymaid.
            </p>
          </section>

          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">
              6. Individual Information and Service Use
            </h2>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              You acknowledge that our Privacy Policy, which is hereby
              incorporated by reference and is a part of the Terms of Service,
              governs your use of the Website and the Services. You fully
              consent to the collection, storage, use, and disclosure of your
              information, including your Personal Information, in accordance
              with the Privacy Policy by accepting the Terms of Service or by
              using the Website.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              You acknowledge and agree that the information and materials you
              put on the website are true, accurate, current, and comprehensive.
              Additionally, you guarantee and represent the following:
            </p>
            <ul className="flex flex-col gap-2 text-sm text-dark/70 leading-relaxed list-disc list-inside">
              <li>
                You agree to use Pickmymaid&apos;s services solely for your own
                benefit, accept responsibility for all account activity, and
                refrain from transferring your account to anyone else.
              </li>
              <li>
                You are authorized and have the right to post any information
                you choose to submit about other people or yourself.
              </li>
              <li>
                You agree not to give any other user of the website, including
                Pickmymaid, inaccurate, false, misleading, or defamatory
                information.
              </li>
              <li>
                You agree not to upload or transmit any material that is
                unlawful, threatening, harassing, defamatory, racially
                offensive, abusive, obscene, profane, sexually explicit, or
                material that infringes or violates the rights of any third
                party.
              </li>
              <li>
                You must abide by all applicable laws and rules when using the
                Website and the services offered by Pickmymaid.
              </li>
            </ul>
          </section>

          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">
              7. Use Permit
            </h2>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              In accordance with these Terms of Service, Pickmymaid hereby
              grants you a limited, non-exclusive, personal, non-transferable,
              non-sublicensable, and revocable right and license to (a) access
              the Website in order to receive the Services, and (b) access,
              view, and print any information and documentation made available
              on the Website for your personal, non-commercial, and
              informational use only.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed">
              These Terms of Service do not provide you any additional ownership
              or license interest in or under any patent, trademark, copyright,
              or other intellectual property or proprietary right of Pickmymaid
              or any other party. This license may be terminated by Pickmymaid
              at any time and for any cause.
            </p>
          </section>

          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">
              8. Intellectual Property
            </h2>
            <p className="text-sm text-dark/70 leading-relaxed">
              The Pickmymaid company is the owner of this website and all
              associated intellectual property rights. All intellectual property
              rights, whether registered or unregistered, of any sort, including
              but not limited to copyright, trademarks, domain names, design
              rights, brand aspects, database rights, and patents, are reserved
              by Pickmymaid.
            </p>
          </section>

          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">
              9. Trade-marks
            </h2>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              Pickmymaid (or its suppliers, partner companies, or third-party
              licensors) owns any brand components, company names, website
              names, logos, and registered and unregistered trademarks shown on
              the Website or used in connection with the Services. Except as
              stipulated in these Terms of Service or with the express written
              agreement of Pickmymaid, it is strictly forbidden to use or misuse
              any trade-marks or brand elements of Pickmymaid.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed">
              Nothing on this website should be interpreted as granting,
              explicitly or implicitly, any license or permission to use a
              trademark or other trademark element without Pickmymaid&apos;s
              prior written authorization.
            </p>
          </section>

          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">
              10. Use Limitations
            </h2>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              You undertake to use the Website and Services only for legal
              reasons and in accordance with all local, state, national, and
              international laws and regulations, including all privacy and
              personal information laws, in addition to abiding by these Terms
              of Service. Use of the Website and its Services is not permitted
              in any situation where doing so would be against the law.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed">
              All Users are urged by Pickmymaid to report any inappropriate,
              illegal, or improper behavior of other Users, including but not
              limited to behavior on the website and behavior related to the
              services offered. Please contact Pickmymaid at{" "}
              <Link
                href="mailto:support@pickmymaid.com"
                className="text-primary hover:underline"
              >
                support@pickmymaid.com
              </Link>
              .
            </p>
          </section>

          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">
              11. Registration Termination
            </h2>
            <p className="text-sm text-dark/70 leading-relaxed">
              In the case Pickmymaid determines you are ineligible to use the
              Services, have broken any of the terms of service, or have
              otherwise mistreated the Website or Services, Pickmymaid reserves
              the right, in its sole discretion, to terminate your account or
              access to all or part of the Pickmymaid Website and/or Services.
            </p>
          </section>

          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">
              12. Liability Limitations
            </h2>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              YOU UNDERSTAND THAT USING OR RELYING ON THIS WEBSITE OR ITS
              SERVICES IS ENTIRELY AT YOUR RISK.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              Pickmymaid SHALL NOT BE LIABLE TO YOU OR TO ANY OTHER PARTY FOR
              ANY LOSSES, COSTS, OR DAMAGES OF ANY KIND OR NATURE WHATSOEVER
              SUFFERED OR INCURRED IN CONNECTION WITH THE USE (OR THE INABILITY
              TO USE) THE WEBSITE, SERVICES, OR ANY PICKMYMAID CONTENT OR THIRD
              PARTY CONTENT (REGARDLESS OF THE FORM OF ACTION OR THEORY OF
              LIABILITY, INCLUDING FOR BREACH OF CONTRACT, TORT, NEGLIGENCE,
              EQUITY, STRICT LIABILITY, BY STATUTE OR OTHERWISE, AND REGARDLESS
              OF THE OCCURRENCE OF A FUNDAMENTAL BREACH OR FAILURE OF ESSENTIAL
              PURPOSE).
            </p>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              Pickmymaid is no longer involved in the relationship between the
              Service Seeker and Service Provider once a match has been made
              between them.
            </p>
            <p className="text-sm text-dark/70 leading-relaxed">
              IN NO CIRCUMSTANCES WHATSOEVER SHALL ANY OF PICKMYMAID, ITS
              DIRECTORS, OFFICERS, EMPLOYEES, SHAREHOLDERS, AFFILIATES, AGENTS
              AND THIRD-PARTY CONTRACTORS, SUPPLIERS AND LICENSORS BE LIABLE FOR
              ANY SPECIAL, MORAL, DISCIPLINARY, SUBSTANTIAL, ACCIDENTAL OR
              INDIRECT DAMAGES OF ANY KIND OR NATURE WHATSOEVER THAT ARE
              SUFFERED OR INCURRED IN ANY CONNECTION WITH THE USE OF WEBSITE OR
              THE PROVISION OF THE SERVICES.
            </p>
          </section>

          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">
              13. Compensation
            </h2>
            <p className="text-sm text-dark/70 leading-relaxed">
              You consent to defend, indemnify, and hold harmless Pickmymaid,
              its parents, subsidiaries, affiliates, officers, and employees
              from any claim, demand, or damage made by a third party resulting
              from or arising out of the User&apos;s use of or conduct in
              relation to the Services and Website, including any reasonable
              legal fees.
            </p>
          </section>

          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">
              14. Additional
            </h2>
            <div className="flex flex-col gap-5">
              <div>
                <h3 className="text-sm font-semibold text-dark mb-1">
                  Language
                </h3>
                <p className="text-sm text-dark/70 leading-relaxed">
                  These Terms of Service and all other connected papers on the
                  Website must be read in English, as this is the express wish
                  of Pickmymaid.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-dark mb-1">
                  Non-assignment
                </h3>
                <p className="text-sm text-dark/70 leading-relaxed">
                  Except with Pickmymaid&apos;s prior written agreement, you may
                  not assign, transfer, or grant a sublicense in connection with
                  these Terms of Service. Without your permission, Pickmymaid
                  may transfer, assign, or otherwise deal with its rights and
                  obligations hereunder.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-dark mb-1">
                  Changes to the Terms of Service
                </h3>
                <p className="text-sm text-dark/70 leading-relaxed">
                  The terms of service may be changed at any moment without
                  prior notification by Pickmymaid. You accept the terms of the
                  current Terms of Service and Privacy Policy by using the
                  Website. Technical, grammatical, or photographic errors could
                  exist in the content and materials on the website. The
                  accuracy and timeliness of the materials are not guaranteed by
                  Pickmymaid.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-dark mb-1">
                  External Website Links
                </h3>
                <p className="text-sm text-dark/70 leading-relaxed">
                  Links to other websites or resources, including those run by
                  companies other than Pickmymaid, are available on this website
                  for your convenience. Pickmymaid is not in charge of and has
                  no control over the terms of service and privacy policies of
                  the owners of external websites or resources. You do so at
                  your own risk when you access and use any websites or
                  resources belonging to third parties.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-dark mb-1">
                  Services and Websites Are Offered &quot;As Is&quot;
                </h3>
                <p className="text-sm text-dark/70 leading-relaxed">
                  The Company Parties make no representations or warranties,
                  either stated or implied, as to the accuracy or completeness
                  of any information, data, contributions, or content made
                  available through the Website or offered as part of the
                  Services. YOU ACKNOWLEDGE AND AGREE THAT THE WEBSITE,
                  SERVICES, ANY CONTENT, AND ALL OTHER DATA ARE GIVEN ON AN
                  &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS.
                </p>
              </div>
            </div>
          </section>

          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">
              15. Unauthorized Data Use &amp; Legal Consequences
            </h2>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              Unauthorized access, collection, use, or distribution of maid,
              nanny, or domestic worker data from Pickmymaid&apos;s portal for
              commercial purposes, including by competitor companies or
              individuals, are strictly prohibited. We will take legal action
              against any company found engaging in such activities under UAE
              laws, including but not limited to:
            </p>
            <ul className="flex flex-col gap-2 text-sm text-dark/70 leading-relaxed list-disc list-inside mb-3">
              <li>
                Federal Decree-Law No. 9 of 2022 (Regulation of Employment of
                Domestic Workers) – Protects domestic workers&apos; rights and
                privacy, prohibiting unauthorized data collection or misuse.
              </li>
              <li>
                Federal Decree-Law No. 45 of 2021 (UAE Data Protection Law) –
                Prohibits the collection, processing, or sale of personal data
                without explicit consent.
              </li>
              <li>
                Federal Decree-Law No. 34 of 2021 (Cybercrime Law) –
                Criminalizes unauthorized access, data scraping, misuse, and
                trading of personal or business data from online platforms.
              </li>
              <li>
                UAE Competition Law (Federal Law No. 4 of 2012) – Prohibits
                unfair competition practices, including data theft for
                commercial advantage.
              </li>
              <li>
                Breach of Pickmymaid&apos;s Terms of Service – Any unauthorized
                use of our platform&apos;s database will be considered a
                violation of our terms and may lead to civil and criminal
                proceedings.
              </li>
            </ul>
            <p className="text-sm text-dark/70 leading-relaxed">
              Violators will face immediate legal action, including reporting to
              UAE authorities such as the Ministry of Human Resources and
              Emiratisation (MOHRE) and the Telecommunications and Digital
              Government Regulatory Authority (TDRA), along with claims for
              damages and other penalties.
            </p>
          </section>

          <section className="py-8">
            <h2 className="text-base font-semibold text-dark mb-3">
              16. Contact Us
            </h2>
            <p className="text-sm text-dark/70 leading-relaxed mb-3">
              You can get in touch with Pickmymaid at{" "}
              <Link
                href="mailto:support@pickmymaid.com"
                className="text-primary hover:underline"
              >
                support@pickmymaid.com
              </Link>{" "}
              if you have any inquiries about the Terms of Service or need to
              provide us notice or communicate with us regarding the Terms of
              Service.
            </p>
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
