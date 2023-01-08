// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Coin, CoinInfo,CoinList, News } from "./types";

const BASE_URL = "https://api.coingecko.com/api/v3/";
// Define a service using a base URL and expected endpoints
export const coinGeckoApi = createApi({
  reducerPath: "coinGeckoApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCoins: builder.query<Coin[], number>({
      query: (page) =>
        `coins/?sparkline=true&localization=false&per_page=5&page${page}`,
    }),
    getCoinList: builder.query<CoinList[], void>({
      query: () => "coins/list",
    }),
    getCoinInfo: builder.query<CoinInfo, string>({
      query: (id) => `coins/${id}/?sparkline=true&localization=false`,
    }),
    getNews: builder.query<News, void>({
      query: () => `news/`,
    }),
    getRange: builder.query<{prices:[number,number][]}, [string, string,number,number]>({
      query: ([id, vs_currency, from, to]) =>
        `/coins/${id}/market_chart/range?vs_currency=${vs_currency}&from=${from}&to=${to}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCoinsQuery, useGetCoinInfoQuery,useGetCoinListQuery,useGetNewsQuery,useGetRangeQuery } = coinGeckoApi;
