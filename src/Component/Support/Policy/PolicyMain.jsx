import React from "react";
import styled from "styled-components";
import { color } from "framer-motion";

const Wrapper = styled.div`
  background-color: black;
  padding: 20px 0px;
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
  overflow: hidden;
  h1 {
    font-size: ${(props) => props.theme.fontSize.lg};
    margin-bottom: 5px;
  }
  P {
    font-size: ${(props) => props.theme.fontSize.base};
    line-height: 20px;
  }
  li {
    margin-bottom: 5px;
  }
  a {
    color: ${(props) => props.theme.colors.purple};
  }
`;

const Section = styled.section`
  margin: 20px 0;
`;

const SectionTitle = styled.h1``;

const PolicyMain = () => {
  return (
    <Wrapper>
      <Container>
        <h1>Terms of Use for Baron Boost</h1>
        <p>
          <strong>Effective Date:</strong> 6/13/2024
        </p>

        <Section>
          <SectionTitle>1. Definitions</SectionTitle>
          <ul>
            <li>
              <strong>"Website"</strong>: Refers to Baron Boost and all related
              services.
            </li>
            <li>
              <strong>"Baron Boost"</strong>: Refers to Baron Boost website
              specifically [[DOMAIN URL]].
            </li>
            <li>
              <strong>"Admin"</strong>: Individuals who manage the Website.
            </li>
            <li>
              <strong>"User"</strong>: Refers to everyone using the Website.
            </li>
            <li>
              <strong>"Customer"</strong>: Individuals who use the Website to
              purchase boosting services.
            </li>
            <li>
              <strong>"Booster"</strong>: Individuals who provide boosting
              services on the Website.
            </li>
          </ul>
        </Section>

        <Section>
          <SectionTitle>2. Acceptance of Terms</SectionTitle>
          <p>
            By accessing or using our Website, you acknowledge that you have
            read, understood, and agree to be bound by these Terms of Use and
            any applicable laws. If you do not agree with these terms, please
            refrain from using our Website.
          </p>
        </Section>

        <Section>
          <SectionTitle>3. Eligibility</SectionTitle>
          <p>
            You must be at least 18 years old to use this Website. By using the
            Website, you represent and warrant that you meet this age
            requirement.
          </p>
        </Section>

        <Section>
          <SectionTitle>4. Account Registration</SectionTitle>
          <p>
            <strong>Users:</strong> To purchase services, you must create an
            account. You agree to provide accurate, current, and complete
            information during the registration process.
          </p>
          <p>
            <strong>Boosters:</strong> To offer services, you must apply and be
            approved by the Admin. You agree to maintain the accuracy of your
            information.
          </p>
        </Section>

        <Section>
          <SectionTitle>5. Use of the Website</SectionTitle>
          <p>
            <strong>Users:</strong> You may use the Website to browse and
            purchase boosting services. You agree not to use the Website for any
            unlawful purposes.
          </p>
          <p>
            <strong>Boosters:</strong> You agree to provide the services as
            described in your profile and adhere to the standards and guidelines
            set by the Admin.
          </p>
        </Section>

        <Section>
          <SectionTitle>6. User Agreement</SectionTitle>
          <ul>
            <li>Provide a valid email address.</li>
            <li>
              Not use our intellectual property, including logos and branding,
              without permission.
            </li>
            <li>Provide accurate and current payment information.</li>
            <li>
              Agree to the "Purge Policy," which entails an annual database
              wipe.
            </li>
          </ul>
        </Section>

        <Section>
          <SectionTitle>7. Customer Agreement</SectionTitle>
          <ul>
            <li>Provide your game login information for the services.</li>
            <li>Be responsible for the accuracy of your order information.</li>
            <li>Change your login password after the order is completed.</li>
            <li>
              Not log in to your game account while your order is active (until
              the order is fulfilled).
            </li>
            <li>
              Inform us of any issues with your order if there is no progress,
              or the problem will not be resolved.
            </li>
            <li>
              Place orders only through our Website; we are not responsible for
              orders placed directly with boosters or any third party.
            </li>
            <li>
              If the account being boosted has 4 consecutive losses or derank
              cause by our booster please notify Baron Boost as soon as
              possible.
            </li>
            <li>
              Acknowledge that solo boosting is against Riot Games' policies. By
              using this service, you agree to take the risk that your account
              might get banned if it is detected. Although this rarely happens,
              if it does, please contact us at{" "}
              <a href="mailto:baronboostservice@gmail.com">
                baronboostservice@gmail.com
              </a>{" "}
              or through our website.
            </li>
            <li>
              Understand that failing to follow this agreement will result in no
              refund if any issues arise.
            </li>
          </ul>
        </Section>

        <Section>
          <SectionTitle>8. Booster Agreement</SectionTitle>
          <ul>
            <li>
              Not vandalize customer accounts, including altering loot, crafting
              items, dismanteling items ...etc or actions that may lead to
              account bans.
            </li>
            <li>
              Not engage in any in-game chat using the customer's account.
            </li>
            <li>
              Not proceed with boosting if the order information does not match
              the information in the provided login account.
            </li>
            <li>
              Not log in to the customer's account once the order is completed.
            </li>
            <li>Not advertise through the customer's account.</li>
            <li>
              Notify Baron Boost if you are unable to boost the customer's
              account within 3 days.
            </li>
            <li>
              Notify Baron Boost if you fail to boost an account (derank or four
              consecutive losses).
            </li>
            <li>
              Understand that failing to follow this agreement will result in no
              payout if any issues arise.
            </li>
          </ul>
        </Section>

        <Section>
          <SectionTitle>9. The Purge Policy</SectionTitle>
          <p>
            "The Purge" is an event during which Baron Boost will wipe customer
            data for security purposes and to maintain low database costs. This
            helps keep boosting costs low for customers and ensures a high
            payout rate for boosters. Prior to the Purge, the Website will close
            temporarily to stop any incoming orders, allowing us to complete all
            existing orders. This event will not affect customer orders or
            booster payouts.
          </p>
        </Section>

        <Section>
          <SectionTitle>10. Payments and Refunds</SectionTitle>
          <ul>
            <li>
              All payments for boosting services must be made through the
              Website else orders will not be refundable.
            </li>
            <li>
              Refunds will be issued under the following conditions:
              <ul>
                <li>If the order has not been fulfilled.</li>
                <li>If boosting fails.</li>
                <li>If the order information is incorrect.</li>
                <li>
                  If the order is idling (not being boosted) for a long period
                  of time (1 week).
                </li>
              </ul>
            </li>
          </ul>
        </Section>

        <Section>
          <SectionTitle>11. Code of Conduct</SectionTitle>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Website for any illegal activities.</li>
            <li>Harass, abuse, or harm other users or boosters.</li>
            <li>Misrepresent yourself or your services.</li>
            <li>Interfere with the Website’s operation.</li>
          </ul>
          <p>
            The Admin reserves the right to suspend or terminate accounts that
            violate these terms.
          </p>
        </Section>

        <Section>
          <SectionTitle>12. Intellectual Property</SectionTitle>
          <p>
            The Website and its original content, features, and functionality
            are owned by Baron Boost and are protected by international
            copyright, trademark, patent, trade secret, and other intellectual
            property or proprietary rights laws.
          </p>
          <p>
            You agree not to reproduce, duplicate, copy, sell, resell, or
            exploit any portion of the Website without express written
            permission from the Admin.
          </p>
        </Section>

        <Section>
          <SectionTitle>13. Limitation of Liability</SectionTitle>
          <p>
            The Website is provided on an "as is" and "as available" basis. The
            Admin makes no representations or warranties of any kind, express or
            implied, as to the operation of the Website or the information,
            content, or materials included on the Website.
          </p>
          <p>
            To the full extent permissible by applicable law, the Admin
            disclaims all warranties, express or implied, including, but not
            limited to, implied warranties of merchantability and fitness for a
            particular purpose. The Admin will not be liable for any damages of
            any kind arising from the use of the Website.
          </p>
        </Section>

        <Section>
          <SectionTitle>14. Indemnification</SectionTitle>
          <p>
            You agree to indemnify, defend, and hold harmless Baron Boost, its
            Admins, directors, employees, agents, and third parties, for any
            losses, costs, liabilities, and expenses (including reasonable
            attorney's fees) relating to or arising out of your use of or
            inability to use the Website, any user postings made by you, your
            violation of any terms of this Agreement, your violation of any
            rights of a third party, or your violation of any applicable laws,
            rules, or regulations.
          </p>
        </Section>

        <Section>
          <SectionTitle>15. Changes to Terms</SectionTitle>
          <p>
            The Admin reserves the right to modify these Terms of Use at any
            time. Changes will be effective immediately upon posting on the
            Website. Your continued use of the Website after any such changes
            constitutes your acceptance of the new Terms of Use.
          </p>
        </Section>

        <Section>
          <SectionTitle>16. Governing Law</SectionTitle>
          <p>
            These Terms of Use are governed by and construed in accordance with
            the laws of United States/Indiana, and you irrevocably submit to the
            exclusive jurisdiction of the courts in that State or location.
          </p>
        </Section>

        <Section>
          <SectionTitle>17. Affiliations</SectionTitle>
          <ul>
            <li>
              We are not affiliated with Riot Games or any other video game
              publishers.
            </li>
            <li>
              We are not affiliated with any other game boosting websites.
            </li>
            <li>
              We are not affiliated with PayPal, our payment method provider.
            </li>
          </ul>
        </Section>

        <Section>
          <SectionTitle>18. Privacy Policy</SectionTitle>
          <p>
            We value your privacy and are committed to protecting your personal
            information. By using our Website, you consent to the collection and
            use of your information as outlined in our Privacy Policy.
          </p>
          <ul>
            <li>
              <strong>Information Collection:</strong> We collect information
              that you provide to us, such as your name, email address, game
              login information, and payment details.
            </li>
            <li>
              <strong>Use of Information:</strong> We use this information to
              provide and improve our services, process transactions, and
              communicate with you.
            </li>
            <li>
              <strong>Data Security:</strong> We implement a variety of security
              measures to maintain the safety of your personal information.
              However, no method of transmission over the internet, or method of
              electronic storage, is 100% secure.
            </li>
            <li>
              <strong>Data Retention:</strong> We retain your information for as
              long as necessary to fulfill the purposes outlined in this Privacy
              Policy unless otherwise required by law.
            </li>
            <li>
              <strong>Your Rights:</strong> You have the right to access,
              correct, or delete your personal information. To exercise these
              rights, please contact us at{" "}
              <a href="mailto:baronboostservice@gmail.com">
                baronboostservice@gmail.com
              </a>
              .
            </li>
          </ul>
        </Section>

        <Section>
          <SectionTitle>19. Contact Information</SectionTitle>
          <p>
            If you have any questions about these Terms of Use, please contact
            us at{" "}
            <a href="mailto:baronboostservice@gmail.com">
              baronboostservice@gmail.com
            </a>
            .
          </p>
        </Section>

        <p>
          By using this Website, you acknowledge that you have read, understood,
          and agree to be bound by these Terms of Use.
        </p>
      </Container>
    </Wrapper>
  );
};

export default PolicyMain;
