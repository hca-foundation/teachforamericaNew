import React, { useState } from 'react';

import StudentForm from './StudentForm';

const StudentContainer = () => {
    const [numberShown, setNumberShown] = useState(1);
    return (
        <>
            {
                 Array.from(Array(numberShown).keys()).map((x, i) => <StudentForm key={i} studentIndex={x} />)
            }
            <button className="col-4 btn btn-secondary" onClick={(e) => setNumberShown(numberShown + 1)}><i className="fas fa-plus mr-2"></i>Add Another Student</button>
        </>
    );
};

export default StudentContainer;