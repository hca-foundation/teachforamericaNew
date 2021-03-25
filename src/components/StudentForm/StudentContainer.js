import React, { useState } from 'react';

import StudentForm from './StudentForm';

const StudentContainer = () => {
    const [numberShown, setNumberShown] = useState(1);
    return (
        <>
            {
                 Array.from(Array(numberShown).keys()).map((x, i) => <StudentForm key={i} studentIndex={x} />)
            }
            <button
                className="btn btn-success mt-3"
                onClick={
                    (e) => {
                        e.preventDefault();
                        setNumberShown(numberShown + 1);
                    }
                }
            >
                <i className="fas fa-plus mx-1"></i>
                Add Student
            </button>
            {
                numberShown > 1
                ?   <button
                        className="btn btn-danger mx-3 mt-3"
                        onClick={
                            (e) => {
                                e.preventDefault();
                                setNumberShown(numberShown - 1)
                            }
                        }
                    >
                        <i className="fas fa-minus mx-1"></i>
                        Remove Student
                    </button>
                : null
            }
        </>
    );
};

export default StudentContainer;