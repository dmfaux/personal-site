import Image from "next/image";

const Splash: React.FC = () => {
  return (
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
  );
};

export default Splash;
