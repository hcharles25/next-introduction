import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { useEffect, useState } from "react";

import AnimatedDiv from "@components/FramerMotion/AnimatedDiv";
import { BlogPost } from "@lib/interface/sanity";
import { FiPrinter } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import Newsletter from "@components/Newsletter";
import ScrollProgressBar from "@components/ScrollProgressBar";
import ShareOnSocialMedia from "../components/ShareOnSocialMedia";
import { getFormattedDate } from "@utils/date";
import { opacityVariant } from "@content/FramerMotionVariants";
import useBookmarkBlogs from "@hooks/useBookmarkBlogs";
import useWindowLocation from "@hooks/useWindowLocation";
import ReactMarkdown from "react-markdown";

// import { PostType } from "@lib/types";
// import { RxPencil2 } from "react-icons/rx";

// import TableOfContents from "@components/TableOfContents";
// import { getAuthorData } from "@content/user";

// import Newsletter from "../components/Newsletter";

export default function BlogLayout({
  post,
  children,
}: {
  post: BlogPost;
  children: JSX.Element | string;
}) {
  const { currentURL } = useWindowLocation();
  // const [isTOCActive, setIsTOCActive] = useState(false);
  const [alreadyBookmarked, setAlreadyBookmarked] = useState(false);
  // const author = getAuthorData(post.meta.org);

  const { isAlreadyBookmarked, removeFromBookmark } = useBookmarkBlogs(
    "blogs",
    []
  );

  useEffect(() => {
    setAlreadyBookmarked(isAlreadyBookmarked(post.slug.current));
  }, [isAlreadyBookmarked, post.slug]);

  return (
    <section className="mt-[44px] md:mt-[60px]  relative !overflow-hidden">
      {/* TOC */}
      {/* <TableOfContents
        isTOCActive={isTOCActive}
        setIsTOCActive={setIsTOCActive}
        tableOfContents={post.tableOfContents}
      /> */}

      {/* Blog Content */}
      <section
        className="p-5 sm:pt-10 relative font-barlow prose dark:prose-invert md:ml-[35%] lg:ml-[30%] print:!mx-auto"
        style={{
          maxWidth: "800px",
          // opacity: `${isTOCActive} && "0.3"`,
          // margin: `${post.tableOfContents.length <= 0} && "auto"`,
        }}
      >
        <ScrollProgressBar />
        <h1 className="text-3xl  font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>

        <div className="flex items-start !w-full text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-2 flex-wrap w-full justify-between">
            <div className="flex items-center gap-2">
              <div className="w-[40px]">
                <Image
                  height={933}
                  width={933}
                  alt={
                    post.organization
                      ? post.organization.name
                      : post.author.name
                  }
                  src={
                    post.organization
                      ? post.organization.image.asset.url
                      : post.author.image.asset.url
                  }
                  className="rounded-full !m-0"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center text-sm gap-1">
                  <Link
                    href="/about"
                    className="text-sm font-medium hover:underline"
                  >
                    {post.author.name}
                  </Link>
                  {post.organization && (
                    <span>
                      for{" "}
                      <Link
                        href={post.organization.website}
                        className="font-medium hover:underline"
                      >
                        {post.organization.name}
                      </Link>
                    </span>
                  )}
                </div>
                <span className="text-xs">
                  {getFormattedDate(new Date(post.publishedAt))}
                </span>
              </div>
              {/* <div className="flex flex-col w-full text-xs sm:text-sm sm:flex-row sm:justify-between">
                <p className="flex items-center gap-2 font-medium !my-0">
                  <div className="flex items-center text-sm gap-1">
                    <Link
                      href="/about"
                      className="text-sm font-medium hover:underline"
                    >
                      {post.author.name}
                    </Link>
                    {author.org && (
                      <span>
                        for <span className="font-medium">{author.org}</span>
                      </span>
                    )}
                  </div>
                </p>
              </div> */}
            </div>
            {/* <div className="flex items-center gap-1">
              <div className="py-1 px-2 text-xs rounded-md bg-white text-black dark:bg-darkSecondary dark:text-gray-400">
                {getFormattedDate(new Date(post.meta.date))}
              </div>
              <div className="py-1 px-2 text-xs rounded-md bg-white text-black dark:bg-darkSecondary dark:text-gray-400">
                {post.meta.readingTime.text}
              </div>
              <div className="py-1 px-2 text-xs rounded-md bg-white text-black dark:bg-darkSecondary dark:text-gray-400">
                {post.meta.readingTime.words} words
              </div>
            </div> */}
          </div>

          <div className="flex gap-2 ml-4">
            {/* <Link
              href={`https://github.com/j471n/j471n.in/edit/main/posts/${post.meta.slug}.mdx`}
              title="Edit on Github"
              target="_blank"
              rel="noopener noreferrer"
              className="transition select-none active:scale-75"
            >
              <RxPencil2 className="text-gray-700 w-7 h-7 dark:text-gray-300 stroke-slate-300 " />
            </Link> */}
            <button
              title="Save for Later"
              className="transition active:scale-75"
              onClick={() => {
                alreadyBookmarked ? removeFromBookmark(post.slug.current) : "";
                // : addToBookmark(post.meta);
              }}
            >
              {alreadyBookmarked ? (
                <BsBookmarkFill className="w-6 h-6 " />
              ) : (
                <BsBookmark className="w-6 h-6 " />
              )}
            </button>
          </div>
        </div>

        {console.log(post.body)}
        {/* {console.log(children)} */}
        {/* <div
          dangerouslySetInnerHTML={{ __html: children.props.children }}
        ></div> */}
        <AnimatedDiv
          variants={opacityVariant}
          className="max-w-full prose-sm blog-container sm:prose-base prose-pre:bg-white prose-img:mx-auto prose-img:rounded-md dark:prose-pre:bg-darkSecondary prose-pre:saturate-150 dark:prose-pre:saturate-100 marker:text-black dark:marker:text-white prose-h4:!mb-6"
        >
          {children}
          {/* <ReactMarkdown>{post.body}</ReactMarkdown> */}
        </AnimatedDiv>
        <Newsletter />
        <div className="flex flex-col items-center w-full gap-4 my-10 print:hidden">
          <h3
            style={{ margin: "0" }}
            className="text-xl font-semibold dark:text-white"
          >
            Share on Social Media:
          </h3>
          <ShareOnSocialMedia
            className="flex flex-wrap items-center gap-2 w-fit"
            title={post.title}
            url={currentURL}
            summary={post.excerpt}
            cover_image={post.mainImage.asset.url}
          >
            <div className="p-2 text-white bg-gray-700 rounded-full cursor-pointer">
              <FiPrinter className="w-4 h-4" onClick={() => window.print()} />
            </div>
          </ShareOnSocialMedia>
        </div>
      </section>
    </section>
  );
}
