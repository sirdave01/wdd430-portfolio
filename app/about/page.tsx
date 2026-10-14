import type { Metadata } from 'next';
import Image from 'next/image';
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
      
      {/* Hero / Intro section with photo */}
      <section className="flex flex-col md:flex-row items-center gap-10 py-12">
        
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <Image
            src="/founder.jpeg"   
            alt="Osigwe Uchechukwu DavidCaleb"
            width={192}
            height={192}
            className="w-48 h-48 rounded-full object-cover border-4 border-blue-600 shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-white leading-relaxed">
            I am a Certified full-stack developer with experience in building scalable 
            and efficient web applications using modern technologies.
          </p>
          <p className="text-lg text-white leading-relaxed mt-4">
            I build web applications that are responsive, user-friendly, and optimized 
            for performance. I am passionate about learning new technologies and improving 
            my skills to deliver high-quality solutions.
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-10 border-t border-gray-300" />

      {/* Skills section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">Skills & Technologies</h2>
        <SkillList skills={skills} />
      </section>

    </main>
  );
}