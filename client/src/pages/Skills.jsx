import skillsData from "./../data/skillData";
import SkillItem from "./../components/SkillsItem";

const Skills = () => {
  return (
    <section className="bg-gray-200 py-20 text-center">
      <h2 className="text-3xl font-bold text-blue-600">My Skills</h2>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skillsData.map((skill, index) => (
          <SkillItem key={index} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
