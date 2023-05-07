import Image from "next/image";
import React from "react";

interface Props {
  image: string;
}

const SkillCard: React.FC<Props> = ({ image }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <Image
        src={image}
        alt="TypeScript"
        className="hover:scale-110 transition-all"
        width={150}
        height={150}
      />
    </div>
  );
};

export default SkillCard;
