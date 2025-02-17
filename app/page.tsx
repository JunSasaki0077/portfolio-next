import { Button } from "@/components/ui/button";
import { Skills } from "@/lib/skillsData";
import Image from "next/image";
import Link from "next/link";
import { Post } from "./types/type";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import BarChartIcon from "@mui/icons-material/BarChart";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import Work from "./_components/Work";

export default async function Home() {
  const res = await fetch(
    "https://zenn.dev/api/articles?username=jun0723&order=latest"
  );
  const data = await res.json();
  const posts: Post[] = data.articles.slice(0, 10);
  return (
    <div className="mt-40">
      <div className="flex justify-center mb-5 ">
        <Image src="/jun.jpg" alt="jun" width={300} height={450} />
      </div>
      <h2 className="text-center text-3xl font-bold m-0">Jun</h2>
      <h3 className="text-center mb-5">佐々木純</h3>
      <p className="text-center mb-10">Front End Engineer</p>

      <div className="text-center mb-10">
        <AccountCircleIcon />
        <h3 className=" text-2xl font-bold mb-4">About</h3>

        <p>
          1991年生まれ。東京在住のWebエンジニア。
          <br />
          未経験からWeb制作会社コーダー(マークアップ)を経験しました。
          <br />
          現在はNext.js,TypeScriptをなどの技術を用いた
          <br />
          Webアプリ開発の勉強をしております。
        </p>
      </div>
      <div className="mb-10 text-center">
        <BarChartIcon />
        <h3 className=" text-2xl font-bold mb-4">Skills</h3>
        <ul className="flex flex-wrap gap-2 justify-center w-full ">
          {Skills.map((item, index) => (
            <li key={index}>
              <p className="px-2 py-1 border border-black rounded-sm">
                {item.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <Work />
      <div className="text-center mb-10">
        <EmailIcon />
        <h3 className=" text-2xl font-bold mb-4">Contact</h3>
        <p className="mb-6">ご用の方は以下よりご連絡ください。</p>
        <Link href="https://docs.google.com/forms/d/12_Sott6xyZfJrokV8rh4-J30qvWofb75p2M_DFTr2JE/prefill">
          <Button className="bg-sky-500 shadow-2xl">お問い合わせ</Button>
        </Link>
      </div>
      <div className="mb-20 text-center">
        <RssFeedIcon />
        <h3 className=" text-2xl font-bold mb-4">Article</h3>
        <ul className="flex flex-col items-center gap-3">
          {posts.map((post) => (
            <li key={post.id} className="text-blue-500">
              <Link href={`https://zenn.dev/${post.path}`} target="blank">
                <p>{post.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
