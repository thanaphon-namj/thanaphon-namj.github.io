import Tag from "../Components/Tag";

function Skills() {
  return (
    <section className="flex flex-col gap-y-3">
      <h2 className="font-bold text-xl">Skills</h2>
      <div className="flex flex-wrap gap-1">
        <Tag>JavaScript</Tag>
        <Tag>TypeScript</Tag>
        <Tag>HTML</Tag>
        <Tag>CSS</Tag>
        <Tag>React.js</Tag>
        <Tag>Vue.js</Tag>
        <Tag>Golang</Tag>
        <Tag>PHP</Tag>
        <Tag>Java</Tag>
        <Tag>MySQL</Tag>
        <Tag>Git</Tag>
        <Tag>Docker</Tag>
      </div>
    </section>
  );
}

export default Skills;
