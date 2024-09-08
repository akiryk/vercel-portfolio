import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { openSans } from "@/app/fonts";
import Text from "@/components/Text";

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
      <div className="col-span-12 md:col-span-8 md:col-start-4 lg:col-span-6 lg:col-start-5 lg:-mb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          // viewport={{ margin: "-200px 0px" }}
        >
          <div className="outlined text-outlined">{props.id}</div>
        </motion.div>
      </div>
      <div className="sm:w-auto sm:mx-auto sm:mb-10 md:w-2/3 lg:w-auto col-span-4 mt-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          // viewport={{ margin: "-200px 0px" }}
        >
          <Image
            src={props.image}
            alt={props.altText}
            width={props.imageWidth}
            height={props.imageHeight}
          />
        </motion.div>
      </div>

      <div className="col-span-12 md:col-span-8 lg:col-span-8 lg:col-start-5 xl:col-span-7">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          // viewport={{ margin: "-200px 0px" }}
        >
          <h4 className="text-4xl sm:text-3xl sm:font-bold md:font-normal md:text-4xl lg:text-6xl mb-2 mt-2 ">
            {props.title}
          </h4>
          <Text>
            <span
              className={`text-sm uppercase text-midgray ${openSans.className} mr-2`}
            >
              <span>{props.startDate}</span>
              {props.endDate ? (
                <span className="text-md "> – {props.endDate}</span>
              ) : (
                " – present"
              )}
            </span>{" "}
            {props.description}
          </Text>
          <div className={`mt-8 ${openSans.className} text-lg`}>
            <p className="uppercase font-extrabold mb-4">{`${
              props.id === 1 ? "What I\u2019ve done" : "What I did"
            }`}</p>
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
