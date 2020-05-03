import React from 'react';
import skillList from "../json/skillList";
import "../styles/skills.css"

function Skills() {
  return (
    <div className="skills">
      {
        skillList.map(skill => {
          return (
            <div className="skill" key={skill['skillName']}>
              <img
                className={skill['skillName'] === 'Sinatra' ? 'sinatra' : 'skill-image'}
                src={skill['image']}
                alt={`${skill['skillName']} icon`}
              ></img> 
              <p className="skill-name">{skill['skillName']}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default Skills;
