import Image from 'next/image';
import React from 'react';
type Props = {
  project: {
    id: number;
    image: string;
    url: string;
  };
};

const ProjectCard = ({ project }: Props) => {
  const { image } = project;

  return (
    <div className="rounded-md overflow-hidden m-4 bg-[#140c1c]">
      {/* Section Image */}
      <div className="h-48 w-full relative">
      <Image
  src={image}
  alt="Project Image"
  width={800} // Ajustez selon vos besoins
  height={800}
  quality={100}
  className="rounded-t-md w-full h-full object-cover sm:object-contain"
/>

      </div>
      {/* Section Description */}
      <div className="p-4">
        <p className="text-white text-opacity-70 text-sm">descriptio</p>
      </div>
    </div>
  );
};

export default ProjectCard;
