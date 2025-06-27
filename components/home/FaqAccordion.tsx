"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";

interface ListProps {
  title: string;
  desc: string;
}

interface FaqAccordionProps {
  items: ListProps[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const itemClasses = {
    base: "py-0 bg-primary text-white w-full",
    content: "text-lg px-2",
    indicator: "text-medium",
    title: "font-normal text-white font-bold text-lg",
    trigger: "px-2 py-0 rounded-lg h-14 flex items-center",
  };

  return (
    <Accordion
      defaultExpandedKeys={["0"]}
      itemClasses={itemClasses}
      variant="splitted"
    >
      {items.map((list, key) => (
        <AccordionItem key={key} aria-label={list.title} title={list.title}>
          {list.desc}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
