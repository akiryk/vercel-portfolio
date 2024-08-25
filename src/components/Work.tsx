import workExamples from "@/data/workExamples.json";
import WorkExample from "@/components/WorkExample";
import Section from "@/components/Section";

const Work = () => {
  return (
    <ul>
      {workExamples.map((workExample) => (
        <li key={workExample.id} id={`project-${workExample.id}`}>
          <Section classes="mt-4">
            <WorkExample {...workExample} />
          </Section>
        </li>
      ))}
    </ul>
  );
};

export default Work;
