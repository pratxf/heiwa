import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing your use of Heiwa.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Using Heiwa"
      title="Terms of use"
      intro="These terms govern your access to and use of the Heiwa app, website, and related services."
      sections={[
        {
          title: "Acceptance of these terms",
          content: <p>By using Heiwa, you agree to these terms and our Privacy Policy. If you do not agree, please do not use the service.</p>,
        },
        {
          title: "Heiwa is a wellness tool",
          content: <p>Heiwa provides ambient sounds and timers for relaxation, focus, and sleep routines. It is not medical care, diagnosis, or treatment. Seek qualified professional advice for health concerns.</p>,
        },
        {
          title: "Accounts",
          content: <p>You are responsible for information submitted through your account and for keeping access credentials secure. You must provide accurate information and notify us of suspected unauthorized access.</p>,
        },
        {
          title: "Subscriptions",
          content: (
            <>
              <p>Heiwa Plus may be offered as an auto renewing subscription. Payment is charged through your Apple ID account after purchase confirmation. Subscriptions renew unless cancelled through your Apple account settings before the end of the current billing period.</p>
              <p>Prices, trial eligibility, billing periods, and available features are shown in the App Store purchase screen and may vary by region.</p>
            </>
          ),
        },
        {
          title: "Cancellations and refunds",
          content: <p>You can manage or cancel an App Store subscription in your Apple account settings. Refund requests for App Store purchases are handled by Apple and are subject to Apple policies.</p>,
        },
        {
          title: "Permitted use",
          content: <p>Heiwa grants you a personal, limited, nonexclusive, nontransferable right to use the service. You may not copy, resell, reverse engineer, interfere with, or misuse the app, its sounds, branding, or systems except where applicable law permits.</p>,
        },
        {
          title: "Availability and changes",
          content: <p>We may improve, modify, suspend, or discontinue features. We do not guarantee uninterrupted availability, and downloaded or local content may be affected by device storage, operating system changes, or app removal.</p>,
        },
        {
          title: "Disclaimer and limitation",
          content: <p>Heiwa is provided on an as available basis to the extent permitted by law. We are not responsible for indirect or consequential losses resulting from use of or inability to use the service.</p>,
        },
        {
          title: "Termination",
          content: <p>You may stop using Heiwa at any time. We may restrict access when necessary to protect users, enforce these terms, comply with law, or address misuse.</p>,
        },
        {
          title: "Contact",
          content: <p>Questions about these terms can be sent to <a className="font-semibold text-[#168f70] underline" href="mailto:support@heiwa.fun">support@heiwa.fun</a>.</p>,
        },
      ]}
    />
  );
}
