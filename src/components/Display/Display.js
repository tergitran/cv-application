import React from 'react';
import styles from './Display.module.css';

const Display = (props)=> {
    const {generalInfor, educationalExp, practicalExp} = props.infor;
    return(
        <div className={styles.Display}>
            <div className={styles.Contact}>
                <div className={styles.Avatar}>
                    <div className={styles.Img}></div>
                    <h2>{generalInfor.name}</h2>
                </div>
                <h5>Phone</h5>
                <p>{generalInfor.phoneNumber}</p>
                <h5>Email</h5>
                <p>{generalInfor.email}</p>
            </div>
            <div className={styles.Education}>
                <h2>Education</h2>
                <h5>School</h5>
                <p>{educationalExp.school}</p>
                <h5>Field of Study</h5>
                <p>{educationalExp.titleOfStudy}</p>
                <h5>Date of study</h5>
                <p>{educationalExp.dateOfStudy}</p>
            </div>
            <div className={styles.Experience}>
                <h2>Practical Experience</h2>
                <h5>Company</h5>
                <p><span>{practicalExp.company}</span></p>
                <h5>Position</h5>
                <p>{practicalExp.positionTitle}</p>
                <h5>Main Tasks</h5>
                <p>{practicalExp.mainTasks}</p>
            </div>
        </div>
    )
}

export default Display;