import React, { useEffect } from 'react';

export const Analytics = () => {
  useEffect(() => {
    const GA_MEASUREMENT_ID = 'G-4W62B9P7SM';

    if (!document.querySelector(`script[src="https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`)) {
      const scriptTag = document.createElement('script');
      scriptTag.async = true;
      scriptTag.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(scriptTag);

      scriptTag.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID);
      };
    }
  }, []);

  return null;
};
