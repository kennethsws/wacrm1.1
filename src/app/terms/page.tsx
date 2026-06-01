export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for TerraXFlame WACRM.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-slate-900">
      <h1 className="text-3xl font-semibold tracking-tight">Terms of Service</h1>
      <p className="mt-2 text-sm text-slate-600">Last updated: June 2, 2026</p>

      <section className="mt-8 space-y-4">
        <p>
          TerraXFlame WACRM is provided for managing customer communications and
          business workflows through WhatsApp Business and related CRM features.
          Users are responsible for using the service lawfully and for ensuring
          that their customer communications comply with applicable laws,
          WhatsApp Business Platform policies, and Meta requirements.
        </p>
        <p>
          Users must not use the CRM to send unlawful, misleading, abusive,
          spam, or unauthorized messages. Users are responsible for obtaining any
          required customer consent before sending business messages.
        </p>
        <p>
          Access to the CRM may be suspended or removed if use creates security
          risk, violates platform policies, or interferes with normal operation
          of the service.
        </p>
        <p>
          The service is provided as configured for this business deployment.
          We may update, maintain, or change the CRM to improve reliability,
          security, and compliance.
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
