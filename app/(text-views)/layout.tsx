export default function TextPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="max-w-prose mx-auto my-20 md:my-28 px-4 md:px-0 flex-1 w-full">
        {children}
      </main>
      <footer className="bg-green-900 p-8 text-white font-light">
        <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="mb-2 font-semibold text-lg">Ethiopia Office</h3>
            <p>
              ILRI Sholla Campus <br />
              CMC Road <br />
              Addis Ababa
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-lg">Kenia Office</h3>
            <p>
              ICRAF House <br />
              United Nations Avenue, Gigiri <br />
              Nairobi
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-lg">Zimbabwe Office</h3>
            <p>
              12.5 KM Peg, Mazowe Road, Mount Pleasant <br />
              Harare
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-lg">Email</h3>
            <p>
              <a href="mailto:gaia@cgiar.org" className="hover:underline">
                gaia@cgiar.org
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
