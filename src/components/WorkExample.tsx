import { motion } from "framer-motion";
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
  imageWidth: number;
  imageHeight: number;
  altText: string;
  startDate?: number;
  endDate?: number;
  url?: string;
  buttonText?: string;
};

export default function WorkExample(props: Props) {
  const shouldShowLink = props.url && props.buttonText;
  return (
    <>
      <div className="col-span-12 md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7 lg:-mb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ margin: "-200px 0px" }}
        >
          <div className="outlined text-outlined">{props.id}</div>
        </motion.div>
      </div>
      <div className="col-span-5 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ margin: "-200px 0px" }}
        >
          <Image
            src={props.image}
            alt={props.altText}
            width={props.imageWidth}
            height={props.imageHeight}
          />
        </motion.div>
      </div>

      <div className="col-span-12 md:col-span-8 lg:col-span-6 lg:col-start-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ margin: "-200px 0px" }}
        >
          <h4 className="text-4xl md:text-6xl mb-2 mt-2 ">{props.title}</h4>
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
            <ul className="text-slategray">
              {props.bulletPoints.map((bulletPoint) => (
                <li key={bulletPoint} className="my-4">
                  {bulletPoint}
                </li>
              ))}
            </ul>
          </div>
          {/* if there is button text show a nextjs Link comnponent to look like a button */}
          {shouldShowLink && <Link href={props.url!}>{props.buttonText}</Link>}
        </motion.div>
      </div>
    </>
  );
}
