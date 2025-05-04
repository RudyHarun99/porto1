import React from 'react';
import styles from './CareerJourneySection.module.scss';
import clsx from 'clsx';
import { Journey } from './Journey';
import { Section } from '../Section';

const careerJourney = [
  {
    title: 'Lead Instructor',
    companyName: 'Hacktiv8',
    dateFrom: 'Nov 2023',
    dateTo: 'Oct 2024',
    description: [
      'Mentored 6 - 8 instructors and improved teaching delivery.',
      'Managed course schedules and standardized grading.',
      'Increased student graduation rate by 20%.',
    ],
  },
  {
    title: 'Fullstack Javascript Instructor',
    companyName: 'Hacktiv8',
    dateFrom: 'Nov 2020',
    dateTo: 'Oct 2023',
    description: [
      'Delivered live/recorded sessions on JavaScript, React.js, Node.js.',
      'Designed a full stack curriculum and project-based assessments.',
      'Improved student success rate by 30%.',
    ],
  },
  {
    title: 'Academic Instructor',
    companyName: 'MSIB Campus Merdeka',
    dateFrom: 'Feb 2024',
    dateTo: 'Jul 2024',
    description: [
      'Supervised interns with regular performance reviews.',
      'Achieved 100% intern task completion and growth feedback.',
    ],
  },
];

export const CareerJourneySection: React.FC = () => {
  return (
    <Section
      id='journey'
      title='Career Journey'
      subtitle='A visual timeline of key milestones and experiences from over the years.'
      className={clsx(styles.journeyWrapper, 'container')}
    >
      <Journey>
        {careerJourney.map((career, index) => (
          <Journey.Item
            title={career.title}
            companyName={career.companyName}
            dateFrom={career.dateFrom}
            dateTo={career.dateTo}
            key={`${index}-item`}
          >
            {career.description.map((desc, index) => (
              <Journey.Description key={`${index}-item`}>
                {desc}
              </Journey.Description>
            ))}
          </Journey.Item>
        ))}
      </Journey>
    </Section>
  );
};
