"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ReactNode } from "react";

const NavLink = ({
  href,
  classes = "py-2 px-2 mr-2 text-shadow block transition-colors duration-300 hover:bg-white hover:bg-opacity-50 hover:shadow-md",
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
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      router.replace(pathname); // This removes the hash from the URL
    }
  }
  return (
    <Link onClick={handleClick} href={href} className={classes}>
      {children}
    </Link>
  );
};

export default NavLink;
