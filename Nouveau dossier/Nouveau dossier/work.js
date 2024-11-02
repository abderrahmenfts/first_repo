function addTask() {
  const taskInput = document.getElementById('taskInput');
  if (taskInput.value.trim()) {
    const li = document.createElement('li');
    li.textContent = taskInput.value;
    li.onclick = () => li.remove();
    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
  }
}
