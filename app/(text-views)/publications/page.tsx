// import client from "@/tina/__generated__/client";
// import type { Publication } from "@/tina/__generated__/types";

// import PublicationItem from "@/components/publication";

export default async function Publications() {
  // const res = await client.queries.publicationConnection({ sort: "year" });
  // let publications = (res.data.publicationConnection?.edges || []).map(
  //   (pub) => pub?.node
  // );
  // // reverse publications
  // publications = publications.reverse();
  // let themPublications = publications as Publication[];

  return (
    <div>
      <div className="prose">
        <h1>Publications</h1>
        {/* <div className="space-y-4 not-prose">
          {themPublications.map((pub) => {
            return <PublicationItem key={pub.id} publication={pub} />;
          })}
        </div> */}
      </div>
    </div>
  );
}
