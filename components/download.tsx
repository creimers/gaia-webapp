import type { Download } from "@/tina/__generated__/types";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr/ArrowSquareOut";
import { File } from "@phosphor-icons/react/dist/ssr/File";
import { MapPin } from "@phosphor-icons/react/dist/ssr/MapPin";

type Props = {
  download: Download;
};

export default function DownloadItem({ download }: Props) {
  return (
    <div className="p-6 rounded-xl bg-gray-100 relative">
      <h2 className="text-2xl text-lime-800 mb-2 font-medium">
        {download.title}
      </h2>
      <div className="text-gray-600 flex items-center space-x-2">
        <MapPin className="w-4 h-4" />
        <span>{download.country}</span>
      </div>
      <a
        href={download.url}
        className="flex space-x-1 items-center underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        <File className="w-4 h-4" />
        <span>View File</span> <ArrowSquareOut className="w-4 h-4" />
      </a>
    </div>
  );
}
