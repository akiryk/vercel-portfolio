import NavLink from "@/components/NavLink";
import { openSans } from "@/app/fonts";

const TopNav = () => {
  return (
    <nav
      className={`col-span-12 text-puce antialiased px-8 mb-8 ${openSans.className}
            bg-transparent md:grid md:gap-8 md:grid-cols-3 lg:bg-yellow lg:h-10 lg:col-start-2 lg:col-end-3`}
    >
      <ul className="flex  md:col-span-2 md:col-start-2 ">
        <li>
          <NavLink href="#background">Skills</NavLink>
        </li>
        <li>
          <NavLink href="#work-examples">Work Examples</NavLink>
        </li>
        <li>
          <NavLink href="#about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
