import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const CryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '4248140f01msh3fda3c3d7461146p1f02cejsn197fab06873d'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: CryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) => createRequest(`coin/${coinId}/history/${timePeriod}`),
        }),
    })
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery,useGetExchangesQuery, useGetCryptoHistoryQuery  } = cryptoApi;