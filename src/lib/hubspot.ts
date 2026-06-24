const PORTAL_ID = process.env.HUBSPOT_PORTAL_ID!;
const FORM_GUID = process.env.HUBSPOT_FORM_GUID!;

export interface ContactFormData {
  firstname: string;
  lastname?: string;
  email: string;
  phone?: string;
  message?: string;
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const fields = Object.entries(data)
    .filter(([, v]) => v !== undefined && v !== "")
    .map(([name, value]) => ({ name, value }));

  const res = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields,
        context: { pageUri: typeof window !== "undefined" ? window.location.href : "" },
      }),
    }
  );

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`HubSpot submission failed: ${res.status} ${body}`);
  }
}
