import SortSearchFilter from "../components/SortSearchFilter";
import InfoViewer from "../components/InfoViewer";

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
      sizes={[30, 70]}
    >
      <SortSearchFilter></SortSearchFilter>
      <InfoViewer></InfoViewer>
    </Split>
  );
}

export default Dashboard;
