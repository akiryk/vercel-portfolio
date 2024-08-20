import Link from "next/link";
import { openSans } from "@/app/fonts";
import { ReactNode } from "react";

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <Link
      href={href}
      className="py-2 px-4 text-shadow block transition-colors duration-300 hover:bg-white hover:bg-opacity-50 hover:shadow-md"
    >
      {children}
    </Link>
  );
};

const TopNav = () => {
  return (
    <nav className={`bg-tan text-puce antialiased mb-8 ${openSans.className}`}>
      <ul className="flex bg-blue-500">
        <li>
          <NavLink href="/skills">Skills</NavLink>
        </li>
        <li>
          <NavLink href="#project-1">Work Examples</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
