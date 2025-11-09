import React from "react";
import { ProjectGalleryProps } from "../../../interface";

const ProjectDemo: React.FC<ProjectGalleryProps> = ({ index, title, setModal }) => {
  return (
    <div
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      className="flex w-full text-white justify-between items-center px-20 py-12 border-t border-gray-700 cursor-pointer transition-all duration-200 last:border-b hover:opacity-50 group"
    >
      <h2 className="text-4xl m-0 font-normal transition-all duration-400 group-hover:-translate-x-2.5">
        {title}
      </h2>
      <p className="font-light transition-all duration-400 group-hover:translate-x-2.5">
        Design & Development
      </p>
    </div>
  );
};

export default ProjectDemo;
