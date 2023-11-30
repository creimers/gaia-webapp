import client from "@/tina/__generated__/client";
import type { Publication } from "@/tina/__generated__/types";

import Filter from "@/components/publications/filter";
import PublicationList from "./publication-list";

export default async function Publications() {
  const res = await client.queries.publicationConnection({ sort: "year" });
  let publications = (res.data.publicationConnection?.edges || []).map(
    (pub) => pub?.node
  );
  publications = publications.reverse();
  let themPublications = publications as Publication[];

  return (
    <div>
      <div className="prose">
        <h1>Publications</h1>
        <Filter />
        <PublicationList publications={themPublications} />
      </div>
    </div>
  );
}
