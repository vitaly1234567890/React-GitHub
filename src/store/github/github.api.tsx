import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IUser, ReposMain, ServerResponse} from "../../models/models";
import {BaseQueryArg, BaseQueryMeta, BaseQueryResult} from "@reduxjs/toolkit/dist/query/baseQueryTypes";

export const githubApi = createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    refetchOnFocus: true,
    endpoints: build => ({
        searchUsers: build.query<IUser[], string>({
            query: (search: string) => ({
                url: `search/users`,
                params: {
                    q: search,
                    per_page: 10
                }
            }),
            transformResponse: (response: ServerResponse) => response.items
        }),
        getUserRepos: build.query<ReposMain[], string>({
            query: (username: string) => ({
                url: `users/${username}/repos`
            })
        })
    })
})

export const {useSearchUsersQuery, useLazyGetUserReposQuery} = githubApi