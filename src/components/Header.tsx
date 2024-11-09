import Link from "next/link";
import React from "react";
import { GitHubIcon } from "./icons";

const Logo = () => <div className="font-bold font-paytone text-lg">Ta</div>;

const Header = () => {
  return (
    <div className="fixed px-4 py-2 flex justify-between items-center w-full top-0 left-0 bg-[#0F0D0E]">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex items-center gap-8">
        <Link href="/blog">
          <span className="hover:underline">Blogs </span>
        </Link>
        <Link href="/projects">
          <span className="hover:underline">Projects </span>
        </Link>
      </div>
      <Link href="https://github.com/tevez07b9/tevez07b9">
        <GitHubIcon />
      </Link>
    </div>
  );
};

export default Header;
