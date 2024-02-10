import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import Image from "next/image";
import { SvgIcon } from "@mui/material";
import Zenn from "@/public/zenn.svg";
import Link from "next/link";
export const Footer = () => {
  return (
    <footer>
      <div className="text-white bg-gray-800 text-center py-10">
        <h3 className="border-b-2 inline-block w-40 pb-3 text-2xl mb-10">
          SNS
        </h3>
        <ul className="flex items-center justify-center mb-10 gap-7">
          <li>
            <Link href="https://twitter.com/jun20077">
              <XIcon />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/JunSasaki0077">
              <GitHubIcon />
            </Link>
          </li>
          <li>
            <Link href="https://zenn.dev/jun0723">
              <Image src="/zenn.svg" alt="zenn" width={34} height={34} />
            </Link>
          </li>
        </ul>
        <p className="text-sm">@2024 Jun&apos;s Portfolio</p>
      </div>
    </footer>
  );
};
