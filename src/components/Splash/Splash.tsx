import Image from "next/image";
import { Source_Code_Pro } from "next/font/google";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import { useTheme } from "@/contexts/ThemeContext";

const SourceCodePro = Source_Code_Pro({ weight: "400", subsets: ["latin"] });

const Splash: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="home">
      <div className="w-full flex flex-col justify-center items-center mt-12 md:mt-24 md:mb-40">
        <h1
          className={`text-5xl md:text-[4.7rem] font-extrabold p-12 rounded-3xl bg-slate-500/10 m-8 lg:m-18 lg:mx-24 ${SourceCodePro.className}`}
        >
          Hi, I am a Software Development Manager &amp; Full Stack Developer
          from Johannesburg South Africa 🇿🇦
        </h1>
        <p className="text-2xl font-medium flex items-center justify-center gap-5">
          <a
            className="text-white rounded-md bg-[#0a66c2] p-2"
            href="https://www.linkedin.com/in/dfaux"
            target="_blank"
          >
            <span className="flex gap-2 items-center">
              LinkedIn <FaLinkedin />
            </span>
          </a>
          <a
            className="text-white rounded-md bg-[#6e40c9] p-2"
            href="https://github.com/dmfaux"
            target="_blank"
          >
            <span className="flex gap-2 items-center">
              GitHub <FaGithub />
            </span>
          </a>
        </p>
      </div>

      <Image
        src={"/assets/me.png"}
        width={613}
        height={800}
        className="invisible md:visible fixed lg:w-[150px] lg:h-[150px] md:w-[100px] 
        md:h-[100px] bottom-0 left-1 lg:translate-y-10 md:translate-y-5 rotate-[20deg] filter-drop-shadow"
        alt="David Faux"
        priority={true}
        quality={95}
      />
    </section>
  );
};

export default Splash;
