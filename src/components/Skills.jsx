import React from 'react';

function Skills(props) {
    const [skill, icon, color] = props.skill.split(',')
    return (
        <>
            <span className={`skill alert p-1 ${color}`}>{skill}
            <span role="img">{icon}</span>

            </span>
        </>
    );
}

export default Skills;