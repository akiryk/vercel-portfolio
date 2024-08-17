export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h3 className="text-2xl font-bold mt-8 mb-4">{children}</h3>;
}
