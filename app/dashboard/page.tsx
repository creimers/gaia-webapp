import Map from "@/components/dashboard/map";
import Sidebar from "@/components/dashboard/sidebar";
import LayerAccordion from "@/components/dashboard/layer-accordion";
import LayerControls from "@/components/dashboard/layer-controls";

export default function Dashboard() {
  return (
    <>
      <Sidebar>
        <div className="flex flex-col max-h-full h-full justify-between">
          <LayerAccordion />
          <LayerControls />
        </div>
      </Sidebar>
      <Map />
    </>
  );
}
