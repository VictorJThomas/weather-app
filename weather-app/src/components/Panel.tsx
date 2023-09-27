import { LeftPanel } from "./LeftPanel";
import { RightPanel } from "./RightPanel";


export const Panel = () => {
  
  return (
    <div className="rounded-xl">
      <div className="flex flex-row">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
};
