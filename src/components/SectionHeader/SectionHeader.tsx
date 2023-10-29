import { Source_Code_Pro } from "next/font/google";

const SourceCodePro = Source_Code_Pro({ weight: "400", subsets: ["latin"] });

const SectionHeader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <h2
      className={`text-[4rem] md:text-[6rem] lg:text-[8rem] font-extrabold mb-8 ${SourceCodePro.className}`}
    >
      {children}
    </h2>
  );
};

export default SectionHeader;
