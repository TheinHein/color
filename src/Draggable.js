import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import React from "react";
import DraggableColorBox from "./DraggableColorBox";

export default function Draggable(props) {
  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 1 } }),
    useSensor(TouchSensor, {
      activationConstraint: { distance: 1 },
    })
  );
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={props.colors.map((color) => color.name)}>
        {props.colors.map((color, i) => (
          <DraggableColorBox
            {...color}
            key={color.name}
            id={color.name}
            deleteColor={props.deleteColor}
          />
        ))}
      </SortableContext>
    </DndContext>
  );
  function handleDragEnd(event) {
    const { active, over } = event;
    if (active.id !== over.id) {
      props.setColors((colors) => {
        const oldIndex = colors.indexOf(
          colors.find((color) => color.name === active.id)
        );
        const newIndex = colors.indexOf(
          colors.find((color) => color.name === over.id)
        );
        return arrayMove(colors, oldIndex, newIndex);
      });
    }
  }
}
