import Map from "@/components/dashboard/map";
import Sidebar from "@/components/dashboard/sidebar";
import LayerAccordion from "@/components/dashboard/layer-accordion";
import LayerControls from "@/components/dashboard/layer-controls";

export default function Dashboard() {
  return (
    <>
      <Sidebar>
        <div className="h-full relative overflow-y-hidden flex flex-col">
          <div className="h-full overflow-y-scroll pb-12 flex-grow overflow-x-visible">
            <LayerAccordion />
          </div>
          <LayerControls />
        </div>
      </Sidebar>
      <Map />
    </>
  );
}
