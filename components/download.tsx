import type { Download } from "@/tina/__generated__/types";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr/ArrowSquareOut";
import { Users } from "@phosphor-icons/react/dist/ssr/Users";
import { Newspaper } from "@phosphor-icons/react/dist/ssr/Newspaper";
import { File } from "@phosphor-icons/react/dist/ssr/File";

type Props = {
  download: Downloads;
};

export default function Download({ download }: Props) {
  return (
    <div className="p-8 rounded-xl bg-gray-100 relative">
      {/* <div className="absolute top-2 right-2 bg-gray-200 rounded-lg px-2 py-1 text-sm">
        {publication.publicationType}
      </div> */}
      <h2 className="text-2xl text-lime-900 mb-2">{download.name}</h2>
      <div className="text-gray-600 flex items-center space-x-2">
        <Users className="w-4 h-4" />
        {/* <span>{publication.authors}</span> */}
      </div>
      <div className="text-gray-600 flex items-center space-x-2">
        <Newspaper className="w-4 h-4" />
        {/* <span>
          {publication.year}, {publication.journal}
        </span> */}
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
