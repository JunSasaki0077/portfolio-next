import { Oswald } from "@next/font/google";
import clsx from "clsx";

const font = Oswald({
  subsets: ["latin"],
  weight: ["500"],
});
export const Header = () => {
  return (
    <header>
      <div>
        <h1 className={clsx("text-4xl", font.className)}>
          Jun&apos;s Portfolio
        </h1>
      </div>
    </header>
  );
};
