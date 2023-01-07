import React, { useState } from "react";
import SortSearchFilter from "./SortSearchFilter";

function DataPanel() {
  const [data, setData] = useState({
    8999: {
      id: 8999,
      title: "Example Title",
      dropNumber: 65,
      credibilityScore: 7,
    },
    7877: {
      id: 7877,
      title: "Example Title 2",
      dropNumber: 32,
      credibilityScore: 2,
    },
    1143: {
      id: 1143,
      title: "Example Title 3",
      dropNumber: 14,
      credibilityScore: 9,
    },
    5223: {
      id: 5223,
      title: "Example Title 4",
      dropNumber: 21,
      credibilityScore: 6,
    },
    3442: {
      id: 3442,
      title: "Example Title 5",
      dropNumber: 2,
      credibilityScore: 4,
    },
    2339: {
      id: 2339,
      title: "Example Title 6",
      dropNumber: 35,
      credibilityScore: 7,
    },
  });

  return (
    <div className="bg-gray-400 rounded-md mb-2 ml-2">
      <SortSearchFilter></SortSearchFilter>
      {data.map((item) => {
        return <div>{item}</div>;
      })}
    </div>
  );
}

export default DataPanel;
