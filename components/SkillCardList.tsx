import SkillCardList from '@/components/SkillCardList';

interface Skill {
  skill: string;
  level: string;
  description: string;
}

interface Skills {
  skills: Skill[];
}

export default function SkillList({ skills }: Skills) {

  return (

    <section className="container mx-auto px-4 py-12">

      <h2 className="text-3xl font-bold mb-6 text-center">My Skills</h2>

      <SkillCardList skills={skills} />

    </section>

  );

}