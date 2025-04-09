import React, { useContext, useEffect, useState } from 'react'
import GlobalButtons from '../../GlobalButtons'
import InputField from '../../../InputField'
import { LoginContext } from '../../../../context/LoginContext';
import { fetchData } from '../../../../utils/ApiHooks';
import { ToastAlert } from '../../../../utils/CommonFunction';

const ZoneMasterForm = () => {
    const { openPage, selectedOption, setOpenPage, setSelectedOption } = useContext(LoginContext);
    const [zoneName, setZoneName] = useState('');
    const [recordStatus, setRecordStatus] = useState('1');
    const [singleData, setSingleData] = useState([]);

    const getSingleData = (id) => {
        fetchData(`api/v1/zones/${id}`).then(data => {
            if (data) {
                setSingleData([data]);
            } else {
                ToastAlert('Error while fetching data!', 'error')
            }
        })
    }

    useEffect(() => {
        if (selectedOption?.length > 0 && openPage === 'modify') {
            getSingleData(selectedOption[0]?.cwhnumZoneId)
        }
    }, [selectedOption, openPage])

    console.log(selectedOption,'opopo')

    const saveZoneData = () => {

    }

    const updateZoneData = () => {

    }

    useEffect(() => {
        if (singleData?.length > 0) {
            setZoneName(singleData[0]?.cwhstrZoneName)
            setRecordStatus(singleData[0]?.status === "Active" ? '1' : '0')
        }
    }, [singleData])

    return (
        <div>
            <GlobalButtons onSave={null} onClear={null} />
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
                                value={zoneName}
                                onChange={(e) => setZoneName(e.target?.value)}
                            />
                        </div>
                    </div>
                </div>
                {openPage === 'modify' &&
                    <div className='col-sm-6'>
                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label fix-label">
                                Record Status :
                            </label>
                            <div className="col-sm-7 ps-0 align-content-center">
                                <div className="form-check form-check-inline">
                                    <input
                                        className="border-dark-subtle form-check-input"
                                        type="radio"
                                        name="isWidgetNameVisible"
                                        id="isWidgetNameVisibleYes"
                                        value={'1'}
                                        onChange={(e) => setRecordStatus(e.target.value)}
                                        checked={recordStatus === "1"}
                                    />
                                    <label className="form-check-label" htmlFor="dbYes">
                                        Active
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="border-dark-subtle form-check-input"
                                        type="radio"
                                        name="isWidgetNameVisible"
                                        id="isWidgetNameVisibleNo"
                                        value={'0'}
                                        onChange={() => setRecordStatus(e.target.value)}
                                        checked={recordStatus === '0'}
                                    />
                                    <label className="form-check-label" htmlFor="dbNo">
                                        InActive
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default ZoneMasterForm
