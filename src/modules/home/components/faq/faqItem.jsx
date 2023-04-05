import { useRef } from "react";

export default function FaqItem(props) {
  const { active, onToggle } = props;

  const contentEl = useRef();

  return (
    <>
      <li
        className={`border-neutral-200 bg-transparent border-b border-black ${
          active ? "active" : ""
        }`}
      >
        <h2 className="mb-0">
          <button
            className="group relative flex w-full items-start rounded-none bg-transparent py-4 px-0 text-left text-xs text-black transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-transparent [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[]"
            type="button"
            onClick={onToggle}
          >
            {" "}
            <strong>Q:</strong> {props.faq?.question}{" "}
            <span
              className={`ml-auto -mr-1 h-5 w-5 shrink-0 ${
                active
                  ? "rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white"
                  : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>{" "}
            </span>
          </button>
        </h2>
        <div
          ref={contentEl}
          className={`!visible faqAccordionItem ${active ? "" : "hidden"}`}
          style={
            active
              ? { height: contentEl.current.scrollHeight }
              : { height: "0px" }
          }
        >
          <div className="pt-0 pb-4 text-xs text-black">
            {" "}
            {props?.faq?.answer}{" "}
          </div>
        </div>
      </li>
    </>
  );
}
