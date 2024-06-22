import { baseApi } from '@/fe-base/apis';
// import { cookies } from 'next/headers';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postLogin: builder.mutation({
      query: (payload: { username: string, password: string }) => ({
        url: '/api/users/login',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json;'
        },
      }),
    })
  }),
})

export const { usePostLoginMutation } = authApi;