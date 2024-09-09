"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ReactNode } from "react";

const NavLink = ({
  href,
  classes = "lg:py-2 lg:px-2 mr-4 lg:mr-2 text-shadow block transition-colors duration-300 lg:hover:bg-white lg:hover:bg-opacity-50 lg:hover:shadow-md",
  children,
}: {
  href: string;
  children: ReactNode;
  classes?: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    const target = document.querySelector(href);
    console.log("target", target);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      router.replace(pathname); // This removes the hash from the URL
    }
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
};

export default NavLink;
