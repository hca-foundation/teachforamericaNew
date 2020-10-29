/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      parentFirstName
      parentLastName
      phoneNumber
      email
      primaryLanguage
      relationship
      studentFirstName
      studentLastName
      studentBirthday
      studentGender
      studentRace
      districtName
      school
      description
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        parentFirstName
        parentLastName
        phoneNumber
        email
        primaryLanguage
        relationship
        studentFirstName
        studentLastName
        studentBirthday
        studentGender
        studentRace
        districtName
        school
        description
      }
      nextToken
    }
  }
`;
