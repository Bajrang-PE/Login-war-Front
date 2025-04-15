import React from 'react'
import GlobalButtons from '../../GlobalButtons'
import InputField from '../../../InputField'

const ZoneMasterForm = () => {
    return (
        <div>
            <GlobalButtons />
            <hr className='my-2' />
            <div className='row pt-2'>
                <div className='col-sm-6'>
                    <div className="form-group row" style={{ paddingBottom: "1px" }}>
                        <label className="col-sm-5 col-form-label fix-label required-label">Zone Name : </label>
                        <div className="col-sm-7 align-content-center">
                            <InputField
                                type={'text'}
                                id="zonename"
                                name="zonename"
                                placeholder="Enter ZoneName"
                                className="aliceblue-bg border-dark-subtle"
                            // value={values?.hintquestion}
                            // onChange={handleValueChange}
                            />
                        </div>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label fix-label">
                            Record Status :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isWidgetNameVisible"
                                    id="isWidgetNameVisibleYes"
                                    value={'Yes'}
                                    // onChange={handleRadioChange}
                                    // checked={radioValues?.isWidgetNameVisible === "Yes"}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Active
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isWidgetNameVisible"
                                    id="isWidgetNameVisibleNo"
                                    value={'No'}
                                    // onChange={handleRadioChange}
                                    // checked={radioValues?.isWidgetNameVisible === 'No'}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    InActive
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ZoneMasterForm
