import Divider from "@/components/Divider/Divider";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Source_Code_Pro } from "next/font/google";
import LatestBlogs from "../components/LatestBlogs/LatestBlogs";

const SourceCodePro = Source_Code_Pro({ weight: "400", subsets: ["latin"] });

export default function Home() {
  // const { theme } = useTheme();

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-full flex flex-col justify-center items-center mt-12 md:mt-24 md:mb-40">
          <h1
            className={`text-5xl md:text-[4.8rem] font-extrabold p-12 rounded-3xl bg-slate-500/10 m-8 lg:m-18 lg:mx-24 ${SourceCodePro.className} text-[--font-color]`}
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

        <LatestBlogs />
        <Divider />
      </div>
    </div>
  );
}
