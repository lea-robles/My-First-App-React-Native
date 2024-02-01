import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const base_url = process.env.EXPO_PUBLIC_BASE_URL

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => "categories.json"
        }),
        getProducts: builder.query({
            query: () => "products.json"
        }),
        getProductsByCategory: builder.query({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"`
        }),
        getProductById: builder.query({
            query: (id) => `products.json?orderBy="id"&equalTo=${id}`
        }),
        postOrder: builder.mutation({
            query: ({ ...order }) => ({
                url: 'orders.json',
                method: 'POST',
                body: order
            })
        }),
        putProfilePicture: builder.mutation({
            query: ({ image, localId }) => ({
                url: `profilePictures/${localId}.json`,
                method: 'PUT',
                body: {
                    image: image
                }
            })
        }),
        getProfilePicture: builder.query({
            query: (localId) => `profilePictures/${localId}.json`
        }),
        getUserLocation: builder.query({
            query: (localId) => `location/${localId}.json`
        }),
        putUserLocation: builder.mutation({
            query: ({location, localId}) => ({
                url: `location/${localId}.json`,
                method: 'PUT',
                body: {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    address: location.address,
                }
            })
        })
    })
})

export const { 
    useGetCategoriesQuery, 
    useGetProductsQuery, 
    useGetProductsByCategoryQuery,
    useGetProductByIdQuery,
    usePostOrderMutation,
    usePutProfilePictureMutation,
    useGetProfilePictureQuery,
    useGetUserLocationQuery,
    usePutUserLocationMutation
} = shopApi