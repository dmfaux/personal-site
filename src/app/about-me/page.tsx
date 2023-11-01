"use client";

import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Paragraph from "@/components/Paragraph/Paragraph";
import { useTheme } from "@/contexts/ThemeContext";
import Divider from "@/components/Divider/Divider";

const AboutMe: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`${theme} flex flex-col justify-center items-center px-8 w-full`}
    >
      <SectionHeader>aboutMe</SectionHeader>

      <Paragraph>
        Hey there! I&apos;m David, and I&apos;m a full-fledged tech aficionado
        with a knack for innovation. In fact, I&apos;ve been nominated for and
        even bagged some pretty cool awards in the field. When I&apos;m not
        diving into lines of code or staying updated on the latest software
        trends, you&apos;ll likely find me steering through virtual
        circuits—I&apos;m a part-time sim racing player and a full-time car
        enthusiast!
      </Paragraph>

      <Paragraph>
        I&apos;m blessed to share my life and wanderlust with an amazing wife
        🥰. We&apos;ve sipped coffee in the cafes of New York 🇺🇸, lounged on the
        beaches in Thailand 🇹🇭, and sampled tapas in Spain 🇪🇸. Our favourite
        destinations are as varied as our interests and personalities, but each
        place holds a special spot in our hearts.
      </Paragraph>

      <Paragraph>
        Oh, and let&apos;s not forget the real bosses of the household—our two
        incredibly spoilt cats 🐈🐈. They&apos;ve mastered the art of
        manipulation through cuteness and are experts in the field of lounging.
        We&apos;ve been their loyal subjects for years, and there&apos;s no end
        in sight.
      </Paragraph>

      <Paragraph>
        If you’re as passionate about tech, travel, or even just a great car
        chase as I am, I&apos;d love to connect. I’m always up for swapping
        stories, trading tips, or just sharing a good laugh. Life&apos;s a
        journey, and it&apos;s even better when you have awesome companions
        along the way!
      </Paragraph>

      <Divider />
    </section>
  );
};

export default AboutMe;
