import _ from "lodash";

export const dataSort = (arrayList: any[], isAscending: boolean) => {
  return _.sortBy(arrayList, ["title"]);
};

export const dataFilter = (arrayList: any[], searchInput: string) => {
  return _.filter(arrayList, function (o) {
    return o.title.includes(searchInput);
  });
};

export const dictToArray = (objList: any) => {
  var arrayList: any = [];
  Object.entries(objList).map(([key, value]) => arrayList.push(value));
  return arrayList;
};
