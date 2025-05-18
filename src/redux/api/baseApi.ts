import { axiosBaseQuery } from "@/helper/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
// import { tagTypesList } from "../tag-types";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints: () => ({}),
  //   tagTypes: tagTypesList,
});
