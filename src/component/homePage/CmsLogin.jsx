import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { fetchData } from '../../utils/ApiHooks';


const CmsLogin = ({ isShow, onClose }) => {

    const [captchaImage, setCaptchaImage] = useState('');
    const [captchaInput, setCaptchaInput] = useState('');
    const [captchaToken, setCaptchaToken] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        const { value, name } = e.target;

        if (name === 'username') {
            setUsername(value)
        } else if (name === 'password') {
            setPassword(value)
        } else if (name === 'captchaInput') {
            setCaptchaInput(value)
        }
    }

    const fetchCaptchaData = () => {
        fetchData('http://10.226.25.164:8025/api/v1/generateCaptcha').then(data => {
            if (data) {
                setCaptchaImage(data)
            } else {
                console.error('Request failed')
                setCaptchaImage('')
            }
        })
    }

    useEffect(() => {
        fetchCaptchaData()
    }, [])


    return (
        <div>
            <Modal show={isShow} onHide={onClose} size='sm'>
                <Modal.Header closeButton className='p-2 datatable-header cms-login'>
                    <b><h5 className='mx-2 mt-1 px-1'>DVDMS Dashboard Login</h5></b>
                </Modal.Header>
                <Modal.Body className='px-2 py-0'>
                    <div className="ps-0 align-content-center m-3">
                        <select class="form-control aliceblue-bg" id="DashboardFor" name='DashboardFor' placeholder="Select Program">
                            <option value="1" selected="selected">Central Dashboard</option>
                        </select>
                    </div>
                    <div className="ps-0 align-content-center m-3">
                        <input
                            type="text"
                            className="aliceblue-bg form-control"
                            placeholder="Username"
                            name='username'
                            id='username'
                            value={username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="ps-0 align-content-center m-3">
                        <input
                            type="text"
                            className="aliceblue-bg form-control"
                            placeholder="Password"
                            name='password'
                            id='password'
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="ps-0 align-content-center mx-3 my-1">
                        {/* <img className='border-warning border rounded m-1' src="https://uatcdash.dcservices.in/CDDB/hissso/captchaLoginV3.cwh" alt="captcha" /> */}
                        <img className='border-warning border rounded m-1 w-75' src={captchaImage} alt="captcha" />
                        <button className='btn btn-primary btn-sm' onClick={() => { fetchCaptchaData() }}> <i className="fa fa-refresh" style={{ color: "#FBC02D" }}></i></button>
                    </div>
                    <div className="ps-0 align-content-center mx-3 my-1">
                        <input
                            type="text"
                            className="aliceblue-bg form-control"
                            placeholder="Enter Captcha"
                            name='captchaInput'
                            id='captchaInput'
                            value={captchaInput}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="ps-0 align-content-center mt-4 mb-3 mx-4">
                        <Link>Forgot Password ?</Link>
                    </div>

                    <button className='btn cms-login-btn w-100 mb-1'>
                        <b> <span>Login</span></b>
                    </button>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CmsLogin
