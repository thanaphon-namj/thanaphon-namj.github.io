import bu from "../Assets/bu.jpg";

function Education() {
  return (
    <section className="flex flex-col gap-y-3">
      <h2 className="font-bold text-xl">Education</h2>
      <a
        href="https://www.bu.ac.th"
        className="block cursor-pointer"
        target="_blank"
      >
        <div className="flex">
          <div className="flex-none">
            <div className="flex size-12 border rounded-full overflow-hidden p-2">
              <img src={bu} />
            </div>
          </div>
          <div className="flex-grow ml-4 group">
            <div className="flex flex-col">
              <div className="flex justify-between items-center">
                <h3 className="inline-flex justify-center items-center font-semibold text-xs sm:text-sm">
                  Bangkok University{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4 opacity-0 group-hover:opacity-100 ease-out duration-300 group-hover:translate-x-1"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </h3>
                <div className="text-neutral-500 text-xs sm:text-sm text-right tabular-nums">
                  May 2022 - Current
                </div>
              </div>
              <div className="text-xs">
                Bachelor of Science (BS) - Information Technology
              </div>
            </div>
          </div>
        </div>
      </a>
    </section>
  );
}

export default Education;
