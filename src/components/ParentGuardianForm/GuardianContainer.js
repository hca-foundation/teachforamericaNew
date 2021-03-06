import React, { useState } from 'react';

import ParentGuardianForm from './ParentGuardianForm';

const GuardianContainer = () => {
    const [numberShown, setNumberShown] = useState(1);
    return (
        <>
            {numberShown > 0 && <ParentGuardianForm guardianIndex={0}/>}
            {numberShown > 1 && <ParentGuardianForm guardianIndex={1}/>}
            {numberShown > 2 && <ParentGuardianForm guardianIndex={2}/>}
            {numberShown < 3 ? <button className="btn btn-dark mx-3 mt-3" onClick={() => setNumberShown(numberShown + 1)}><i className="fas fa-plus mx-1"></i> Add Guardian</button> : null}
            {numberShown > 1 ? <button className="btn btn-dark mx-3 mt-3" onClick={() => setNumberShown(numberShown - 1)}><i className="fas fa-minus mx-1"></i> Remove Guardian</button> : null}
        </>
    );
};

export default GuardianContainer;