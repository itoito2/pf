import React from 'react';
import './SkillsCharacter.css';

const SkillsCharacter = () => {
  return (
    <div className="container" id="c">
      <div className="section">
        <h2 className="t">Skills</h2>
        <div className="skill">
          <span>Js</span>
          <div className="bar">
            <div className="level js"></div>
          </div>
        </div>
        <div className="skill">
          <span>SQL</span>
          <div className="bar">
            <div className="level sql"></div>
          </div>
        </div>
        <div className="skill">
          <span>Python</span>
          <div className="bar">
            <div className="level python"></div>
          </div>
        </div>
        <div className="skill">
          <span>C++</span>
          <div className="bar">
            <div className="level cpp"></div>
          </div>
        </div>
      </div>
      <div className="section">
        <h2 className="t">Character</h2>
        <div className="skill">
          <span>Intelligence</span>
          <div className="bar">
            <div className="level intelligence"></div>
          </div>
        </div>
        <div className="skill">
          <span>Smart</span>
          <div className="bar">
            <div className="level smart"></div>
          </div>
        </div>
        <div className="skill">
          <span>Funny</span>
          <div className="bar">
            <div className="level funny"></div>
          </div>
        </div>
        <div className="skill">
          <span>Skilled</span>
          <div className="bar">
            <div className="level skilled"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCharacter;