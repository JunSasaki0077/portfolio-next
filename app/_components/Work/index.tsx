import { Works } from "@/lib/workData";
import { Work as WorkIcon } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

const Work = () => {
  return (
    <section className="text-center mb-10 w-2/3 mx-auto">
      <WorkIcon />
      <h3 className=" text-2xl font-bold mb-4">Work</h3>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Works.map((works) => (
          <li key={works.id}>
            <Link href={`/works/${works.id}`}>
              <Image
                src={works.image}
                alt={works.title}
                width={400}
                height={400}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Work;
