function ToDoList({ task }) {
  return (
    <div>
      <ul>
        {task.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
