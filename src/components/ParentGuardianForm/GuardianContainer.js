import { button } from 'aws-amplify';
import React, { useState } from 'react';

import ParentGuardianForm from './ParentGuardianForm';

const GuardianContainer = () => {
    const [numberShown, setNumberShown] = useState(1);
    return (
        <>
            {numberShown > 0 && <ParentGuardianForm guardianNumber={1}/>}
            {numberShown > 1 && <ParentGuardianForm guardianNumber={2}/>}
            {numberShown > 2 && <ParentGuardianForm guardianNumber={3}/>}
            {numberShown < 3 ? <button className="btn btn-dark" onClick={() => setNumberShown(numberShown + 1)}>Add Guardian</button> : null}
            {numberShown > 1 ? <button className="btn btn-dark" onClick={() => setNumberShown(numberShown - 1)}>Remove Guardian</button> : null}
        </>
    );
};

export default GuardianContainer;