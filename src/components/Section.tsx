import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  classes?: string;
};
export default function Section({ id, children, classes }: SectionProps) {
  return (
    <section
      id={id}
      className={`lg:grid lg:grid-cols-12 lg:gap-8 mt-16 ${classes}`}
    >
      {children}
    </section>
  );
}
