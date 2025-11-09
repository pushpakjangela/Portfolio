import { useRef, useState } from "react";
import { ProjectGallery } from "../../../interface/Data/Data";
import ProjectDemo from "../ProjectDemo/ProjectDemo";
import Modal from "../Modal/Modal";
import { IoReturnUpForward } from "react-icons/io5";

const ProjectGalMain = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main
      ref={containerRef}
      className="flex items-center justify-center w-full relative flex-col py-10 px-20"
    >
        <div className="text-start w-full text-zinc-200 text-6xl mb-8 flex items-start justify-start gap-2">
            <h1 className="font-semibold">Projects</h1>
            <div className="flex items-center justify-center mt-8 text-zinc-400 font-semibold"><IoReturnUpForward className=" text-6xl rotate-90"/></div>

        </div>
      <div className="w-full h-full flex flex-col items-center justify-center px-20">
        {ProjectGallery.map((project, index) => (
          <ProjectDemo
            key={index}
            index={index}
            title={project.title}
            setModal={setModal}
          />
        ))}
      </div>
      <Modal
        modal={modal}
        projectGallery={ProjectGallery}
        parentRef={containerRef}
      />
    </main>
  );
};

export default ProjectGalMain;
