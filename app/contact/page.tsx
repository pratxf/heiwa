import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Heiwa support.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <LegalPage
      eyebrow="We are here to help"
      title="Contact Heiwa"
      intro="Questions, feedback, or a problem with the app? Send us a note and include enough detail for us to help."
      sections={[
        {
          title: "Email support",
          content: (
            <>
              <p>Email us at <a className="font-semibold text-[#168f70] underline" href="mailto:support@heiwa.fun">support@heiwa.fun</a>.</p>
            </>
          ),
        },
        {
          title: "What to include",
          content: <p>Please include your device model, iOS version, Heiwa app version, and a clear description of what happened. Screenshots are helpful when available. Never send passwords or full payment information.</p>,
        },
        {
          title: "Subscriptions and refunds",
          content: <p>Apple manages App Store billing, cancellations, and refund requests. You can manage subscriptions in your Apple account settings and request eligible refunds through Apple.</p>,
        },
        {
          title: "Account deletion",
          content: <p>To delete a Heiwa account and associated account data, follow the instructions on our <a className="font-semibold text-[#168f70] underline" href="/delete-account">Delete Account page</a>.</p>,
        },
      ]}
    />
  );
}
