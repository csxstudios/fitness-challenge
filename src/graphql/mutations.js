/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFitnessModel = /* GraphQL */ `
  mutation CreateFitnessModel(
    $input: CreateFitnessModelInput!
    $condition: ModelFitnessModelConditionInput
  ) {
    createFitnessModel(input: $input, condition: $condition) {
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
export const updateFitnessModel = /* GraphQL */ `
  mutation UpdateFitnessModel(
    $input: UpdateFitnessModelInput!
    $condition: ModelFitnessModelConditionInput
  ) {
    updateFitnessModel(input: $input, condition: $condition) {
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
export const deleteFitnessModel = /* GraphQL */ `
  mutation DeleteFitnessModel(
    $input: DeleteFitnessModelInput!
    $condition: ModelFitnessModelConditionInput
  ) {
    deleteFitnessModel(input: $input, condition: $condition) {
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
