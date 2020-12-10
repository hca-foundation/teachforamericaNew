/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
  id: ID!
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
  ethnicities: [String]
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
    }
  }
`;
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
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
