import { h } from "preact";
import { useEffect } from "preact/hooks";

export function Analytic() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-4W62B9P7SM`;
    document.head.appendChild(script);

    const scriptInline = document.createElement("script");
    scriptInline.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-4W62B9P7SM');
    `;
    document.head.appendChild(scriptInline);
  }, []);

  return null;
}
