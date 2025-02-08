import { cn } from "@/lib/utils";
import { Oswald } from "@next/font/google";
import { ThemeButton } from "../ThemeButton";
import Link from "next/link";

const font = Oswald({
  subsets: ["latin"],
  weight: ["500"],
});
export const Header = () => {
  return (
    <header>
      <div className="flex items-center pt-8 px-12 justify-between">
        <Link href="/">
          <h1 className={cn("text-4xl ", font.className)}>
            Jun&apos;s Portfolio
          </h1>
        </Link>
        <ThemeButton />
      </div>
    </header>
  );
};
