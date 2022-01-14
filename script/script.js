//<input type="text" id="new-task-input" placeholder="New Task" />
//<button class="btn btn-primary">Add Task</button>

class Task {
  constructor(id, content) {
    this.id = id;
    this.content = content;
  }
}

const currentTasks = [];

function deleteTask(id) {
  console.log("entro");
  const toDelete = document.getElementById("taskDiv" + id);
  console.log(toDelete);
  console.log(document);
  document.removeChild(toDelete); /* ARREGLAR */
}

function addTask() {
  const newTaskText = document.getElementById("new-task-text");
  if (newTaskText.value.length > 0) {
    const table = document.getElementById("table");
    const newContent = document.createElement("div");

    currentTasks.push(new Task(currentTasks.length, newTaskText.value));
    console.log(currentTasks);
    newContent.innerHTML = `
      <li class="list-group-item" id="taskDiv${currentTasks.length}">
        <div class="widget-content p-0">
          <div class="widget-content-wrapper">
            <div class="widget-content-left mr-2">
              <div class="custom-checkbox custom-control">
              <input
                class="custom-control-input"
                id="exampleCustomCheckbox${currentTasks.length}" 
                type="checkbox"
              /><label
                class="custom-control-label"
                for="exampleCustomCheckbox${currentTasks.length}"
              ></label>
            </div>
            </div>
            <div class="widget-content-left">
              <div class="widget-heading">
                ${newTaskText.value}
              </div>
              <div class="widget-subheading">
                <!-- <i>By CAMBIAR POR NOMBRE DE USUARIO</i> -->
              </div>
            </div>
            <div class="widget-content-right">
              <button class="border-0 btn btn-outline-success">
                <a href="#">Edit</a>
              </button>
              <button
                class="border-0 btn-transition btn btn-outline-danger"
              >
                <i class="fa fa-trash" id="trash${currentTasks.length}" onClick="deleteTask(${currentTasks.length})"></i>

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
  console.log("lenght al momento de crear nueva tarea" + currentTasks.length);
  console.log("table despues de insertar child");
  console.log(table);
}
