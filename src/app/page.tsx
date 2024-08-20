import Logo from "@/components/Logo";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import workExamples from "@/data/workExamples.json";
import WorkExample from "@/components/WorkExample";
export default function Home() {
  return (
    <section id="introTrigger" className="min-h-80 grid">
      <div className="my-auto mx-4">
        <div id="primaryLogo" className="w-1/3 relative mb-8 mx-auto">
          <Logo />
        </div>
        <div id="introContent">
          <header className="text-center">
            <h1 className="text-gray text-6xl mb-2 font-medium">Adam Kiryk</h1>
            <h2 className="text-2xl mb-8 text-lightGray italic">
              Frontend Engineer
            </h2>
          </header>
          <div className="text-2xl">
            <p className="my-6">
              I’ve worked as a front-end developer and website designer for over
              ten years. I’m passionate about stability, performance, and
              accessibility, and I love creating great user experiences.
            </p>
            <p className="my-6">
              Sound good? I also write and speak clearly about my work. I thrive
              in a collaborative environment. And I love learning new things.
            </p>
            <Link href="/about" className="text-link">
              Say more...
            </Link>
          </div>
        </div>

        <SectionTitle>Work Examples</SectionTitle>
        <ul>
          {workExamples.map((workExample) => (
            <li key={workExample.id}>
              <WorkExample {...workExample} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
