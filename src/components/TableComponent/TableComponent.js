import React, { useEffect, useState } from "react";
import { Container, Button } from "reactstrap";
import StudentTable from "../StudentTable/StudentTable";
// import "./StudentTable.scss";
import Modal from "../Modal/Modal";
import { API, graphqlOperation } from "aws-amplify";
import { getStudent, listStudents } from "../../graphql/queries";
import { CSVLink, CSVDownload } from "react-csv";

const columns = [
  { accessor: "parentFirstName", Header: "Parent First Name" },
  { accessor: "parentLastName", Header: "Parent Last Name" },
  { accessor: "phoneNumber", Header: "Phone" },
  { accessor: "email", Header: "Email" },
  { accessor: "primaryLanguage", Header: "Primary Language" },
  { accessor: "relationship", Header: "Relationship" },
  { accessor: "studentFirstName", Header: "Student First Name" },
  { accessor: "studentLastName", Header: "Student Last Name" },
  { accessor: "studentBirthday", Header: "Student Birthday" },
  { accessor: "studentGender", Header: "Student Gender" },
  { accessor: "studentRace", Header: "Student Race" },
  { accessor: "districtName", Header: "District" },
  { accessor: "school", Header: "School" },
  { accessor: "description", Header: "Description" },
];

const TableComponent = ({
  isModalOpen,
  setIsModalOpen,
  selected,
  setSelected,
}) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  async function fetchStudents() {
    try {
      const studentData = await API.graphql(graphqlOperation(listStudents));
      const allStudents = studentData.data.listStudents.items;
      setStudents(allStudents);
    } catch (err) {
      console.log("error fetching students");
    }
  }

  /**
   * adds and removes students from selected
   * @param {*} student object
   */
  const selectHandler = (student) => {
    // reduce removes student if they are already selected
    const updatedSelected =
      selected.length < 1
        ? [student]
        : selected.reduce((acc, cur) => {
            if (cur.id === student.id) {
              console.log("acc", acc);
              return acc;
            } else {
              return [...acc, cur];
            }
          }, []);
    // if no students have been removed, then add the student that was selected
    setSelected(
      updatedSelected.length === selected.length
        ? [...updatedSelected, student]
        : updatedSelected
    );
  };

  if (students.length < 1) return null;

  return (
    <>
      {isModalOpen && (
        <Modal
          selected={selected}
          isModalOpen={isModalOpen}
          toggle={setIsModalOpen}
        />
      )}

      <Container className="themed-container" fluid={true}>
        <div>
          <CSVLink data={students}>
            <Button raised color="primary">
              Download CSV
            </Button>
          </CSVLink>
        </div>
        <div>
          <StudentTable columns={columns} data={students} loading={false} />
        </div>
      </Container>
    </>
  );
};

export default TableComponent;
