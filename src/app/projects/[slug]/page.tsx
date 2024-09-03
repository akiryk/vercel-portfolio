import Image from "next/image";
import projects from "@/app/projects/data/projects.json";

type Props = {
  params: {
    slug: string;
  };
};

export default function Project({ params }: Props) {
  const project = projects.find((proj) => proj.slug === params.slug);
  if (!project) {
    return <p>Project not found!</p>;
  }
  // const project = projects.find((proj) => proj.slug === params.slug);

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <div dangerouslySetInnerHTML={{ __html: project.content }} />
      <Image src={project.image} alt={project.title} />
    </div>
  );
}
