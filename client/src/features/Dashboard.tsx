import React from "react";
import SortSearchFilter from "../components/SortSearchFilter";
import InfoViewer from "../components/InfoViewer";

import Split from "react-split";

function Dashboard() {
  return (
    <Split className="grid grid-cols-2">
      <SortSearchFilter></SortSearchFilter>
      <InfoViewer></InfoViewer>
    </Split>
  );
}

export default Dashboard;
