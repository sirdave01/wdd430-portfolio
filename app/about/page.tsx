import type { Metadata } from 'next';
import SkillList from '@/components/SkillCardList';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about my web development skills and experience.',
};

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
    level: 'Advanced',
    description: 'Experience with Express.js and its ecosystem, including middleware and routing.'
  },
  {
    skill: 'Node.js',
    level: 'Advanced',
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
    level: 'Advanced',
    description: 'Experience with React for building dynamic and responsive user interfaces.'
  },
  {
    skill: 'Next.js',
    level: 'Advanced',
    description: 'Experience with Next.js for building server-side rendered and static web applications.'
  },
  {
    skill: 'TypeScript',
    level: 'Advanced',
    description: 'Experience with TypeScript for building scalable and maintainable web applications.'
  },
  {
    skill: 'Git',
    level: 'Advanced',
    description: 'Experience with Git for version control and collaborative development.'
  },
  {
    skill: 'Tailwind CSS',
    level: 'Advanced',
    description: 'Experience with Tailwind CSS for building responsive and customizable user interfaces.'
  }
];

export default function About() {

  return (

    <main className="max-w-4xl mx-auto px-4 py-12">

      <section className="text-center py-12">

        <h2 className="text-3xl font-bold mb-4">About Me</h2>

        {/* create a nice divider - not a straight line- between this paragraph and the previous one  */}
        <hr className="relative my-8 overflow-visible border-t border-gray-300 after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-black after:px-3 after:text-gray-400 after:content-['✦']" />

           <p className="text-lg text-white-700">

          I am a Certified full-stack developer with experience in building scalable and efficient web applications using modern technologies.

          I build web applications that are responsive, user-friendly, and optimized for performance. I am passionate about learning new technologies and improving my skills to deliver high-quality solutions.

        </p>

        {/* create a nice divider between this paragraph and the previous one */}
        <hr className="my-8 border-t-4 border-dotted border-gray-400" />
        <p className="text-lg text-white-700">

          Below shares more information about my skills, background, and work.

        </p>

        <hr className="my-8 h-1.5 rounded-full border-0 bg-gray-300" />

      </section>

      <SkillList skills={skills} />

    </main>

  );

}