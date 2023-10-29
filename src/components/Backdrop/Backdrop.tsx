"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./Backdrop.module.css";
import { useTheme } from "@/contexts/ThemeContext";

type BackdropProps = {
  children: React.ReactNode;
};

export default function Backdrop({ children }: BackdropProps) {
  const backDropRef = useRef<HTMLDivElement>(null);
  const [currentColors, setCurrentColors] = useState<number[][]>([]);

  const { theme } = useTheme();

  const themeColors: any = {
    sunrise: [
      [195, 190, 249],
      [207, 190, 249],
      [219, 190, 249],
      [228, 190, 249],
      [249, 190, 219],
    ],

    midday: [
      [146, 189, 231],
      [171, 217, 255],
      [201, 230, 255],
      [232, 243, 255],
      [254, 253, 252],
    ],
    sunset: [
      [36, 52, 133],
      [87, 43, 159],
      [149, 55, 161],
      [208, 83, 121],
      [255, 117, 82],
    ],
    midnight: [
      [0, 0, 0],
      [10, 9, 19],
      [19, 17, 34],
      [29, 25, 54],
      [40, 36, 66],
    ],
  };

  const transitionColors = (
    from: number[][],
    to: number[][],
    duration: number
  ) => {
    let start: number;
    const step = (timestamp: number) => {
      if (start === undefined) start = timestamp;
      const elapsed = timestamp - start;

      const newColors = from?.map((color: number[], index: number) => {
        return color.map((channel: number, channelIndex: number) => {
          const endChannel = to[index][channelIndex];
          return Math.round(
            channel + (endChannel - channel) * (elapsed / duration)
          );
        });
      });

      setCurrentColors(newColors);

      if (elapsed < duration) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const newColors = themeColors[theme];
    if (currentColors?.length === 0) {
      setCurrentColors(newColors);
    } else {
      transitionColors(currentColors, newColors, 1000);
    }
  }, [theme]);

  useEffect(() => {
    if (backDropRef.current && currentColors?.length > 0) {
      const gradientColors = currentColors
        .map((color: number[]) => `rgb(${color.join(", ")})`)
        .join(", ");
      backDropRef.current.style.background = `linear-gradient(to bottom, ${gradientColors})`;
    }
  }, [currentColors]);

  return (
    <div className="top-0 h-full w-full -z-0 fixed" ref={backDropRef}>
      <div className={styles[theme]}>
        <div className={styles[`${theme}__gradient`]}>
          <div className={styles[`${theme}__gradient__overlay`]}></div>
        </div>
      </div>
      {children}
    </div>
  );
}
