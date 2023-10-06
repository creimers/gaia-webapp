import client from "@/tina/__generated__/client";
import type { Download } from "@/tina/__generated__/types";

import DownloadItem from "@/components/download";

export default async function Page() {
  const res = await client.queries.downloadConnection();
  const downloads = (res.data.downloadConnection?.edges || []).map(
    (d) => d?.node
  ) as Download[];

  return (
    <div>
      <div className="prose">
        <h1>Downloads</h1>
        <div className="space-y-4 not-prose">
          {downloads.map((download) => {
            return <DownloadItem key={download.id} download={download} />;
          })}
        </div>
      </div>
    </div>
  );
}
