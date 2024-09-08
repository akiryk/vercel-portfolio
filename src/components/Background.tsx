import Link from "next/link";
import Text from "@/components/Text";

export default function Background() {
  return (
    <>
      <Text>
        I’ve been a front-end engineer at{" "}
        <Link
          href="https://www.wayfair.com/
        "
          className="text-link"
        >
          Wayfair
        </Link>{" "}
        since 2018, where I create solutions to critical business needs using
        technologies including React, Next.js, TypeScript, JavaScript, Node.js,
        TurboRepo, Buildkite, Cypress, webpack — and of course HTML, CSS, and
        git.
      </Text>
      <Text>
        From 2011 to 2017, I worked at{" "}
        <Link href="https://www.npr.org/" className="text-link">
          NPR
        </Link>
        , where I combined the roles of front-end developer and user-experience
        designer, and created a variety of websites and online tools for member
        stations.
      </Text>
    </>
  );
}
