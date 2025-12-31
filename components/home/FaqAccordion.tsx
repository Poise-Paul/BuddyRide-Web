"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import React from "react";

interface ListProps {
  title: string;
  desc: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

interface AnswerItem {
  label: string;
  value: string;
}

interface FaqItem {
  quest: string;
  ans: string | AnswerItem[];
  intro?: string;
  outro?: string;
}


export default function FaqAccordion({ items }: FaqAccordionProps) {
  const itemClasses = {
    base: "py-0 bg-primary text-white w-full",
    content: "text-lg px-2",
    indicator: "text-medium",
    title: "font-normal text-white font-bold text-lg",
    trigger: "px-2 py-0 rounded-lg h-14 flex items-center",
  };


const renderTextWithFormatting = (text: string) => {
  const parts = text.split(
    /(\*\*.*?\*\*|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g
  );

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-white font-bold">
          {part.replace(/\*\*/g, "")}
        </strong>
      );
    }
    if (part.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)) {
      return (
        <a
          key={i}
          href={`mailto:${part}`}
          className="text-primary font-semibold underline hover:text-blue-700"
        >
          {part}
        </a>
      );
    }
    if (part.includes("\n")) {
      return part.split("\n").map((line, idx) => (
        <React.Fragment key={idx}>
          {line}
          {idx !== part.split("\n").length - 1 && <br />}
        </React.Fragment>
      ));
    }
    return part;
  });
};


  return (
    <Accordion
      defaultExpandedKeys={["0"]}
      itemClasses={itemClasses}
      variant="splitted"
    >
      {/* {items.map((list, key) => (
        <AccordionItem key={key} aria-label={list.title} title={list.title}>
          {list.desc}
        </AccordionItem>
      ))} */}
      {items.map((item, index) => (
        <AccordionItem key={index} aria-label={item.quest} title={item.quest}>
          <div className="whitespace-pre-wrap leading-relaxed font-NeuePlakRegular">
            {/* 1. Render Intro if it exists */}
            {item.intro && (
              <div className="mb-2">{renderTextWithFormatting(item.intro)}</div>
            )}

            {/* 2. Render Answer (String or List) */}
            {typeof item.ans === "string" ? (
              <div>{renderTextWithFormatting(item.ans)}</div>
            ) : (
              <ul className="space-y-2 list-none p-0 m-0">
                {item.ans.map((subItem, subIdx) => (
                  <li key={subIdx}>
                    <span className="font-bold text-white">
                      {subItem.label}
                    </span>{" "}
                    <span>{renderTextWithFormatting(subItem.value)}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* 3. Render Outro if it exists */}
            {item.outro && (
              <div className="mt-4 border-t pt-2 italic text-sm">
                {renderTextWithFormatting(item.outro)}
              </div>
            )}
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
