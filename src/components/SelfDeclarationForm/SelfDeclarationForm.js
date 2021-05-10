import React, { useContext, useEffect } from 'react';

import { GlobalStateContext } from '../../state/globalStore';
import { setFormDataAction } from '../../state/globalActions';

import './SelfDeclarationForm.scss';

const SelfDeclarationForm = () => {
  const { state, dispatch } = useContext(GlobalStateContext);

  useEffect(() => {
    dispatch(setFormDataAction(state.formData));
  }, [dispatch, state.formData]);

  const handleChange = (key, value) => {
    const newState = { ...state.formData };
    newState[key] = value;
    dispatch(setFormDataAction(newState));
  };

  return (
    <div className="SelfDeclarationForm text-left py-4">
        <h5>Summer Academies Self Declaration Form</h5>
        <p>
            We received a portion of our summer youth program funding from grants and
            foundations for which documentation of family income and ethnic identification is a
            requirement for us to receive these funds. Please give us an honest account of your
            family’s income (before taxes come out). Income and/or ethnic identification will not
            affect your child’s participation in this program. Thank you!
        </p>
        <div className="row">
            <div className="col-12">
                <h6>Publicity Release</h6>
                <p>
                    As part of our ongoing efforts to ensure that all students have the opportunity to attain
                    an excellent education, Teach For America coordinates video/photo and press visits
                    which could feature students interacting with their teachers in the classroom. Teach For
                    America may utilize these videos/photos for publicity materials and social media. We
                    respectfully request your permission to utilize images of your child as part of this
                    program. If you agree to have your child photo graphed and to allow Teach For America
                    to use these images as descried above, please sign this form. We sincerely thank you in
                    advance for your attention, consideration and cooperation.
                </p>
                <p>
                    I have read the above statement and hereby give my consent to have my child be
                    filmed/photographed. I hereby grant Teach For America permission to be used anytime
                    at Teach For America’s discretion.
                </p>
            </div>
        </div>
        <div className="row mb-3">
            <div className="col-12">
                <div className="form-check form-check-inline">
                    <input
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                        className="form-check-input"
                        type="radio"
                        name="consent"
                        id="consentTrue"
                        value="true"
                    />
                    <label className="form-check-label" htmlFor="consentTrue">I consent</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                        className="form-check-input"
                        type="radio"
                        name="consent"
                        id="consentFalse"
                        value="false"
                    />
                    <label className="form-check-label" htmlFor="consentFalse">I do not consent</label>
                </div>
            </div>
        </div>
</div>
  );
};

export default SelfDeclarationForm;
