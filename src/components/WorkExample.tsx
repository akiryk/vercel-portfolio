import Link from "next/link";
import Image from "next/image";

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
    <div className="border border-gray-200 p-4 rounded-lg">
      <span>{props.id}</span>
      <Image src={props.image} alt={props.altText} width={200} height={200} />
      <h4 className="text-lg font-bold">
        <span>{props.startDate}</span>
        {props.endDate && <span>—{props.endDate}</span>}
        {props.title}
      </h4>
      <p>
        This is a work example. It could be a project you worked on, a website
        you designed, or a blog post you wrote. It could be anything you want to
        show off to potential employers or clients.
      </p>
      <p>What I did</p>
      <ul>
        {props.bulletPoints.map((bulletPoint) => (
          <li key={bulletPoint}>{bulletPoint}</li>
        ))}
      </ul>
      {/* if there is button text show a nextjs Link comnponent to look like a button */}
      {shouldShowLink && <Link href={props.url!}>{props.buttonText}</Link>}
    </div>
  );
}
