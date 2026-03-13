"use client";
import { useEffect } from "react";

export default function OpenAppPage() {
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();

    if (/iphone|ipad|ipod/.test(ua)) {
      // Try to open the app via custom scheme or universal link
      window.location.href = "buddyride://open"; // <-- replace with your app's scheme/universal link
      // Fallback to App Store if not installed
      setTimeout(() => {
        window.location.href =
          "https://apps.apple.com/us/app/buddyride/id6751210259";
      }, 1500);
    } else if (/android/.test(ua)) {
      // Try to open the app via intent or custom scheme
      window.location.href =
        "intent://open#Intent;scheme=buddyride;package=com.elonpaul.buddyrideapp;end";
      // Fallback to Play Store if not installed
      setTimeout(() => {
        window.location.href =
          "https://play.google.com/store/apps/details?id=com.elonpaul.buddyrideapp";
      }, 1500);
    } else {
      // Desktop fallback
      alert(
        "Please open this link on your mobile device to download BuddyRide.",
      );
    }
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Redirecting...</h1>
      <p>
        If you have the BuddyRide app installed, it will open automatically.
      </p>
      <p>
        If not, you’ll be redirected to the App Store or Play Store shortly.
      </p>
    </div>
  );
}
