"use server";

import { submitContactForm } from "@/lib/hubspot";

export type FormState = { success: boolean; error?: string } | null;

export async function submitContact(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const firstname = formData.get("firstname")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const phone = formData.get("phone")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!firstname || !email) {
    return { success: false, error: "Nombre y email son obligatorios." };
  }

  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRx.test(email)) {
    return { success: false, error: "El email no parece válido." };
  }

  try {
    await submitContactForm({ firstname, email, phone, message });
    return { success: true };
  } catch (err) {
    console.error("HubSpot error:", err);
    return {
      success: false,
      error: "Hubo un problema al enviar. Inténtalo de nuevo o escríbenos a hola@vibio.land",
    };
  }
}
