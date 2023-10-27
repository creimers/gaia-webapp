export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen max-h-screen overflow-hidden relative bg-blue-100">
      {children}
    </div>
  );
}
