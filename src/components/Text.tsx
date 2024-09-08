import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Text({ children }: Props) {
  return (
    <p className="text-xl md:text-2xl my-6 antialiased sm:leading-normal">
      {children}
    </p>
  );
}
