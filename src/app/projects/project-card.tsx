import React from "react";
import { GitHubIcon, YoutubeIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  id: number;
  name: string;
  githubLink: string;
  previewImage: string;
  previewLink: string;
  previewVideoLink?: string;
  description: string;
};

const ProjectCard = ({
  id,
  name,
  githubLink,
  previewImage,
  previewLink,
  previewVideoLink,
  description,
}: ProjectCardProps) => {
  return (
    <div className="bg-charcoal rounded-xl p-6">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <Image
          alt={name}
          className="rounded-xl object-contain"
          src={previewImage}
          width={400}
          height={200}
          priority
        />

        <div className="flex flex-col space-y-6 md:space-y-2">
          <h2 className="font-bold text-3xl font-paytone mt-2">{name}</h2>
          <p className="text-base flex-grow">{description}</p>
          <div className="flex items-center gap-4">
            <Link
              className="bg-yellow hover:bg-yellow/70 rounded-full py-1 px-3 text-black"
              href={previewLink}
              target="_blank"
            >
              View
            </Link>
            <Link
              className="bg-cream hover:bg-cream/70 rounded-full flex items-center space-x-2 py-1 px-3 text-black"
              href={githubLink}
              target="_blank"
            >
              <GitHubIcon />
              <p>Github repo</p>
            </Link>
            {previewVideoLink && (
              <Link
                className="bg-cream hover:bg-cream/70 rounded-full flex items-center space-x-2 py-1 px-3 text-black"
                href={previewVideoLink}
                target="_blank"
              >
                <YoutubeIcon />
                <p>Watch</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
