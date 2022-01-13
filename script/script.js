//<input type="text" id="new-task-input" placeholder="New Task" />
//<button class="btn btn-primary">Add Task</button>

class Task {
  constructor(id, content) {
    this.id = id;
    this.content = content;
  }
}

const currentsTask = [];

function addTask() {
  const newTaskText = document.getElementById("new-task-text");
  if (newTaskText.value.length > 0) {
    const table = document.getElementById("table");
    const newContent = document.createElement("div");

    currentsTask.push(new Task(currentsTask.length, newTaskText.value));
    console.log(currentsTask);
    newContent.innerHTML = `
      <li class="list-group-item">
        <div class="widget-content p-0">
          <div class="widget-content-wrapper">
            <div class="widget-content-left mr-2">
              <div class="custom-checkbox custom-control">
                <input
                  class="custom-control-input"
                  id="exampleCustomCheckbox12"
                  type="checkbox"
                /><label
                  class="custom-control-label"
                  for="exampleCustomCheckbox12"
                ></label>
              </div>
            </div>
            <div class="widget-content-left">
              <div class="widget-heading">
                ${newTaskText.value}
              </div>
              <div class="widget-subheading">
                <i>By CAMBIAR POR NOMBRE DE USUARIO</i> 
              </div>
            </div>
            <div class="widget-content-right">
              <button class="border-0 btn btn-outline-success">
                <a href="#">Edit</a>
              </button>
              <button
                class="border-0 btn-transition btn btn-outline-danger"
              >
                <i class="fa fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </li>
      `;
    table.appendChild(newContent);
  } else {
    console.log("empty task");
  }
}
