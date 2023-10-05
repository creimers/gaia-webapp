import client from "@/tina/__generated__/client";
import type { Publications } from "@/tina/__generated__/types";

import PublicationItem from "@/components/publication";

export default async function Publications() {
  const res = await client.queries.publicationsConnection({ sort: "year" });
  let publications = (res.data.publicationsConnection?.edges || []).map(
    (pub) => pub?.node
  );
  // reverse publications
  publications = publications.reverse();
  let themPublications = publications as Publications[];

  return (
    <div>
      <div className="prose">
        <h1>Publications</h1>
        <div className="space-y-4 not-prose">
          {themPublications.map((pub) => {
            return <PublicationItem key={pub.id} publication={pub} />;
          })}
        </div>
      </div>
    </div>
  );
}
