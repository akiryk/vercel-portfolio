import Link from "next/link";
import BarLogo from "@/components/BarLogo";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <Link href="/">
          <BarLogo />
        </Link>
        <p>
          <Link href="/">Adam Kiryk</Link>, Front End Developer / UI Designer
        </p>
      </div>
      <main>{children}</main>
    </div>
  );
}
