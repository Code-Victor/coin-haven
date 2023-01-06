// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Coin, CoinInfo,CoinList } from "./types";

const BASE_URL = "https://api.coingecko.com/api/v3/";
// Define a service using a base URL and expected endpoints
export const coinGeckoApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCoins: builder.query<Coin[], string>({
      query: () => "coins/?sparkline=true&localization=false",
    }),
    getCoinList: builder.query<CoinList[], void>({
      query: () => "coins/list",
    }),
    getCoinInfo: builder.query<CoinInfo, string>({
      query: (id) => `coins/${id}/?sparkline=true&localization=false`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCoinsQuery, useGetCoinInfoQuery,useGetCoinListQuery } = coinGeckoApi;
