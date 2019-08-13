import * as React from 'react';
import ProfileStyles from './styles/ProfileStyles';
import Skills from './Skills';
import Bar from './styles/Bar';

const Collection: React.FunctionComponent = () => {
  console.warn('Hi, will be great to talk :) --> (+57) 317 735 86 56');
  return (
    <ProfileStyles>
      <div className="title">
        <div>
          <h3>Julián Álvarez</h3>
          <span>FullStack developer</span>
        </div>
        <div className="jus-end">
          <img src="/static/me-opt.png" title="Julián Álvarez" />
        </div>
      </div>

      <div className="skills">
        <h4>Skills</h4>

        {/* MAP SKILLS ARRAY */

        Skills.map(skill => {
          return (
            <div key={skill.name}>
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
          <div>2012 - 2018</div>
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

      <div className="background">
        <h4>Background</h4>

        <details>
          <summary className="hola">Reading of 3 min, you are warned.</summary>
          <p>
            By 2011 I was studying public accounting and enrolled in a free PHP
            class, it all started there. I liked it and then contacted the class
            teacher to give me more private lessons. It turned out that he had a
            company and allowed me to go, after a week seeing my interest he did
            not charge me for the hours, in return I was his motorcycle
            messenger (I had an old motorcycle).
          </p>
          <p>
            In 2012 I started teaching my younger brother because he spent a lot
            of time playing on the PC, a few months later I saw his great talent
            for programming, together we created a software agency, eventually a
            cousin arrived, then other friends and in our best "moment" we was 7
            people, we had interns from Peru and Brazil, and we created products
            for different private and public companies in Colombia, the company
            lasted 5 years and it was our greatest learning.
          </p>
          <p>
            It ended because we were not growing so much and we made the
            decision to look for alternatives outside our country, development
            was better valued outside. My brother now works for Zeit and is my
            greatest pride, my whole team is now part of very interesting
            companies, for the moment I am learning again, with humility, maybe
            in the future I will create a company again, with my entrepreneurial
            heart.
          </p>
        </details>
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
            <span>2010-2011</span> PHP, MySQL - Código fácilito, ICM Software
          </p>
          <p>
            <span>2011-2012</span> Python - Django Docs, Youtube
          </p>
          <p>
            <span>2013-2016</span> MeteorJs - Meteor Docs, MeteorHacks
          </p>
          <p>
            <span>2017 - Present</span> ReactJs, NextJs - Udemy, WesBos Courses,
            Google
          </p>
          <p>
            <span>2011 - Present</span> CSS3, HTML5 - Google, Udemy, Youtube
          </p>
          <p>
            <span>2013 - Present</span> MongoDB - Google, Mongo Docs
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
