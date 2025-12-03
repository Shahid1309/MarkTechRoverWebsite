import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Layout from '../components/layout/Layout';

const PrivacyPolicyPage: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Layout>
      <div className={`min-h-screen py-12 px-4 transition-all duration-500 ${theme === 'dark' ? 'dark' : ''}`}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy & Terms of Use</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          {/* Terms & Conditions Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-6">Terms & Conditions</h2>
            
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="mb-4">
                This document is an electronic record in terms of Information Technology Act, 2000 and rules
                there under as applicable and the amended provisions pertaining to electronic records in various
                statutes as amended by the Information Technology Act, 2000. This electronic record is generated
                by a computer system and does not require any physical or digital signatures.
              </p>

              <p className="mb-4">
                This document is published in accordance with the provisions of Rule 3 (1) of the Information
                Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and
                regulations, privacy policy and Terms of Use for access or usage of domain name
                https://marktechrover.com/ ('Website'), including the related mobile site and mobile application
                (hereinafter referred to as 'Platform').
              </p>

              <p className="mb-4">
                The Platform is owned by Ritikkumarpoddar, a company incorporated under the Companies Act,
                1956 with its registered office at shivaalik 83-c ,New Delhi ,India (hereinafter referred to as
                'Platform Owner', 'we', 'us', 'our').
              </p>

              <p className="mb-4">
                Your use of the Platform and services and tools are governed by the following terms and
                conditions ("Terms of Use") as applicable to the Platform including the applicable policies which
                are incorporated herein by way of reference. If You transact on the Platform, You shall be subject
                to the policies that are applicable to the Platform for such transaction. By mere use of the Platform,
                You shall be contracting with the Platform Owner and these terms and conditions including the
                policies constitute Your binding obligations, with Platform Owner. These Terms of Use relate to
                your use of our website, goods (as applicable) or services (as applicable) (collectively, 'Services').
              </p>

              <p className="mb-4">
                Any terms and conditions proposed by You which are in addition to or which conflict with these
                Terms of Use are expressly rejected by the Platform Owner and shall be of no force or effect.
                These Terms of Use can be modified at any time without assigning any reason. It is your
                responsibility to periodically review these Terms of Use to stay informed of updates.
              </p>

              <p className="mb-4">
                For the purpose of these Terms of Use, wherever the context so requires 'you', 'your' or 'user' shall
                mean any natural or legal person who has agreed to become a user/buyer on the Platform.
              </p>

              <div className="bg-accent/10 p-4 rounded-lg mb-6">
                <p className="font-semibold text-accent">
                  ACCESSING, BROWSING OR OTHERWISE USING THE PLATFORM INDICATES YOUR
                  AGREEMENT TO ALL THE TERMS AND CONDITIONS UNDER THESE TERMS OF USE,
                  SO PLEASE READ THE TERMS OF USE CAREFULLY BEFORE PROCEEDING.
                </p>
              </div>

              <p className="mb-4">
                The use of Platform and/or availing of our Services is subject to the following Terms of Use:
              </p>

              <ol className="list-decimal list-inside space-y-4 mb-6">
                <li>
                  To access and use the Services, you agree to provide true, accurate and complete information
                  to us during and after registration, and you shall be responsible for all acts done through the
                  use of your registered account on the Platform.
                </li>
                <li>
                  Neither we nor any third parties provide any warranty or guarantee as to the accuracy,
                  timeliness, performance, completeness or suitability of the information and materials offered
                  on this website or through the Services, for any specific purpose. You acknowledge that such
                  information and materials may contain inaccuracies or errors and we expressly exclude
                  liability for any such inaccuracies or errors to the fullest extent permitted by law.
                </li>
                <li>
                  Your use of our Services and the Platform is solely and entirely at your own risk and
                  discretion for which we shall not be liable to you in any manner. You are required to
                  independently assess and ensure that the Services meet your requirements.
                </li>
                <li>
                  The contents of the Platform and the Services are proprietary to us and are licensed to us.
                  You will not have any authority to claim any intellectual property rights, title, or interest in
                  its contents. The contents includes and is not limited to the design, layout, look and graphics.
                </li>
                <li>
                  You acknowledge that unauthorized use of the Platform and/or the Services may lead to
                  action against you as per these Terms of Use and/or applicable laws.
                </li>
                <li>
                  You agree to pay us the charges associated with availing the Services.
                </li>
                <li>
                  You agree not to use the Platform and/ or Services for any purpose that is unlawful, illegal or
                  forbidden by these Terms, or Indian or local laws that might apply to you.
                </li>
                <li>
                  You agree and acknowledge that website and the Services may contain links to other third
                  party websites. On accessing these links, you will be governed by the terms of use, privacy
                  policy and such other policies of such third party websites. These links are provided for your
                  convenience for provide further information.
                </li>
                <li>
                  You understand that upon initiating a transaction for availing the Services you are entering
                  into a legally binding and enforceable contract with the Platform Owner for the Services.
                </li>
                <li>
                  You shall indemnify and hold harmless Platform Owner, its affiliates, group companies (as
                  applicable) and their respective officers, directors, agents, and employees, from any claim or
                  demand, or actions including reasonable attorney's fees, made by any third party or penalty
                  imposed due to or arising out of Your breach of this Terms of Use, privacy Policy and other
                  Policies, or Your violation of any law, rules or regulations or the rights (including
                  infringement of intellectual property rights) of a third party.
                </li>
                <li>
                  Notwithstanding anything contained in these Terms of Use, the parties shall not be liable for
                  any failure to perform an obligation under these Terms if performance is prevented or
                  delayed by a force majeure event.
                </li>
                <li>
                  These Terms and any dispute or claim relating to it, or its enforceability, shall be governed
                  by and construed in accordance with the laws of India.
                </li>
                <li>
                  All disputes arising out of or in connection with these Terms shall be subject to the exclusive
                  jurisdiction of the courts in New Delhi and Delhi.
                </li>
                <li>
                  All concerns or communications relating to these Terms must be communicated to us using
                  the contact information provided on this website.
                </li>
              </ol>
            </div>
          </section>

          {/* Privacy Policy Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-6">Privacy Policy</h2>
            
            <div className="prose prose-lg max-w-none text-foreground">
              <h3 className="text-2xl font-semibold mb-4">Introduction</h3>
              <p className="mb-4">
                This Privacy Policy describes how Ritikkumarpoddar and its affiliates (collectively "
                Ritikkumarpoddar, we, our, us") collect, use, share, protect or otherwise process your information/
                personal data through our website https://marktechrover.com/ (hereinafter referred to as Platform).
                Please note that you may be able to browse certain sections of the Platform without registering with us.
              </p>

              <p className="mb-4">
                We do not offer any product/service under this Platform outside India and your personal data will
                primarily be stored and processed in India. By visiting this Platform, providing your information or
                availing any product/service offered on the Platform, you expressly agree to be bound by the terms and
                conditions of this Privacy Policy, the Terms of Use and the applicable service/product terms and
                conditions, and agree to be governed by the laws of India including but not limited to the laws applicable
                to data protection and privacy. If you do not agree please do not use or access our Platform.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Collection</h3>
              <p className="mb-4">
                We collect your personal data when you use our Platform, services or otherwise interact with
                us during the course of our relationship and related information provided from time to time. Some of the
                information that we may collect includes but is not limited to personal data / information provided to us
                during sign-up/registering or using our Platform such as name, date of birth, address, telephone/mobile
                number, email ID and/or any such information shared as proof of identity or address.
              </p>

              <p className="mb-4">
                Some of the sensitive personal data may be collected with your consent, such as your bank account or credit or debit
                card or other payment instrument information or biometric information such as your facial features or
                physiological information (in order to enable use of certain features when opted for, available on the
                Platform) etc all of the above being in accordance with applicable law(s).
              </p>

              <p className="mb-4">
                You always have the option to not provide information, by choosing not to use a particular service or feature on the Platform. 
                We may track your behaviour, preferences, and other information that you choose to provide on our Platform.
                This information is compiled and analysed on an aggregated basis.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Usage</h3>
              <p className="mb-4">
                We use personal data to provide the services you request. To the extent we use your personal data
                to market to you, we will provide you the ability to opt-out of such uses. We use your personal data to
                assist sellers and business partners in handling and fulfilling orders; enhancing customer experience; to
                resolve disputes; troubleshoot problems; inform you about online and offline offers, products, services,
                and updates; customise your experience; detect and protect us against error, fraud and other criminal
                activity; enforce our terms and conditions; conduct marketing research, analysis and surveys; and as
                otherwise described to you at the time of collection of information.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Sharing</h3>
              <p className="mb-4">
                We may share your personal data internally within our group entities, our other corporate
                entities, and affiliates to provide you access to the services and products offered by them. These entities
                and affiliates may market to you as a result of such sharing unless you explicitly opt-out.
              </p>

              <p className="mb-4">
                We may disclose personal data to third parties such as sellers, business partners, third party service providers
                including logistics partners, prepaid payment instrument issuers, third-party reward programs and other
                payment opted by you. These disclosure may be required for us to provide you access to our services and
                products offered to you, to comply with our legal obligations, to enforce our user agreement, to facilitate
                our marketing and advertising activities, to prevent, detect, mitigate, and investigate fraudulent or illegal
                activities related to our services.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Security Precautions</h3>
              <p className="mb-4">
                To protect your personal data from unauthorised access or disclosure, loss or
                misuse we adopt reasonable security practices and procedures. Once your information is in our
                possession or whenever you access your account information, we adhere to our security guidelines to
                protect it against unauthorised access and offer the use of a secure server.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Data Deletion and Retention</h3>
              <p className="mb-4">
                You have an option to delete your account by visiting your profile and
                settings on our Platform, this action would result in you losing all information related to your account.
                You may also write to us at the contact information provided below to assist you with these requests.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Your Rights</h3>
              <p className="mb-4">
                You may access, rectify, and update your personal data directly through the functionalities
                provided on the Platform.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Consent</h3>
              <p className="mb-4">
                By visiting our Platform or by providing your information, you consent to the collection, use,
                storage, disclosure and otherwise processing of your information on the Platform in accordance with this
                Privacy Policy.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Changes to this Privacy Policy</h3>
              <p className="mb-4">
                Please check our Privacy Policy periodically for changes. We may
                update this Privacy Policy to reflect changes to our information practices. We may alert / notify you
                about the significant changes to the Privacy Policy, in the manner as may be required under applicable
                laws.
              </p>

              <div className="bg-accent/10 p-4 rounded-lg mb-6">
                <h3 className="text-2xl font-semibold mb-4">Refund Policy</h3>
                <p className="font-semibold text-accent">
                  We don't offer any kind of refund.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-background border border-border rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h3>
            <p className="text-muted-foreground mb-2">
              For any questions or concerns regarding this Privacy Policy or Terms of Use, please contact us at:
            </p>
            <div className="space-y-2 text-foreground">
              <p><strong>Company:</strong> Ritikkumarpoddar</p>
              <p><strong>Address:</strong> shivaalik 83-c, New Delhi, India</p>
              <p><strong>Website:</strong> https://marktechrover.com/</p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage; 