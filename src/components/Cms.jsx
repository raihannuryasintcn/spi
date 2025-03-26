import { h } from "preact";
import { blogPosts } from "../data/blogData";

export function CMS({ slug }) {
  const article = blogPosts.find((post) => post.slug === slug);

  if (!article) {
    return <p>Artikel tidak ditemukan.</p>;
  }

  return (
    <article>
      <h1>{article.title}</h1>
      <p>{article.date}</p>
      <img src={article.image} alt={article.title} />
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
  );
}
