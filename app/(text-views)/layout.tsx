export default function TextPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-prose mx-auto my-20 md:my-28 px-4 md:px-0">
      {children}
    </div>
  );
}
