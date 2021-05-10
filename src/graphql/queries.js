/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      parent1FirstName
      parent1LastName
      parent2FirstName
      parent2LastName
      parent3FirstName
      parent3LastName
      parent1phoneNumber
      parent2phoneNumber
      parent3phoneNumber
      parent1Email
      parent2Email
      parent3Email
      ethnicities
      grossIncome
      householdNumber
      address
      address2
      allergiesList
      city
      currentGrade
      currentSchool
      emergencyContact
      emergencyContactPhoneNumber
      hasAllergies
      medicineDesc
      mnpsId
      needMedication
      needTransportation
      primaryLanguage
      relationship
      studentFirstName
      studentLastName
      studentBirthday
      studentGender
      summerSchool
      createdAt
      updatedAt
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
        parent1FirstName
        parent1LastName
        parent2FirstName
        parent2LastName
        parent3FirstName
        parent3LastName
        parent1phoneNumber
        parent2phoneNumber
        parent3phoneNumber
        parent1Email
        parent2Email
        parent3Email
        ethnicities
        grossIncome
        householdNumber
        address
        address2
        allergiesList
        city
        currentGrade
        currentSchool
        emergencyContact
        emergencyContactPhoneNumber
        hasAllergies
        medicineDesc
        mnpsId
        needMedication
        needTransportation
        primaryLanguage
        relationship
        studentFirstName
        studentLastName
        studentBirthday
        studentGender
        summerSchool
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
