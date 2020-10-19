import React from 'react';

const EducationalExperience = (props)=> {
    const {school, titleOfStudy, dateOfStudy} = props.educationalExp;
    console.log(dateOfStudy, school);
    var curr = new Date();
    curr.setDate(curr.getDate() + 3);
    var date = curr.toISOString().substr(0,10);
    console.log(date);
    return (
        <div className='Section EducationalExp'>
            <h3>Educational Experience</h3>
            <label>School name
                <input 
                    type='text' 
                    onChange={(e)=>props.handleChange(e, props.section)} 
                    name='school'
                    value={school}></input>
            </label>
            <label>Title of study
                <input 
                    type='text' 
                    onChange={(e)=>props.handleChange(e, props.section)} 
                    name='titleOfStudy'
                    value={titleOfStudy}></input>
            </label>
            <label>Date of study
                <input 
                    type='date' 
                    onChange={(e)=>props.handleChange(e, props.section)} 
                    name='dateOfStudy'
                    defaultValue={dateOfStudy}></input>
            </label>
        </div>
    )
}

export default EducationalExperience;