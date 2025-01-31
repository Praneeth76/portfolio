const SkillItem = ({ name, icon }) => {
  return (
    <div className="skill-item">
      <img src={icon} alt={name} className="w-16 h-16 mx-auto" />
      <p className="mt-2 text-gray-700">{name}</p>
    </div>
  );
};

export default SkillItem;
