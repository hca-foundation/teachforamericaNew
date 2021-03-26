import React, { useState } from 'react';

import StudentForm from './StudentForm';

const StudentContainer = () => {
    const [numberShown, setNumberShown] = useState(1);
    return (
        <div className="mb-4">
            <div className="d-flex justify-content-start align-items-center">
                <button
                    className="btn btn-success btn-sm mt-3"
                    onClick={
                        (e) => {
                            e.preventDefault();
                            setNumberShown(numberShown + 1);
                        }
                    }
                >
                    <i className="fas fa-plus mr-2"></i>
                    Add Student
                </button>
                {
                    numberShown > 1
                    ?   <button
                            className="btn btn-danger btn-sm mx-3 mt-3"
                            onClick={
                                (e) => {
                                    e.preventDefault();
                                    setNumberShown(numberShown - 1)
                                }
                            }
                        >
                            <i className="fas fa-minus mr-2"></i>
                            Remove Student
                        </button>
                    : null
                }
            </div>
            {
                 Array.from(Array(numberShown).keys()).map((x, i) => <StudentForm key={i} studentIndex={x} />)
            }
        </div>
    );
};

export default StudentContainer;