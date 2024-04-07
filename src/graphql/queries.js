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
      year
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
        year
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
