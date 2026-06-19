import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Delete Account",
  description: "Request deletion of your Heiwa account and associated data.",
};

export default function DeleteAccountPage() {
  return (
    <LegalPage
      eyebrow="Your account"
      title="Delete your account"
      intro="You can request deletion of your Heiwa account and the personal information associated with it."
      sections={[
        {
          title: "Delete from the app",
          content: <p>If account controls are available in your version of Heiwa, open Settings, choose Account, then select Delete Account and follow the confirmation steps.</p>,
        },
        {
          title: "Request deletion by email",
          content: (
            <>
              <p>Email <a className="font-semibold text-[#168f70] underline" href="mailto:support@heiwa.fun?subject=Delete%20My%20Heiwa%20Account">support@heiwa.fun</a> from the address associated with your account. Use the subject “Delete My Heiwa Account.”</p>
            </>
          ),
        },
        {
          title: "What will be deleted",
          content: <p>We will delete or anonymize account information, cloud saved preferences, and cloud saved mixes associated with the verified account, except information we must retain for legal, security, fraud prevention, or transaction record obligations.</p>,
        },
        {
          title: "Local data",
          content: <p>Sounds, mixes, or preferences stored only on your device may remain until you remove them in the app or delete the app. Deleting your account does not automatically cancel an Apple subscription.</p>,
        },
        {
          title: "Cancel your subscription separately",
          content: <p>If you subscribe to Heiwa Plus, cancel the subscription in your Apple account settings. Account deletion and subscription cancellation are separate actions.</p>,
        },
        {
          title: "Verification and timing",
          content: <p>We may ask for reasonable information to verify account ownership. We aim to complete verified deletion requests within 30 days unless a longer period is required or permitted by law.</p>,
        },
      ]}
    />
  );
}
