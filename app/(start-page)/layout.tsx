import Footer from "@/components/layout/footer";

export default function TextPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="my-20 md:my-28 px-4 md:px-0 flex-1 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
