import React, { useState } from 'react';

import ParentGuardianForm from './ParentGuardianForm';

const GuardianContainer = () => {
    const [numberShown, setNumberShown] = useState(1);
    return (
        <div className="mb-4">
            <div className="d-flex justify-content-start align-items-center">
                {
                    numberShown < 3 
                    ?   <button
                            className="btn btn-success btn-sm mr-1"
                            onClick={
                                (e) => {
                                    e.preventDefault();
                                    setNumberShown(numberShown + 1);
                                }
                            }
                        >
                            <i className="fas fa-plus mr-2"></i>
                            Add Guardian
                        </button>
                    : null
                }
                {
                    numberShown > 1 
                    ?   <button
                            className="btn btn-danger btn-sm mx-1"
                            onClick={
                                (e) => {
                                    e.preventDefault(); 
                                    setNumberShown(numberShown - 1);
                                }
                            }
                        >
                            <i className="fas fa-minus mr-2"></i>
                            Remove Guardian
                        </button>
                    : null
                }
            </div>
            {
                numberShown > 0 && <ParentGuardianForm guardianIndex={0}/>
            }
            {
                numberShown > 1 && <ParentGuardianForm guardianIndex={1}/>
            }
            {
                numberShown > 2 && <ParentGuardianForm guardianIndex={2}/>
            }
        </div>
    );
};

export default GuardianContainer;