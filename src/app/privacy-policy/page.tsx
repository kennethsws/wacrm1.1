export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for TerraXFlame WACRM.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-slate-900">
      <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-600">Last updated: June 2, 2026</p>

      <section className="mt-8 space-y-4">
        <p>
          TerraXFlame WACRM is a customer relationship management system used to
          manage WhatsApp Business communications, contacts, conversations,
          message templates, broadcasts, and related customer support workflows.
        </p>
        <p>
          We collect information that users provide when using the CRM, such as
          account details, contact records, message content, tags, notes, and
          operational activity. WhatsApp message data is processed to send,
          receive, organize, and respond to customer communications.
        </p>
        <p>
          We use this information to operate the CRM, provide customer support,
          maintain security, troubleshoot issues, and improve business
          operations. We do not sell personal information.
        </p>
        <p>
          Data may be processed by service providers used to operate this
          deployment, including hosting, database, authentication, and WhatsApp
          Business Platform providers. These providers process data only as
          needed to deliver the service.
        </p>
        <p>
          Users may request access, correction, deletion, or export of their
          personal information by contacting us. Some data may need to be
          retained where required for security, legal, accounting, or operational
          reasons.
        </p>
        <p>
          Contact:{" "}
          <a className="text-blue-700 underline" href="mailto:kennethsws@icloud.com">
            kennethsws@icloud.com
          </a>
        </p>
      </section>
    </main>
  );
}
