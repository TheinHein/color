import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { defaultAnimateLayoutChanges } from "@dnd-kit/sortable";
function animateLayoutChanges(args) {
  const { isSorting, wasSorting } = args;

  if (isSorting || wasSorting) {
    return defaultAnimateLayoutChanges(args);
  }

  return true;
}
export default function SortableItem(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ animateLayoutChanges, id: props.id });
  const style = { transform: CSS.Transform.toString(transform), transition };
  return (
    <div
      ref={setNodeRef}
      style={{
        ...style,
        width: "50px",
        height: "50px",
        backgroundColor: "blue",
      }}
      {...attributes}
      {...listeners}
    ></div>
  );
}
