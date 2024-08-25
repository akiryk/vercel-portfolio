export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3 className="text-red text-6xl mb-2 mt-2 border-b border-slate-300 pb-2">
      {children}
    </h3>
  );
}
