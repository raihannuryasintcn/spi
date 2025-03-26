import { h } from "preact";
import { Helmet } from "react-helmet-async";

export function SEO({ 
  title, 
  description, 
  keywords, 
  url, 
  image = "https://dummyimage.com/700x400/496ebd/ffffff.png",
  publishedDate = "2025-03-25",
  modifiedDate = "2025-03-25"
}) {
  return (
    <Helmet>
      {/* Meta SEO Utama */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph (Facebook & LinkedIn) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Alternate (Multibahasa) - Opsional */}
      <link rel="alternate" hrefLang="id" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      {/* Schema Markup JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": title,
          "description": description,
          "image": image,
          "author": {
            "@type": "Person",
            "name": "Admin"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Scarlet Power Indonesia",
            "logo": {
              "@type": "ImageObject",
              "url": "https://scarletpowerindonesia.com/logo.png"
            }
          },
          "datePublished": publishedDate,
          "dateModified": modifiedDate,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
          }
        })}
      </script>
    </Helmet>
  );
}
