import Link from "next/link";
import Image from "next/image";
import { ArrowIcon, GitHubIcon, TwitterIcon } from "@/components/icons";
import { name, about, bio, avatar } from "@/lib/info";
import SkillCard from "@/components/SkillCard";

export const revalidate = 60;

export default async function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <section className="max-w-4xl flex-auto min-w-0 mt-6 md:mt-10 flex flex-col px-4 pt-4 pb-8 md:p-0 text-center">
        <h1 className="font-bold text-6xl font-paytone">{name}</h1>
        <div className="w-full flex flex-col md:flex-row items-center text-center mt-6">
          <div className="w-full flex-grow my-5">
            <Image
              alt={name}
              className="rounded-full flex-grow"
              src={avatar}
              placeholder="blur"
              width={350}
              priority
            />
          </div>
          <div className="flex-grow text-left">
            <p className="my-5 text-neutral-200">{about()}</p>
            <p className="my-5 max-w-[600px] text-neutral-200">{bio()}</p>
            <div className="flex justify-start items-center space-x-4">
              <Link href="https://github.com/tevez07b9">
                <GitHubIcon />
              </Link>
              <Link href="https://twitter.com/Tazzz97">
                <TwitterIcon />
              </Link>
              <Link href="https://www.linkedin.com/in/talmeez-ahmed-7a9778193/">
                <Image
                  src="/images/linkedin.svg"
                  width={20}
                  height={20}
                  alt="LinkedIn"
                />
              </Link>
              <Link href="/blog">
                <div className="flex items-center hover:text-neutral-200 transition-all">
                  <ArrowIcon />
                  <p className="h-7">Read my blogs</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-4xl flex-auto min-w-0 mt-6 md:mt-10 flex flex-col px-4 pt-4 pb-8 md:p-0 md:pb-10 text-center">
        <h1 className="font-bold text-6xl font-paytone">Skills</h1>
        <div className="w-full grid gap-10 grid-cols-2 md:grid-cols-4 mt-6">
          <SkillCard image="/images/skills/typescript.jpg" />
          <SkillCard image="/images/skills/reactjsnew.png" />
          <SkillCard image="/images/skills/javascript.png" />
          <SkillCard image="/images/skills/nextjsnew.png" />
          <SkillCard image="/images/skills/sassnew.png" />
          <SkillCard image="/images/skills/tailwindcssnew.png" />
          <SkillCard image="/images/skills/solidjs.png" />
          <SkillCard image="/images/skills/webpack.png" />
        </div>
      </section>
    </div>
  );
}
