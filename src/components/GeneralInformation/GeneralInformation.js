import React from 'react';

const GeneralInformation = (props)=> {
    const {name, email, phoneNumber} = props.generalInfor;
    return (
        <div className='Section GeneralInfor'>
            <h3>General Information</h3>
            <label>Name
                <input type='text' onChange={(e)=>props.handleChange(e, props.section)} value={name} name='name'></input>
            </label>
            <label>Email
                <input type='email' onChange={(e)=>props.handleChange(e, props.section)} value={email} name='email'></input>
            </label>
            <label>Phone number
                <input type='text' onChange={(e)=>props.handleChange(e, props.section)} value={phoneNumber} name='phone'></input>
            </label>
        </div>
    )
}

export default GeneralInformation;