import React from 'react';

import './StudentForm.scss';

const StudentForm = () => (
    <div className="StudentForm text-left py-4">
        <form>
            <h5>Student Information</h5>
            <div className="row">
                <div class="form-group col-6">
                    <label for="formGroupExampleInput">Example label</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
                </div>
                <div class="form-group col-6">
                    <label for="formGroupExampleInput2">Another label</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                </div>
            </div>
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
                    <label for="formGroupExampleInput">Example label</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
                </div>
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
                    <label for="formGroupExampleInput">Example label</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
                </div>
            </div>
            <div className="row">
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
                <div class="form-group col-12">
                    <label for="inputState">School</label>
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div class="form-group col-6">
                    <label for="formGroupExampleInput">Student MNPS ID Number (optional)</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
                </div>
            </div>
            <div className="row">
                <div class="form-group col-6">
                    <label for="formGroupExampleInput">Example label</label>
                    <input type="date" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
                </div>
            </div>
            <div className="row">
                <div class="form-group col-6">
                    <label for="inputState">Gender</label>
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12">
                    <p>Are you requesting daily transporation to and from school?</p>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">Yes</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">No</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div class="form-group col-12">
                    <label for="formGroupExampleInput">Primary language spoken at home (optional)</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
                </div>
            </div>
            <div className="row">
                <div class="form-group col-12">
                    <label for="formGroupExampleInput">What is your relationship to the student(s)? (optional)</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12">
                    <p>Does the student need to take medicine at school? (optional)</p>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">Yes</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">No</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div class="form-group col-12">
                    <label for="formGroupExampleInput">If yes, please indicate the medicine and condition requiring medicine.</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12">
                    <p>Does the student have allergies to medicine or food, etc? (optional)</p>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">Yes</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">No</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div class="form-group col-12">
                    <label for="formGroupExampleInput">If yes, please list.</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
                </div>
            </div>
            <div className="row">
                <div class="form-group col-12">
                    <label for="formGroupExampleInput">In case of emergency, who should we contact? (optional)</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
                </div>
            </div>
            <div className="row">
                <div class="form-group col-6">
                    <label for="formGroupExampleInput">Emergency Contact Phone Number (optional)</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
                </div>
            </div>
            <button className="col-4 btn btn-secondary"><i class="fas fa-plus mr-2"></i>Add Another Student</button>
        </form>

    </div>
);

export default StudentForm;
