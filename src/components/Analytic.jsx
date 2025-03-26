// @ts-check
import { useEffect } from 'react';

/** @type {string} */
const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || "G-4W62B9P7SM";

export function Analytic() {
  useEffect(() => {
    // @ts-ignore
    if (!window.gtag) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      document.head.appendChild(script);

      const scriptInline = document.createElement("script");
      scriptInline.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}');
      `;
      document.head.appendChild(scriptInline);
    }
  }, []);

  return null;
}