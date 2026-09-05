import SkillList from '@/components/SkillCardList';

const skills = [
  {
    skill: 'HTML',
    level: 'Advanced',
    description: 'Proficient in HTML5, including semantic elements and accessibility best practices.'
  },
  {
    skill: 'CSS',
    level: 'Advanced',
    description: 'Proficient in CSS3, including flexbox, grid, and responsive design principles.'
  },
  {
    skill: 'JavaScript',
    level: 'Advanced',
    description: 'Proficient in JavaScript, including ES6+ features and asynchronous programming.'
  },
  {
    skill: 'Express',
    level: 'Intermediate',
    description: 'Experience with Express.js and its ecosystem, including middleware and routing.'
  },
  {
    skill: 'Node.js',
    level: 'Intermediate',
    description: 'Familiar with Node.js for building server-side applications and APIs.'
  },
  {
    skill: 'MongoDB',
    level: 'Advanced',
    description: 'Basic understanding of MongoDB and its ecosystem for database design and management.'
  },
  {
    skill: 'PostgreSQL',
    level: 'Advanced',
    description: 'Basic understanding of PostgreSQL and its ecosystem for database design and management.'
  },
  {
    skill: 'React',
    level: 'Intermediate',
    description: 'Experience with React for building dynamic and responsive user interfaces.'
  },
  {
    skill: 'Next.js',
    level: 'Intermediate',
    description: 'Experience with Next.js for building server-side rendered and static web applications.'
  },
  {
    skill: 'TypeScript',
    level: 'Intermediate',
    description: 'Experience with TypeScript for building scalable and maintainable web applications.'
  },
  {
    skill: 'Git',
    level: 'Intermediate',
    description: 'Experience with Git for version control and collaborative development.'
  },
  {
    skill: 'Tailwind CSS',
    level: 'Intermediate',
    description: 'Experience with Tailwind CSS for building responsive and customizable user interfaces.'
  }
];

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700">
        This about page shares more information about my background and work.
      </p>
      <SkillList skills={skills} />
    </main>
  );
}