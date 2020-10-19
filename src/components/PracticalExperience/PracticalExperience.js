import React from 'react';

const PracticalExperience = (props)=> {

    const {company, positionTitle, mainTasks} = props.practicalExp;
    
    return (
        <div className='Section PracticalExp'>
            <h3>Practical Experience</h3>
            <label>Company Name
                <input 
                    type='text' 
                    name='company' 
                    onChange={(e)=>props.handleChange(e, props.section)}
                    value={company}></input>
            </label>
            <label>Position Title
                <input 
                    type='email' 
                    name='positionTitle' 
                    onChange={(e)=>props.handleChange(e, props.section)}
                    value={positionTitle}></input>
            </label>
            <label>Main Tasks
                <input 
                    type='text' 
                    name='mainTasks' 
                    onChange={(e)=>props.handleChange(e, props.section)}
                    value={mainTasks}></input>
            </label>
            <label>Date from and until
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                    <input name='start' style={{width: '30%', border: '1px solid black', height: '25px'}} type='date' onChange={(e)=>props.handleChange(e, props.section)}></input>
                    <p style={{height: '25px', margin: 0}}>→</p>
                    <input name='end' style={{width: '30%', border: '1px solid black', height: '25px'}} type='date' onChange={(e)=>props.handleChange(e, props.section)}></input>
                </div>
            </label>
        </div>
    )
}

export default PracticalExperience;