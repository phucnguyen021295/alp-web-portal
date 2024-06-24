import { baseApi } from "@/fe-base/apis";
// import { cookies } from 'next/headers';

export const homeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Lấy danh sách dự án
        getListProject: builder.query({
            query: () => `/api/du-an`,
            transformResponse: (response, meta, arg) => response,
        }),

        // Lấy danh sách trang thai giao dich
        getListStatus: builder.query({
            query: (params: { formId: string }) => ({
                url: `/api/giao-dich/trang-thai`,
                method: "GET",
                params: params,
            }),
            transformResponse: (response, meta, arg) => response,
        }),

        // Lấy danh sách giao dich
        getListTransaction: builder.query({
            query: (params: {
                formId?: string;
                tukhoa?: string;
                mada?: string;
                tungay?: string;
                denngay?: string;
                pageindex: number;
                pagesize: number;
            }) => ({
                url: `/api/giao-dich`,
                method: "GET",
                params: params,
            }),
            transformResponse: (response, meta, arg) => response,
        }),

         // Xem chi tiet 1 giao dich
         getDetailTransaction: builder.query({
            query: (params: { formId: number, id: number }) => ({
                url: `/api/giao-dich`,
                method: "GET",
                params: params,
            }),
            transformResponse: (response, meta, arg) => response,
        }),

        postApprove: builder.mutation({
            query: (payload: { formId: number, id: number, maTT: number, noiDung: string }) => ({
              url: '/api/giao-dich/duyet',
              method: 'POST',
              body: payload,
              headers: {
                'Content-type': 'application/json;'
              },
            }),
          })
    }),
});

export const {
    useGetListProjectQuery,
    useGetListStatusQuery,
    useGetListTransactionQuery,
    useGetDetailTransactionQuery,
    usePostApproveMutation
} = homeApi;
