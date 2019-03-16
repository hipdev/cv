import * as React from 'react';
import ProfileStyles from './styles/ProfileStyles';
import Skills from './Skills';
import Bar from './styles/Bar';

const Collection: React.FunctionComponent = () => {
  return (
    <ProfileStyles>
      <div className="title">
        <div>
          <h3>Julián Álvarez</h3>
          <span>FrontEnd developer</span>
        </div>
        <div className="jus-end">
          <img src="/static/me.png" title="Julián Álvarez" />
        </div>
      </div>

      <div className="skills">
        <h4>Skills</h4>

        {/* MAP SKILLS ARRAY */

        Skills.map(skill => {
          return (
            <div>
              {skill.name}
              <div className="bar">
                <Bar width={skill.bar} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="jobs">
        <h4>Projects / Jobs</h4>
        <div className="grid-two">
          <div>2011 - 2018</div>
          <div>
            Grandpa / <i>CEO, created my own sofware company.</i>
          </div>
        </div>

        <div className="grid-two">
          <div>2019 - Present</div>
          <div>
            Sapco /{' '}
            <i>FullStack dev - ReactJs, GraphQL, Yoga, Prisma, MongoDB.</i>
          </div>
        </div>
      </div>

      <div className="studies">
        <div>
          <h4>Standard Studies</h4>
          <div>
            <p>
              <span>2004-2009</span> High School / Inem José Felix de Restrepo
            </p>
            <p>
              <span>2010 - Never finished</span> Accountance / Politécnico JIC
            </p>
          </div>
        </div>

        <div>
          <h4> Non-certified studies</h4>
          <p>
            <span>2010-2011</span> PHP, MySQL - Código fácilito
          </p>
          <p>
            <span>2011-2012</span> Python - Django Docs, Youtube
          </p>
          <p>
            <span>2013-2016</span> MeteorJs - Meteor Docs, MeteorHacks
          </p>
          <p>
            <span>2017 - Presente</span> ReactJs, NextJs - Udemy, WesBos
            Courses, Google
          </p>
          <p>
            <span>2011 - Presente</span> CSS3, HTML5 - Google, Udemy, Youtube
          </p>
          <p>
            <span>2013 - Presente</span> MongoDB - Google, Mongo Docs
          </p>
        </div>
      </div>
      <div className="interests">
        <div>
          <h4>Interest</h4>
          <p>
            Animal lover, musicholic, ideas, stories, comedy and the little
            things that truly matter.
          </p>
        </div>
      </div>
    </ProfileStyles>
  );
};

export default Collection;
