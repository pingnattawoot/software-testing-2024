import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Menu = {
  description: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  image: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  price: Scalars["Int"]["output"];
};

export type Query = {
  menu: Array<Menu>;
  menuById: Menu;
};

export type QueryMenuByIdArgs = {
  id: Scalars["Int"]["input"];
};

export type MenuQueryVariables = Exact<{ [key: string]: never }>;

export type MenuQuery = {
  menu: Array<{
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
  }>;
};

export type MenuByIdQueryVariables = Exact<{
  id: Scalars["Int"]["input"];
}>;

export type MenuByIdQuery = {
  menuById: {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
  };
};

export const MenuDocument = gql`
  query Menu {
    menu {
      id
      name
      price
      description
      image
    }
  }
`;

/**
 * __useMenuQuery__
 *
 * To run a query within a React component, call `useMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMenuQuery({
 *   variables: {
 *   },
 * });
 */
export function useMenuQuery(
  baseOptions?: Apollo.QueryHookOptions<MenuQuery, MenuQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MenuQuery, MenuQueryVariables>(MenuDocument, options);
}
export function useMenuLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MenuQuery, MenuQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MenuQuery, MenuQueryVariables>(
    MenuDocument,
    options
  );
}
export function useMenuSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<MenuQuery, MenuQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MenuQuery, MenuQueryVariables>(
    MenuDocument,
    options
  );
}
export type MenuQueryHookResult = ReturnType<typeof useMenuQuery>;
export type MenuLazyQueryHookResult = ReturnType<typeof useMenuLazyQuery>;
export type MenuSuspenseQueryHookResult = ReturnType<
  typeof useMenuSuspenseQuery
>;
export type MenuQueryResult = Apollo.QueryResult<MenuQuery, MenuQueryVariables>;
export const MenuByIdDocument = gql`
  query MenuById($id: Int!) {
    menuById(id: $id) {
      id
      name
      price
      description
      image
    }
  }
`;

/**
 * __useMenuByIdQuery__
 *
 * To run a query within a React component, call `useMenuByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useMenuByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMenuByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMenuByIdQuery(
  baseOptions: Apollo.QueryHookOptions<MenuByIdQuery, MenuByIdQueryVariables> &
    ({ variables: MenuByIdQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MenuByIdQuery, MenuByIdQueryVariables>(
    MenuByIdDocument,
    options
  );
}
export function useMenuByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MenuByIdQuery,
    MenuByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MenuByIdQuery, MenuByIdQueryVariables>(
    MenuByIdDocument,
    options
  );
}
export function useMenuByIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<MenuByIdQuery, MenuByIdQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MenuByIdQuery, MenuByIdQueryVariables>(
    MenuByIdDocument,
    options
  );
}
export type MenuByIdQueryHookResult = ReturnType<typeof useMenuByIdQuery>;
export type MenuByIdLazyQueryHookResult = ReturnType<
  typeof useMenuByIdLazyQuery
>;
export type MenuByIdSuspenseQueryHookResult = ReturnType<
  typeof useMenuByIdSuspenseQuery
>;
export type MenuByIdQueryResult = Apollo.QueryResult<
  MenuByIdQuery,
  MenuByIdQueryVariables
>;
