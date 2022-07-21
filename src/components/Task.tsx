import React from "react";

interface TaskProps {
  task: {
    id: string,
    title: string,
    state: string
  },
  onArchiveTask: () => void,
  onPinTask: () => void
}

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }: TaskProps) {
  return (
    <div className="list-item">
      <span>{title}</span>
      <div className="task-main">
        <input type="checkbox" id={id} />
        <label htmlFor={id}>{title}</label>


      </div>
    </div>
  )
}