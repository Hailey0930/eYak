import { Dispatch, SetStateAction } from "react";
import { useQuery } from "react-query";
import { IDrugListResponse } from "../types/drugList.types";
import { instance } from "./instance";

export const getDrugList = (
  search: string,
  page: number,
  setTotal: Dispatch<SetStateAction<number>>,
) => {
  return useQuery<IDrugListResponse>(
    ["getDrugList", page],
    () =>
      instance.get("/getDrbEasyDrugList", {
        params: {
          ServiceKey: `${process.env.REACT_APP_SERVICE_KEY}`,
          type: "json",
          pageNo: page,
          itemName: search,
        },
      }),
    {
      onSuccess: (data) => {
        if (data.header.resultCode === "00") {
          setTotal(data.body.totalCount);
          return data;
        }
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );
};
