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
        <Tag>MongoDB</Tag>
        <Tag>AWS</Tag>
        <Tag>CI/CD</Tag>
        <Tag>Debugging</Tag>
        <Tag>Figma</Tag>
        <Tag>Laravel</Tag>
        <Tag>Firebase</Tag>
        <Tag>NestJS</Tag>
        <Tag>Tailwind CSS</Tag>
        <Tag>C#</Tag>
        <Tag>JSON</Tag>
        <Tag>Python</Tag>
        <Tag>RESTful API</Tag>
        <Tag>GraphQL</Tag>
      </div>
    </section>
  );
}

export default Skills;
