export default function TextPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-prose mx-auto my-28">{children}</div>;
}
