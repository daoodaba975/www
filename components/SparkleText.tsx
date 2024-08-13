import { useEffect } from "react";
import { PiStarFourFill } from "react-icons/pi";

const SparkleText = () => {
  useEffect(() => {
    let index = 0,
      interval = 1300;

    const rand = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const animate = (star: HTMLElement) => {
      star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
      star.style.setProperty("--star-top", `${rand(-40, 80)}%`);
    };

    const stars = Array.from(document.getElementsByClassName("magic-star"));
    for (const star of stars) {
      const htmlStar = star as HTMLElement;
      setTimeout(() => {
        animate(htmlStar);

        setInterval(() => animate(htmlStar), 1300);
      }, index++ * (interval / 2));
    }
  }, []);

  return (
    <>
      <p className="text-xl font-medium">
        <span className="inline-block magic bg-celtic bg-clip-text text-transparent relative">
          <span className="text-celtic dark:text-emerald">Daouda BA</span>

          <PiStarFourFill className="magic-star [--size:clamp(20px,1.5vw,30px)] block h-[--size] w-[--size] top-[--star-top] left-[--star-left] absolute animate-starScale text-emerald dark:text-celtic" />
          <PiStarFourFill className="magic-star [--size:clamp(20px,1.5vw,30px)] block h-[--size] w-[--size] top-[--star-top] left-[--star-left] absolute animate-starScale text-emerald dark:text-celtic" />
        </span>
      </p>
    </>
  );
};

export default SparkleText;
