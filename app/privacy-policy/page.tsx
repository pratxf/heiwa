import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Heiwa handles your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Your privacy"
      title="Privacy policy"
      intro="This policy explains what information Heiwa may process, why it is used, and the choices available to you."
      sections={[
        {
          title: "Information we may collect",
          content: (
            <>
              <p>Heiwa is designed to work with as little personal information as possible. If you use the app without an account, sound preferences, timer settings, and saved mixes may be stored locally on your device.</p>
              <p>If you create an account or contact support, we may receive information such as your name, email address, account identifier, and the content of your support request.</p>
            </>
          ),
        },
        {
          title: "How we use information",
          content: (
            <p>We use information to provide and improve Heiwa, restore eligible purchases, respond to support requests, protect the service, and comply with legal obligations. We do not sell your personal information.</p>
          ),
        },
        {
          title: "Subscriptions and purchases",
          content: (
            <p>Heiwa Plus purchases are processed by Apple through the App Store. We do not receive or store your full payment card details. Apple may provide purchase status and transaction identifiers needed to unlock or restore subscription features.</p>
          ),
        },
        {
          title: "Local storage and offline use",
          content: (
            <p>Many Heiwa features can use sounds and preferences stored on your device. Deleting the app may remove locally stored mixes and settings unless a backup or account sync feature is available and enabled.</p>
          ),
        },
        {
          title: "Service providers",
          content: (
            <p>We may use trusted providers for hosting, account services, diagnostics, and customer support. They may process information only to provide services to Heiwa and must protect it appropriately.</p>
          ),
        },
        {
          title: "Data retention and security",
          content: (
            <p>We retain personal information only for as long as needed to provide the service, meet legal requirements, resolve disputes, and maintain security. We use reasonable safeguards, but no method of storage or transmission can be guaranteed completely secure.</p>
          ),
        },
        {
          title: "Your choices and account deletion",
          content: (
            <p>You may request access, correction, or deletion of account information by visiting the <a className="font-semibold text-[#168f70] underline" href="/delete-account">Delete Account page</a> or emailing <a className="font-semibold text-[#168f70] underline" href="mailto:support@heiwa.fun">support@heiwa.fun</a>.</p>
          ),
        },
        {
          title: "Children",
          content: (
            <p>Heiwa is not directed to children under 13, and we do not knowingly collect personal information from children under 13. Contact us if you believe a child has provided personal information.</p>
          ),
        },
        {
          title: "Contact",
          content: (
            <p>Questions about this policy can be sent to <a className="font-semibold text-[#168f70] underline" href="mailto:support@heiwa.fun">support@heiwa.fun</a>.</p>
          ),
        },
      ]}
    />
  );
}
