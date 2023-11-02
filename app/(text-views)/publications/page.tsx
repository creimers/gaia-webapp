import client from "@/tina/__generated__/client";
import type { Publication } from "@/tina/__generated__/types";

import PublicationItem from "@/components/publication";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
        <div className="not-prose space-y-2 mb-4">
          <span className="text-sm">Filter by publication type</span>
          <div className="flex space-x-4">
            {PUBLICATION_TYPES.map((type) => {
              const active = searchParams.type === type;
              return (
                <a
                  key={type}
                  href={active ? `/publications` : `/publications?type=${type}`}
                  className={cn(
                    "rounded-md px-2 py-1",
                    active ? "bg-lime-600 text-white" : "bg-gray-100 text-black"
                  )}
                >
                  {type}
                </a>
              );
            })}
          </div>
        </div>
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
