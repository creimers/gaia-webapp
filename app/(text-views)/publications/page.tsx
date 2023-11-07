import client from "@/tina/__generated__/client";
import type { Publication } from "@/tina/__generated__/types";

import PublicationItem from "@/components/publication";

import Filter from "@/components/publications/filter";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const PUBLICATION_TYPES = ["Journal", "Technical Report", "Presentation"];

export default async function Publications({ searchParams }: Props) {
  const res = await client.queries.publicationConnection({ sort: "year" });
  let publications = (res.data.publicationConnection?.edges || []).map(
    (pub) => pub?.node
  );
  publications = publications.reverse();
  let themPublications = publications as Publication[];
  if (
    searchParams.type &&
    PUBLICATION_TYPES.includes(searchParams.type as string)
  ) {
    console.log(searchParams.type);
    themPublications = themPublications.filter((pub) => {
      return pub.publicationType[0] === searchParams.type;
    });
  }

  return (
    <div>
      <div className="prose">
        <h1>Publications</h1>
        <Filter />
        <div className="space-y-4 not-prose">
          {themPublications.map((pub) => {
            return <PublicationItem key={pub.id} publication={pub} />;
          })}
        </div>
        {themPublications.length === 0 && <p>No publications available.</p>}
      </div>
    </div>
  );
}
