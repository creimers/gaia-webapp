"use client";
import { useSearchParams } from "next/navigation";

import type { Publication } from "@/tina/__generated__/types";
import PublicationItem from "@/components/publication";
import { PUBLICATION_TYPES } from "@/lib/constants";

type Props = {
  publications: Publication[];
};
export default function PublicationList({ publications }: Props) {
  const searchParams = useSearchParams();
  let filteredPublications = publications as Publication[];
  const publicationType = searchParams.get("type");
  if (
    publicationType &&
    PUBLICATION_TYPES.includes(publicationType as string)
  ) {
    filteredPublications = filteredPublications.filter((pub) => {
      return pub.publicationType[0] === publicationType;
    });
  }
  return (
    <div className="space-y-4 not-prose">
      {filteredPublications.map((pub) => {
        return <PublicationItem key={pub.id} publication={pub} />;
      })}
      {filteredPublications.length === 0 && <p>No publications available.</p>}
    </div>
  );
}
