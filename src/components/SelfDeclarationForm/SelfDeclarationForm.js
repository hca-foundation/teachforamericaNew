import React from 'react';

import './SelfDeclarationForm.scss';

const SelfDeclarationForm = () => (
    <div className="SelfDeclarationForm text-left py-4">
        <h5>Summer Academies Self Declaration Form</h5>
        <p>
            We received a portion of our summer youth program funding from grants and
            foundations for which documentation of family income and ethnic identification is a
            requirement for us to receive these funds. Please give us an honest account of your
            family’s income (before taxes come out). Income and/or ethnic identification will not
            affect your child’s participation in this program. Thank you!
        </p>
        <form>
            <div className="row">
                <div class="form-group col-12">
                    <label for="formGroupExampleInput">Example label</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
                </div>
                <div class="form-group col-12">
                    <label for="formGroupExampleInput">Example label</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
                </div>
            </div>
            <div className="row">
                <div class="form-group col-6">
                    <label for="inputState">State</label>
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div class="form-group col-6">
                    <label for="inputState">State</label>
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">Default checkbox</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">Default checkbox</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">Default checkbox</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">Default checkbox</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">Default checkbox</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">Default checkbox</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">Default checkbox</label>
                    </div>
                </div>
            </div>
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
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">I consent</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">I do not consent</label>
                    </div>
                </div>
            </div>
        </form>
    </div>
);

export default SelfDeclarationForm;
