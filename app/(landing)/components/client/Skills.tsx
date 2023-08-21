'use client'

import { SkillsBack, SkillsFront } from 'lib/skills'

const Skills: React.FC = () => {
  return (
    <div>
      <h4>Skills</h4>

      <h3>Frontend</h3>

      {
        /* MAP SKILLS ARRAY */
        SkillsFront.map((skill) => {
          return <div key={skill.name}>{skill.name}</div>
        })
      }

      <h3>Backend</h3>

      {
        /* MAP SKILLS ARRAY */
        SkillsBack.map((skill) => {
          return <div key={skill.name}>{skill.name}</div>
        })
      }
    </div>
  )
}

export default Skills
