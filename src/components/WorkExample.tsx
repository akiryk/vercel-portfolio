import Link from "next/link";
import Image from "next/image";
import { openSans } from "@/app/fonts";

// create a type based on the type of obj
type Props = {
  id: number;
  title: string;
  bulletPoints: string[];
  description: string;
  image: string;
  altText: string;
  startDate: number;
  endDate?: number;
  url?: string;
  buttonText?: string;
};

export default function WorkExample(props: Props) {
  const shouldShowLink = props.url && props.buttonText;
  return (
    <>
      <div className="col-span-12 md:col-span-9 md:col-start-4 lg:col-span-7 lg:col-start-5 lg:-mb-20">
        <div className="outlined text-outlined">{props.id}</div>
      </div>
      <div className="col-span-4">
        <Image src={props.image} alt={props.altText} width={500} height={500} />
      </div>
      <div className="col-span-12 md:col-span-8 lg:col-span-7">
        <h4 className="text-6xl mb-2 mt-2 ">{props.title}</h4>
        <p className="text-2xl">
          <span className="text-lg text-gray">
            <span>{props.startDate}</span>
            {props.endDate && (
              <span className="text-md ">—{props.endDate}</span>
            )}
          </span>{" "}
          {props.description}
        </p>
        <div className={`mt-8 ${openSans.className} text-lg`}>
          <p className="uppercase font-extrabold mb-4">What I did</p>
          <ul className="text-slate-500">
            {props.bulletPoints.map((bulletPoint) => (
              <li key={bulletPoint} className="my-4">
                {bulletPoint}
              </li>
            ))}
          </ul>
        </div>
        {/* if there is button text show a nextjs Link comnponent to look like a button */}
        {shouldShowLink && <Link href={props.url!}>{props.buttonText}</Link>}
      </div>
    </>
  );
}
