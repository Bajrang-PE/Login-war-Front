import React, { useState } from 'react'
import DashHeader from '../component/dashboard/DashHeader'

const ChangeDvdmsPass = () => {
    const [values, setValues] = useState({
        "oldPassword": "", "newPassword": "", "confirmPassword": ""
    })

    const handleValueChange = (e) => {
        const { name, value } = e.target;
        if (name) {
            setValues({ ...values, [name]: value })
        }
    }

    const reset = () => {
        setValues({ "oldPassword": "", "newPassword": "", "confirmPassword": "" })
    }

    return (
        <>
            <DashHeader />
            <div className='text-center w-100 fw-bold p-1 heading-text' >Change Password Details</div>
            <div className='container change-pass-container'>
                <div className='form-card m-auto p-2' style={{ borderBottom: "2px solid #000e4e" }}>
                    <div className="form-group row" style={{ paddingBottom: "1px" }}>
                        <label className="col-sm-4 col-form-label fix-label required-label">Old Password : </label>
                        <div className="col-sm-8 align-content-center">
                            <input
                                type="text"
                                className="aliceblue-bg form-control form-control-sm border-dark-subtle"
                                placeholder="Old Password"
                                name='oldPassword'
                                id='oldPassword'
                                onChange={handleValueChange}
                                value={values?.oldPassword}
                            />
                        </div>
                    </div>
                    <div className="form-group row" style={{ paddingBottom: "1px" }}>
                        <label className="col-sm-4 col-form-label fix-label required-label">New Password : </label>
                        <div className="col-sm-8 align-content-center">
                            <input
                                type="text"
                                className="aliceblue-bg form-control form-control-sm border-dark-subtle"
                                placeholder="New Password"
                                name='newPassword'
                                id='newPassword'
                                onChange={handleValueChange}
                                value={values?.newPassword}
                            />
                        </div>
                    </div>
                    <div className="form-group row" style={{ paddingBottom: "1px" }}>
                        <label className="col-sm-4 col-form-label fix-label required-label">Confirm Password : </label>
                        <div className="col-sm-8 align-content-center">
                            <input
                                type="text"
                                className="aliceblue-bg form-control form-control-sm border-dark-subtle"
                                placeholder="Confirm Password"
                                name='confirmPassword'
                                id='confirmPassword'
                                onChange={handleValueChange}
                                value={values?.confirmPassword}
                            />
                        </div>
                    </div>

                    <div className='w-100 py-1 my-2 opacity-75 rounded-3' style={{ backgroundColor: "#000e4e" }}>
                    </div>

                    <div className='text-center'>
                        <button className='btn btn-sm new-btn-blue py-0'>
                            <i className="fa fa-save me-1"></i>
                            Save</button>
                        <button className='btn btn-sm new-btn-blue py-0' onClick={() => reset()}>  <i className="fa fa-broom me-1"></i>Clear</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangeDvdmsPass
