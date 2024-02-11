import Image from "next/image";
import { PortableText } from "@portabletext/react";
import React from "react";
import { RichTextComponents } from "../../../../components/RichTextComponents";
import { client } from "../../../../lib/sanity.client";
import { groq } from "next-sanity";
import urlFor from "../../../../lib/urlFor";


type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`*[_typeof=='post']
  {
    slug
  }`;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({ slug }));
}

async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
        ...,
        author->,
        categories[]->
    }
    `;

  const post: Post = await client.fetch(query, { slug });

  return (
    // <article className="px-10 pb-28">
    //   <section className="space-y-2 border border-[#f7ab0a] text-white">
    //     <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
    //       <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
    //         <Image
    //           className="object-cover object-center mx-auto"
    //           src={urlFor(post.mainImage).url()}
    //           alt={post.author.name}
    //           fill
    //         />
    //       </div>
    //       <section className="p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full">
    //         <div
    //           className="flex flex-col md:flex-row justify-between gap-y-5
    //         "
    //         >
    //           <div>
    //             <h1 className="text-4xl font-extrabold mb-2">{post.title}</h1>
    //             <p>
    //               {new Date(post._createdAt).toLocaleDateString("en-US", {
    //                 day: "numeric",
    //                 month: "long",
    //                 year: "numeric",
    //               })}
    //             </p>
    //           </div>
    //           <div className="flex items-center space-x-2">
    //             <Image
    //               className="rounded-full"
    //               src={urlFor(post.author.image).url()}
    //               alt={post.author.name}
    //               height={40}
    //               width={40}
    //             />
    //             <div className="w-64">
    //               <h3 className="text-lg font-bold">{post.author.name}</h3>
    //               <div>{/* Author BIO */}</div>
    //             </div>
    //           </div>
    //         </div>
    //         <div>
    //           <h2 className="italic pt-10">{post.description}</h2>
    //           <div className="flex items-center justify-end mt-auto space-x-2">
    //             {post.categories.map((category) => (
    //               <p
    //                 key={category._id}
    //                 className="bg-gradient-to-r from-orange-400 to-rose-400 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4"
    //               >
    //                 {category.title}
    //               </p>
    //             ))}
    //           </div>
    //         </div>
    //       </section>
    //     </div>
    //   </section>

    //   <div className="py-10">
    //     {/* <Image
    //       className=""
    //       src={urlFor(post.mainImage).url()}
    //       alt={post.author.name}
    //       fill
    //     /> */}
    //     <PortableText value={post.body} components={RichTextComponents} />
    //   </div>
    // </article>
//     <article className="px-10 pb-28">
//   <section className="space-y-2 text-white">
//     <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
//       {/* Glowing Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-25 blur-lg rounded-lg"></div>
      
//       {/* Content Overlay */}
//       <div className="relative z-10 w-full h-full">
//         <section className="p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full">
//           <div
//             className="flex flex-col md:flex-row justify-between gap-y-5"
//           >
//             <div>
//               <h1 className="text-4xl font-extrabold mb-2">{post.title}</h1>
//               <p>
//                 {new Date(post._createdAt).toLocaleDateString("en-US", {
//                   day: "numeric",
//                   month: "long",
//                   year: "numeric",
//                 })}
//               </p>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Image
//                 className="rounded-full"
//                 src={urlFor(post.author.image).url()}
//                 alt={post.author.name}
//                 height={40}
//                 width={40}
//               />
//               <div className="w-64">
//                 <h3 className="text-lg font-bold">{post.author.name}</h3>
//                 <div>{/* Author BIO */}</div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <h2 className="italic pt-10">{post.description}</h2>
//             <div className="flex items-center justify-end mt-auto space-x-2">
//               {post.categories.map((category) => (
//                 <p
//                   key={category._id}
//                   className="bg-gradient-to-r from-orange-400 to-rose-400 text-black px-3 py-1 rounded-full text-sm font-semibold mt-4"
//                 >
//                   {category.title}
//                 </p>
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   </section>

//   <div className="py-10">
//     {/* Commented out to avoid duplication
//     <Image
//       className=""
//       src={urlFor(post.mainImage).url()}
//       alt={post.author.name}
//       fill
//     /> */}
//     <PortableText value={post.body} components={RichTextComponents} />
//   </div>
// </article>
<article className="px-10 pb-28">
  <section className="space-y-2 text-white">
    <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
      {/* Enhanced Glowing Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-50 blur-xl rounded-lg shadow-lg shadow-purple-500/50"></div>
      
      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full">
        <section className="p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full">
          <div className="flex flex-col md:flex-row justify-between gap-y-5">
            <div>
              <h1 className="text-4xl font-extrabold mb-2">{post.title}</h1>
              <p>
                {new Date(post._createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              {/* Ensure Image component is imported from 'next/image' or your preferred image handler */}
              <Image
                className="rounded-full"
                src={urlFor(post.author.image).url()}
                alt={post.author.name}
                height={40}
                width={40}
              />
              <div className="w-64">
                <h3 className="text-lg font-bold">{post.author.name}</h3>
                <div>{/* Author BIO */}</div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="italic pt-10">{post.description}</h2>
            <div className="flex items-center justify-end mt-auto space-x-2">
              {post.categories.map((category) => (
                <p
                  key={category._id}
                  className="bg-gradient-to-r from-orange-400 to-rose-400 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4"
                >
                  {category.title}
                </p>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>

  <div className="py-10">
    <PortableText value={post.body} components={RichTextComponents} />
  </div>
</article>

  );
}

export default Post;