import { Button } from "@/components/ui/button";
import { Skills } from "@/lib/skillsData";
import Image from "next/image";
import Link from "next/link";
import { Post } from "./type/type";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default async function Home() {
  const res = await fetch(
    "https://zenn.dev/api/articles?username=jun0723&order=latest"
  );
  const data = await res.json();
  const posts: Post[] = data.articles.slice(0, 10);
  return (
    <>
      <h2>Jun</h2>
      <p>Front End Engineer</p>
      <div>
        <h3>
          <AccountCircleIcon />
          About
        </h3>
        <p></p>
        <p>
          1991年生まれ。東京都出身、東京在住のWebエンジニア。
          <br />
          未経験からWeb制作会社コーダー(マークアップ)を経験し
        </p>
      </div>
      <div>
        <h3>Skills</h3>
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
      <div>
        <h3>Contact</h3>
        <p>お問い合わせ</p>
        <p>ご用の方は以下よりご連絡ください。</p>
        <Button variant="outline">お問い合わせ</Button>
      </div>
      <div>
        <h3 className="text-center text-2xl font-bold mb-4">Blog</h3>
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
      <div>
        <h3>SNS</h3>
        <ul>
          <li>twitter</li>
          <li>github</li>
          <li>Zenn</li>
        </ul>
      </div>
    </>
  );
}
