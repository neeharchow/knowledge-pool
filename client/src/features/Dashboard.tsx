import InfoViewer from "../components/InfoViewer";
import DataPanel from "../components/DataPanel";

import Split from "react-split";

function Dashboard() {
  const splitStyles = {
    parent: {
      height: "calc(100vh - 56px)",
    },
  };

  return (
    <Split
      className="flex"
      direction="horizontal"
      style={splitStyles.parent}
      cursor="col-resize"
      gutterSize={10}
      sizes={[40, 60]}
    >
      <DataPanel></DataPanel>
      <InfoViewer></InfoViewer>
    </Split>
  );
}

export default Dashboard;
