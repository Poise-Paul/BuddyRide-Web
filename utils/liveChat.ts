import { SUPPORT_EMAIL } from "@/config/countries";

// Opens the tawk.to live chat (loaded on every page by components/TawkChat)
// — the same support chat as the app's "Chat with us". If it hasn't loaded
// (blocked, offline), opens an email to support instead.
export const openLiveChat = () => {
  const tawk = (window as unknown as { Tawk_API?: { maximize?: () => void } }).Tawk_API;
  if (typeof tawk?.maximize === "function") {
    tawk.maximize();
    return;
  }
  window.location.href = `mailto:${SUPPORT_EMAIL}`;
};
