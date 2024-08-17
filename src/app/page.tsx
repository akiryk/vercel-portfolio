import Logo from "@/components/Logo";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import workExamples from "@/data/workExamples.json";
import WorkExample from "@/components/WorkExample";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Logo />
      <header className="flex flex-col items-center">
        <h1>Adam Kiryk</h1>
        <h2>Frontend Engineer</h2>
      </header>
      <p>
        I’ve worked as a front-end developer and website designer for over ten
        years. I’m passionate about stability, performance, and accessibility,
        and I love creating great user experiences.
      </p>
      <p>
        Sound good? I also write and speak clearly about my work. I thrive in a
        collaborative environment. And I love learning new things.
      </p>
      <Link href="/about">Say more...</Link>

      <SectionTitle>Work Examples</SectionTitle>
      <ul>
        {workExamples.map((workExample) => (
          <li key={workExample.id}>
            <WorkExample {...workExample} />
          </li>
        ))}
      </ul>
    </main>
  );
}
