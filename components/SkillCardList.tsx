import SkillCard from './SkillCard';

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

    <section className="grid gap-4 md:grid-cols-2">

        {skills.map((skill, index) => (
        <SkillCard
          key={index}
          skill={skill.skill}
          level={skill.level}
          description={skill.description}
        />
      ))}

    </section>

  );

}