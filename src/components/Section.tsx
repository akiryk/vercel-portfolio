import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  classes?: string;
};
export default function Section({ id, children, classes }: SectionProps) {
  return (
    <section id={id} className={`grid grid-cols-12 gap-8 mt-16 ${classes}`}>
      {children}
    </section>
  );
}
