import _ from "lodash";

export const dataSort = (
  arrayList: any[],
  isAscending: boolean,
  sortType: string
) => {
  const direction = isAscending ? "asc" : "desc";
  return _.orderBy(arrayList, [sortType], [direction]);
};

export const dataSearch = (arrayList: any[], searchInput: string) => {
  return _.filter(arrayList, function (o) {
    if (searchInput === "") {
      return true;
    }
    return o.title.toLowerCase().includes(searchInput.toLowerCase());
  });
};

export const dictToArray = (objList: any) => {
  var arrayList: any = [];
  Object.entries(objList).map(([key, value]) => arrayList.push(value));
  return arrayList;
};
