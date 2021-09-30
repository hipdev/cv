import { SkillsBack, SkillsFront } from 'lib/skills'
import styles from './Profile.module.scss'

const Skills: React.FC = () => {
  return (
    <div className={styles.skills}>
      <h4>Skills</h4>

      <h3>Frontend</h3>

      {
        /* MAP SKILLS ARRAY */
        SkillsFront.map((skill) => {
          return (
            <div key={skill.name}>
              {skill.name}
              <div className={styles.bar}>
                <div className="progress_bar" />

                <style jsx>
                  {`
                    .progress_bar {
                      width: ${skill.bar}%;
                      background-color: white;
                      height: 0.4rem;
                    }
                  `}
                </style>
              </div>
            </div>
          )
        })
      }

      <h3>Backend</h3>

      {
        /* MAP SKILLS ARRAY */
        SkillsBack.map((skill) => {
          return (
            <div key={skill.name}>
              {skill.name}
              <div className={styles.bar}>
                <div className="progress_bar" />

                <style jsx>
                  {`
                    .progress_bar {
                      width: ${skill.bar}%;
                      background-color: white;
                      height: 0.4rem;
                    }
                  `}
                </style>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Skills
