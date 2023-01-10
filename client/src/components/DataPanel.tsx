import React, { useEffect, useState } from "react";
import SortSearchFilter from "./SortSearchFilter";
import DataCard from "./DataCard";
import { dataSort, dataSearch, dictToArray } from "../utilities/utils";
import { generateRandomData } from "../utilities/testFunctions";

function DataPanel() {
  const [searchInput, setSearchInput] = useState("");
  const [isSortAscending, setIsSortAscending] = useState(true);
  const [sortType, setSortType] = useState("title");

  // const initialData = {
  //   8999: {
  //     id: 8999,
  //     title: "Is America racist?",
  //     dropNumber: 65,
  //     credibilityScore: 5,
  //   },
  //   7877: {
  //     id: 7877,
  //     title: "What makes a good President?",
  //     dropNumber: 32,
  //     credibilityScore: 2,
  //   },
  //   1143: {
  //     id: 1143,
  //     title: "Is Islam problematic?",
  //     dropNumber: 14,
  //     credibilityScore: 3,
  //   },
  //   5223: {
  //     id: 5223,
  //     title: "What is the responsibility of tech giants in society?",
  //     dropNumber: 21,
  //     credibilityScore: 4,
  //   },
  //   3442: {
  //     id: 3442,
  //     title: "Can world hunger be solved?",
  //     dropNumber: 2,
  //     credibilityScore: 1,
  //   },
  //   2339: {
  //     id: 2339,
  //     title: "What's the accepted level of poverty in the world?",
  //     dropNumber: 35,
  //     credibilityScore: 8,
  //   },
  //   4563: {
  //     id: 4563,
  //     title: "Is George Orwell correct?",
  //     dropNumber: 35,
  //     credibilityScore: 6,
  //   },
  //   1978: {
  //     id: 1978,
  //     title: "China's growth and slowdown",
  //     dropNumber: 35,
  //     credibilityScore: 9,
  //   },
  //   8332: {
  //     id: 8332,
  //     title: "Acceptable problems",
  //     dropNumber: 35,
  //     credibilityScore: 4,
  //   },
  //   6676: {
  //     id: 6676,
  //     title: "Is geography destiny?",
  //     dropNumber: 35,
  //     credibilityScore: 6,
  //   },
  // };

  const initialData = generateRandomData(50);

  const [data, setData] = useState(dictToArray(initialData));

  useEffect(() => {
    setData(
      dataSearch(
        dataSort(dictToArray(initialData), isSortAscending, sortType),
        searchInput
      )
    );
  }, [searchInput, isSortAscending, sortType]);

  return (
    <div className="bg-gray-400 rounded-md mb-2 ml-2 h-100">
      <SortSearchFilter
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        isSortAscending={isSortAscending}
        setIsSortAscending={setIsSortAscending}
        sortType={sortType}
        setSortType={setSortType}
      ></SortSearchFilter>
      <div className="overflow-y-auto h-100">
        {data.map((value: any, index: any) => {
          return (
            <DataCard
              key={index}
              id={value.id}
              title={value.title}
              dropNumber={value.dropNumber}
              credibilityScore={value.credibilityScore}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DataPanel;
