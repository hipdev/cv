'use client'

import { SkillsBack, SkillsFront } from 'lib/skills'

const Skills: React.FC = () => {
  return (
    <div className="border-b pb-10 border-b-white/5">
      <h3 className="text-2xl font-semibold mb-5">Skills</h3>

      <h4 className="font-medium text-xl">Frontend</h4>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 text-white/80 font-extralight gap-2">
        {
          /* MAP SKILLS ARRAY */
          SkillsFront.map((skill) => {
            return <div key={skill.name}>{skill.name}</div>
          })
        }
      </div>

      <h4 className="font-medium text-xl mt-7">Backend</h4>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 text-white/80 font-extralight gap-2">
        {
          /* MAP SKILLS ARRAY */
          SkillsBack.map((skill) => {
            return <div key={skill.name}>{skill.name}</div>
          })
        }
      </div>
    </div>
  )
}

export default Skills
