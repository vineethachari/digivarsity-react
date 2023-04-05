import { useState } from "react";
import FoooterAccordionItem from "./foooterAccordionItem";

export default function FooterAccordion() {
  const [clicked, setClicked] = useState("0");
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  const leftItems = [
    {
      title: "Contact Us",
      desc: " You can modify any of this with custom CSS or overriding our default variables.",
      key: 1,
    },
    {
      title: "Find Degree Programs",
      desc: " You can modify any of this with custom CSS or overriding our default variables",
      key: 2,
    },
  ];
  const rightItems = [
    {
      title: "Find Work Opportunities",
      desc: " You can modify any of this with custom CSS or overriding our default variables",
      key: 3,
    },
    {
      title: " Find University",
      desc: " You can modify any of this with custom CSS or overriding our default variables",
      key: 4,
    },
  ];

  return (
    <>
      <div className="px-4">
        <div className="grid grid-cols-2 gap-x-4 mt-5">
          <ul className="accordionExample">
            {leftItems.map((item, index) => (
              <FoooterAccordionItem
                onToggle={() => handleToggle(item.key)}
                active={clicked === item.key}
                key={item.key}
                item={item}
              />
            ))}
          </ul>
          <ul className="accordionExample">
            {rightItems.map((item, index) => (
              <FoooterAccordionItem
                onToggle={() => handleToggle(item.key)}
                active={clicked === item.key}
                key={item.key}
                item={item}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
