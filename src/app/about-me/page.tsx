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
        Hey there! I'm David, and I'm a full-fledged tech aficionado with a
        knack for innovation. In fact, I've been nominated for and even bagged
        some pretty cool awards in the field. When I'm not diving into lines of
        code or staying updated on the latest software trends, you'll likely
        find me steering through virtual circuits—I'm a part-time sim racing
        player and a full-time car enthusiast!
      </Paragraph>

      <Paragraph>
        I'm blessed to share my life and wanderlust with an amazing wife 🥰.
        We've sipped coffee in the cafes of New York 🇺🇸, lounged on the beaches
        in Thailand 🇹🇭, and sampled tapas in Spain 🇪🇸. Our favourite
        destinations are as varied as our interests and personalities, but each
        place holds a special spot in our hearts.
      </Paragraph>

      <Paragraph>
        Oh, and let's not forget the real bosses of the household—our two
        incredibly spoilt cats 🐈🐈. They've mastered the art of manipulation
        through cuteness and are experts in the field of lounging. We've been
        their loyal subjects for years, and there's no end in sight.
      </Paragraph>

      <Paragraph>
        If you’re as passionate about tech, travel, or even just a great car
        chase as I am, I'd love to connect. I’m always up for swapping stories,
        trading tips, or just sharing a good laugh. Life's a journey, and it's
        even better when you have awesome companions along the way!
      </Paragraph>

      <Divider />
    </section>
  );
};

export default AboutMe;
