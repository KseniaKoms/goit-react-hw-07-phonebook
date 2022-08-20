import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62f9e4bb3c4f110faa8e4520.mockapi.io',
  }),
  tagTypes: ['contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['contacts'],
    }),
    removeContact: builder.mutation({
      query(id) {
        return {
          url: `/contacts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['contacts'],
    }),
    addContact: builder.mutation({
      query: body => ({
        url: `/contacts`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useRemoveContactMutation,
  useAddContactMutation,
} = contactsApi;
