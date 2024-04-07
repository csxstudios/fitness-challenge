/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFitnessModel = /* GraphQL */ `
  query GetFitnessModel($id: ID!) {
    getFitnessModel(id: $id) {
      id
      date
      dateISO
      user
      label
      month
      weekday
      temp
      year
      count
      exercise
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listFitnessModels = /* GraphQL */ `
  query ListFitnessModels(
    $filter: ModelFitnessModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFitnessModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        dateISO
        user
        label
        month
        weekday
        temp
        year
        count
        exercise
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchFitnessModels = /* GraphQL */ `
  query SearchFitnessModels(
    $filter: SearchableFitnessModelFilterInput
    $sort: [SearchableFitnessModelSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableFitnessModelAggregationInput]
  ) {
    searchFitnessModels(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        date
        dateISO
        user
        label
        month
        weekday
        temp
        year
        count
        exercise
        createdAt
        updatedAt
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
