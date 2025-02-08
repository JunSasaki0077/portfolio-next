import { WORK } from "@/app/types/type";
import { Works } from "@/lib/workData";
import Image from "next/image";
import Link from "next/link";
import LinkIcon from "@mui/icons-material/Link";

export function generateStaticParams() {
  return Works.map((work) => ({ id: work.id }));
}

const Page = async ({ params }: { params: WORK }) => {
  const work = Works.find((w) => w.id === params.id);

  if (!work) {
    return {
      notFound: true,
    };
  }

  return (
    <main className="max-w-4xl flex flex-col  justify-center mx-auto my-10">
      <Image
        src={work.image}
        alt={work.title}
        width={960}
        height={700}
        className="mb-12"
        priority
      />

      <Link className="font-bold  hover:underline mb-5" href={work.url}>
        {work.title}
        <LinkIcon className="w-5 h-5" />
      </Link>
      <p className="text-sm mb-5">{work.skills.join("/")}</p>
      <p>{work.description}</p>
    </main>
  );
};
export default Page;
