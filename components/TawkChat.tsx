import Script from "next/script";

// tawk.to live chat — the same chat (and support team) as the BuddyRide
// app's "Chat with us". From the tawk.to dashboard: Administration →
// Channels → Chat Widget.
const TAWK_PROPERTY_ID = "6afdec878f6ab93c93095183";
const TAWK_WIDGET_ID = "1k7nu7t8o";

/**
 * The tawk.to chat bubble, on every page (rendered once in app/layout.tsx).
 * tawk.to's snippet, loaded through next/script so it runs once after the
 * page is interactive instead of blocking it.
 */
export default function TawkChat() {
  return (
    <Script id="tawk-to" strategy="lazyOnload">
      {`
        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
        (function () {
          var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
          s1.async = true;
          s1.src = "https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}";
          s1.charset = "UTF-8";
          s1.setAttribute("crossorigin", "*");
          s0.parentNode.insertBefore(s1, s0);
        })();
      `}
    </Script>
  );
}
