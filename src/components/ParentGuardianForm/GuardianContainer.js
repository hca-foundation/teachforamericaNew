import React, { useState } from 'react';

import ParentGuardianForm from './ParentGuardianForm';

const GuardianContainer = () => {
    const [numberShown, setNumberShown] = useState(1);
    return (
        <>
            {numberShown > 0 && <ParentGuardianForm guardianIndex={0}/>}
            {numberShown > 1 && <ParentGuardianForm guardianIndex={1}/>}
            {numberShown > 2 && <ParentGuardianForm guardianIndex={2}/>}
            {numberShown < 3 ? <button className="btn btn-dark" onClick={() => setNumberShown(numberShown + 1)}>Add Guardian</button> : null}
            {numberShown > 1 ? <button className="btn btn-dark" onClick={() => setNumberShown(numberShown - 1)}>Remove Guardian</button> : null}
        </>
    );
};

export default GuardianContainer;