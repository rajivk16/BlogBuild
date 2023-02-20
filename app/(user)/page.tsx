import BlogList from "../../components/BlogList";
import { Preview } from "sanity";
import PreviewBlogList from "../../components/PreviewBlogList";
import PreviewSuspense from "../../components/PreviewSuspense";
import { client } from "../../lib/sanity.client";
import { groq } from "next-sanity";
import { previewData } from "next/headers";

export const revalidate = 60;

const query = groq`
*[_type=='post'] {
    ...,
    author->,
    categories[]->
} | order(_createdAt desc)
`;

export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#f7ab0a]">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(query);
  return <BlogList posts={posts} />;
}
