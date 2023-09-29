export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full h-screen bg-green-400">{children}</div>;
}
