import React, { useState } from 'react'
import { fetchUpdatePostData } from '../utils/ApiHooks';

export const DrugTypeForm = () => {

    const [drugTypeName,setDrugTypeName] =useState("");
    const [drugTypeNameErr, setDrugTypeNameErr] = useState("");

    const save= async(e)=>{
        alert("clicked ")
        alert("Data Saved"+drugTypeName+"=======")
        e.preventDefault();

        let isValid = true
        if (!drugTypeName.trim()) {
            
            setDrugTypeNameErr("Please enter Drug Type Name")
            isValid = false;
        }

        if(isValid){
        const data ={
            cwhstrDrugTypeName:drugTypeName,
            gnumSeatId: 11111
        }

        //const response =fetchUpdatePostData("/drugtype/addDrug",data);
        alert("Data Saved-----")
        reset();
    }

    }

    const reset =()=>{
        setDrugTypeName("");
    }

  return (
    <>
    <div className='text-left w-100 fw-bold p-1 heading-text' >Drug Type Master &gt;&gt; Add</div>
    

    <div className="form-group col-sm-6 row" style={{ paddingBottom: "1px" }}>
                    <label className="col-sm-4 col-form-label fix-label required-label"> Drug Type Name : </label>
                    <div className="col-sm-8 align-content-center">
                        <input
                            type="text"
                            className="aliceblue-bg form-control form-control-sm border-dark-subtle"
                            name='drugTypeName'
                            id='drugTypeName'
                            onChange={(e) => {
                                setDrugTypeName(e.target.value);
                                setDrugTypeNameErr("");
                            }}
                            value={drugTypeName}
                            required
                        />
                        { drugTypeName=="" &&
                           <p className="text-danger">{drugTypeNameErr}</p>
                        }
                    </div>
    </div>


    <div className='w-100 py-1 my-2 opacity-75 rounded-3' style={{ backgroundColor: "#000e4e" }}></div>

            <div className='text-center'>

                <>
                    <button className='btn btn-sm new-btn-blue py-0' onClick={save}>
                        <i className="fa fa-save me-1"></i>
                        Save</button>

                    <button className='btn btn-sm new-btn-blue py-0' onClick={null}>
                        <i className="fa fa-broom me-1"></i>Clear</button>

                        <button className='btn btn-sm new-btn-blue py-0' onClick={null}>
                        <i className="fa fa-broom me-1"></i>Cancel</button>
                </>

            </div>

    </>
  )
}

export default DrugTypeForm;