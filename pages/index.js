// Static Data Import--------
import skills from "../content/skillsData";
import certificates from "../content/certificatesData";
import projects from "../content/projectData";
import socialMedia from "../content/socialMedia";
import faqs from "../content/faqData";
// Static Data END--------

import Link from "next/link";
import Image from "next/image";
import ExploreMoreButton from "../components/Buttons/ExploreMoreButton";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import Metadata from "../components/MetaData";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import AnimatedText from "../components/FramerMotion/AnimatedText";
import {
  popUpFromBottomForText,
  headingFromLeft,
  opacityVariant,
  popUp,
} from "../content/FramerMotionVariants";
import AnimatedHeading from "../components/FramerMotion/AnimatedHeading";
import AnimatedDiv from "../components/FramerMotion/AnimatedDiv";
import AnimatedButton from "../components/FramerMotion/AnimatedButton";
import { MdVerified } from "react-icons/md";
import { homeProfileImage } from "../utils/utils";
import TopContainer from "../components/Home/TopContainer";
import { buttonsLinearVariant } from "../content/FramerMotionVariants";
import { resumeDownloadLink } from "../utils/utils";

export default function Home({ blogs }) {
  return (
    <>
      <Metadata title="About" />
      <div className="dark:bg-darkPrimary dark:text-gray-100">
        {/* HomPage */}

        <TopContainer className="!from-purple-900/50">
          <div className="w-full md:w-1/2 grid place-items-center">
            <div className="text-center md:text-left my-7 md:my-0">
              <AnimatedText
                variants={opacityVariant}
                infinity={true}
                className="uppercase font-medium text-[10px] xs:text-sm sm:text-base text-center sm:text-left text-slate-700 dark:text-gray-400"
              >
                Hi there! I'm
              </AnimatedText>
              <AnimatedHeading
                variants={opacityVariant}
                infinity={true}
                className="capitalize font-bold text-4xl sm:text-4xl lg:text-6xl 3xl:text-8xl font-sarina text-gray-800 dark:text-gray-300"
              >
                Jatin Sharma
              </AnimatedHeading>
              <AnimatedText
                variants={opacityVariant}
                infinity={true}
                className="text-base sm:text-xl font-thin  uppercase tracking-widest font-merriweather text-slate-700 dark:text-gray-400"
              >
                React Developer
              </AnimatedText>

              <div className="flex gap-2 mt-4 md:mt-4 justify-center md:justify-start text-xs sm:text-base">
                <AnimatedButton
                  variants={buttonsLinearVariant}
                  infinity={true}
                  className="px-8 py-3 sm:px-6 sm:py-2 rounded-full  font-semibold relative ring-2 ring-purple-700 select-none text-purple-700 lg:hover:bg-purple-700 dark:text-purple-300"
                  onClick={() => (window.location.href = "#view")}
                >
                  About me
                </AnimatedButton>
                <AnimatedButton
                  variants={buttonsLinearVariant}
                  infinity={true}
                  className="px-8 py-3 sm:px-6 sm:py-2 rounded-full  font-semibold relative  bg-purple-700 select-none text-white  dark:text-purple-200"
                  onClick={() => window.open(resumeDownloadLink, "_self")}
                >
                  Download CV
                </AnimatedButton>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 grid place-items-center">
            <AnimatedDiv
              variants={popUp}
              infinity={true}
              className="relative w-3/5 xs:w-1/3 sm:!w-2/5 md:!w-1/2 group"
            >
              <div
                className="absolute inset-0 bg-purple-800 animate-[spin_3s_linear_infinite]"
                style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
              ></div>
              <Image
                src={homeProfileImage}
                className="rounded-full shadow"
                layout="responsive"
                width={400}
                height={400}
                alt="cover Profile Image"
                quality={75}
                priority={true}
              />
            </AnimatedDiv>
          </div>
        </TopContainer>

        <div id="view">
          {/* About me */}
          <section className="px-5 sm:px-20 sm:mx-20 text-md sm:text-base">
            <HomeHeading title="About Me" />
            <AnimatedText
              className="text-slate-500 dark:text-slate-400 font-medium"
              variants={popUpFromBottomForText}
              infinity={true}
            >
              Hi, welcome! I'm Jatin Sharma and I'm a self-taught React
              Developer 👋 as I am currently perusing my Bachelor Degree in
              Computer Science. I wanted to learn the web development so
              desperately in my High School, then as the time passed I've
              managed to get all the resources i need to start this journey,
              I've watched so many tutorial followed so many articles and built
              some projects. I've also some learned other programming languages
              such as Python, C, C++, etc. In my future, I also want to dive in
              the Mobile Development as well as Backend Development. I am
              currently Learning many things and backend is one on them. In my
              spare time I also write blogs on{" "}
              <Link href="https://dev.to/j471n" passHref>
                <a className="text-purple-600 underline">Dev.to</a>
              </Link>{" "}
              about what I am learning or some tutorials as well. If you are
              interested then must visit. 👋
            </AnimatedText>
          </section>
          {/* Skills Section */}
          <section>
            <HomeHeading title="My Top ⚡kills" />

            <div className="snap-center flex gap-2 overflow-x-scroll no-scrollbar p-5 md:px-10">
              {skills.map((skill) => {
                if (!skill.pinned) return null;
                return (
                  <div
                    title={skill.name}
                    key={skill.id}
                    className="home-content-section flex items-center justify-between overflow-hidden  before:absolute before:h-full before:w-20 before:bg-purple-600 before:-right-4 before:-z-10 before:rotate-[20deg] before:scale-y-150 before:top-4 hover:before:scale-[7]   before:duration-500 "
                  >
                    <AnimatedDiv
                      variants={popUpFromBottomForText}
                      infinity={true}
                      className="flex items-center gap-2"
                    >
                      <div className="relative w-10 h-10">
                        <Image
                          width={50}
                          height={50}
                          alt={skill.name}
                          src={`/${skill.icon}`}
                          quality={50}
                        />
                      </div>

                      <p className="uppercase font-bold text-sm sm:text-base">
                        {skill.name}
                      </p>
                    </AnimatedDiv>
                    <AnimatedText
                      variants={opacityVariant}
                      infinity={true}
                      className="uppercase font-bold text-lg border-t-[3px] border-purple-100 text-purple-300 z-10"
                    >
                      {skill.level}
                    </AnimatedText>
                  </div>
                );
              })}
              <ExploreMoreButton link="/skills" />
            </div>
          </section>
          {/* Blogs Section */}
          <section>
            <HomeHeading title="Recent Blogs 👩‍💻" />
            <div className="home-section-container no-scrollbar">
              {blogs.map((blog) => {
                return (
                  <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
                    <div className="home-content-section hover-slide-animation">
                      <AnimatedDiv
                        variants={popUpFromBottomForText}
                        infinity={true}
                      >
                        <Image
                          className="hidden w-full h-full rounded-xl mb-3 cursor-pointer select-none"
                          src={blog.cover_image}
                          alt={blog.title}
                          width={500}
                          height={207}
                          layout="responsive"
                          quality={25}
                        />
                      </AnimatedDiv>
                      <AnimatedDiv
                        variants={popUpFromBottomForText}
                        infinity={true}
                        className="flex items-center justify-between my-3 text-sm sm:text-base"
                      >
                        <p className="flex items-center space-x-1">
                          <AiOutlineCalendar />
                          <span className="text-xs font-medium">
                            {new Date(Date.parse(blog.published_at))
                              .toDateString()
                              .slice(4)}
                          </span>
                        </p>
                        <p className="flex items-center space-x-1">
                          <BiTime />
                          <span className="text-xs ml-1 font-medium">
                            {blog.reading_time_minutes} mins
                          </span>
                        </p>
                      </AnimatedDiv>
                      <AnimatedHeading
                        variants={popUpFromBottomForText}
                        infinity={true}
                        className="text-base sm:text-lg mb-1 font-bold md:font-extrabold truncate text-slate-600 dark:text-slate-300"
                      >
                        {blog.title}
                      </AnimatedHeading>
                      <AnimatedText
                        variants={popUpFromBottomForText}
                        className="text-xs sm:text-sm truncate-3 text-slate-400 font-medium"
                        infinity={true}
                      >
                        {blog.description}
                      </AnimatedText>
                    </div>
                  </Link>
                );
              })}

              <ExploreMoreButton link="/blogs" />
            </div>
          </section>
          {/* Certification Section */}
          <section>
            <HomeHeading title="Certification 📜" />
            <div className="home-section-container no-scrollbar">
              {certificates.map((certificate) => {
                if (!certificate.pinned) return;
                return (
                  <div
                    key={certificate.id}
                    className="home-content-section no-scrollbar flex flex-col  cursor-auto hover-slide-animation"
                  >
                    <AnimatedDiv
                      variants={popUpFromBottomForText}
                      infinity={true}
                      className="flex items-center justify-between mb-3 text-slate-400"
                    >
                      <p className="font-bold capitalize text-xs sm:text-sm">
                        {certificate.issuedBy.orgName}
                      </p>
                      <p className="font-medium text-xs sm:text-sm">
                        {certificate.issuedDate}
                      </p>
                    </AnimatedDiv>
                    <div className="flex items-center gap-4">
                      <AnimatedDiv
                        variants={popUpFromBottomForText}
                        infinity={true}
                        className="flex relative"
                      >
                        <Image
                          width={40}
                          height={40}
                          src={certificate.issuedBy.orgLogo}
                          alt={certificate.issuedBy.orgName}
                          quality={50}
                          objectFit="contain"
                          layout="fixed"
                          placeholder="blur"
                          blurDataURL={certificate.issuedBy.orgLogo}
                        />
                      </AnimatedDiv>
                      <AnimatedText
                        variants={popUpFromBottomForText}
                        infinity={true}
                        className="capitalize font-semibold text-sm md:text-base border-purple-600 text-slate-600 dark:text-slate-300"
                      >
                        {certificate.title}
                      </AnimatedText>
                    </div>

                    <AnimatedButton
                      variants={popUpFromBottomForText}
                      infinity={true}
                      className="px-3 py-2 mt-2  bg-purple-700 !text-white text-center font-semibold outline-none w-full mx-auto flex items-center text-xs justify-center space-x-3 rounded-md auto-row"
                      onClick={() => window.open(certificate.urls.pdfURL)}
                    >
                      <MdVerified className="text-xl text-white" />
                      <p>View Certification</p>
                    </AnimatedButton>
                  </div>
                );
              })}
              {/* <ExploreMoreButton link="/certificates" /> */}
            </div>
          </section>
          {/* Project Section */}
          <section>
            <HomeHeading title="Projects 📂" />
            <div className="home-section-container no-scrollbar">
              {projects.map((project) => {
                if (!project.pinned) return null;

                return (
                  <div
                    key={project.id}
                    className="home-content-section no-scrollbar rounded-lg flex flex-col justify-start hover-slide-animation"
                    onClick={() => window.open(project.githubURL)}
                  >
                    <AnimatedDiv
                      variants={popUpFromBottomForText}
                      infinity={true}
                    >
                      <Image
                        className="rounded-xl mb-2"
                        width={360}
                        height={200}
                        src={project.coverURL}
                        alt={project.name}
                        layout="responsive"
                        objectFit="contain"
                        quality={50}
                      />
                    </AnimatedDiv>
                    <AnimatedHeading
                      variants={popUpFromBottomForText}
                      infinity={true}
                      className="capitalize my-2 mt-4 font-bold md:font-extrabold text-sm md:text-base dark:text-slate-300 text-slate-600 border-purple-600 truncate"
                    >
                      {project.name}
                    </AnimatedHeading>
                    <AnimatedText
                      variants={popUpFromBottomForText}
                      infinity={true}
                      className="text-xs sm:text-sm truncate-3 text-slate-400 font-medium"
                    >
                      {project.description}
                    </AnimatedText>
                  </div>
                );
              })}
              <ExploreMoreButton link="/projects" />
            </div>
          </section>

          <FAQ faqs={faqs} />
          <Contact socialMedia={socialMedia} />
        </div>
      </div>
    </>
  );
}

export function HomeHeading({ title }) {
  return (
    <AnimatedHeading
      className="w-full font-bold text-2xl text-center my-2 font-exo"
      variants={headingFromLeft}
      infinity={true}
    >
      {title}
    </AnimatedHeading>
  );
}

export async function getStaticProps() {
  const blogs = await fetch("https://dev.to/api/articles/me?per_page=10", {
    headers: {
      "api-key": process.env.NEXT_PUBLIC_BLOGS_API,
    },
  }).then((res) => res.json());
  return {
    props: {
      blogs,
    },
    // updates the page automatically after 1 hour
    revalidate: 60 * 60,
  };
}
