import { Source_Code_Pro } from "next/font/google";

import styles from "./ProjectHeader.module.css";

const SourceCodePro = Source_Code_Pro({ weight: "300", subsets: ["latin"] });

const ProjectHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <div className="max-[520px]:hidden md:w-[40rem] lg:w-[50rem] bg-black rounded-lg overflow-hidden filter-drop-shadow my-4">
        <div className="h-8 flex bg-slate-300 items-center gap-1 px-4">
          <div className="w-3 h-3 rounded-full bg-red-600"></div>
          <div className="w-3 h-3 rounded-full bg-orange-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-600"></div>
        </div>

        <div className="p-4 flex">
          <h3
            className={`relative sm:text-lg md:text-xl lg:text-2xl font-bold text-[lime] ${SourceCodePro.className} ${styles["project-title"]} `}
          >
            cd ~/Code/projects/{title.split(" ").join("_")}
          </h3>
        </div>
      </div>

      <div className="max-[519px]:block min-[520px]:hidden mt-0 mb-4 font-extrabold text-2xl">
        {title.split(" ").join("_")}
      </div>
    </>
  );
};

export default ProjectHeader;
