import me from "../Assets/me.jpg";

function Intro() {
  return (
    <section>
      <div className="flex justify-between gap-2">
        <div className="flex flex-col flex-1 space-y-2">
          <div className="font-bold text-3xl sm:text-4xl xl:text-5xl/none">
            Hi, I&apos;m Thanaphon 👋
          </div>
          <div className="md:text-xl">Software Engineer</div>
        </div>
        <div className="flex size-28 rounded-full overflow-hidden">
          <img src={me} />
        </div>
      </div>
    </section>
  );
}

export default Intro;
