/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
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
      grossIncome
      school
      description
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
