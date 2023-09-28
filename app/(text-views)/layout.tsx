export default function TextPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-prose mx-auto bg-red-200">{children}</div>;
}
