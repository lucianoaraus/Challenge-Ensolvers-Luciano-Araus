class FoldersList {
  constructor(id, folders) {
    this.id = id;
    this.folders = folders; /* array de carpetas */
    this.div = document.createElement("div").innerHTML = `
      <div class="scroll-area-sm">
        <perfect-scrollbar class="ps-show-limits">
          <div style="position: static" class="ps ps--active-y">
            <div class="ps-content">
              <ul class="list-group list-group-flush" id="table">
              </ul>
            </div>
          </div>
        </perfect-scrollbar>
      </div>
    `;
  }

  addFolderListHTML() {
    document
      .getElementById("folders-header")
      .insertAdjacentHTML("afterend", this.div);
  }

  addFolder(newFolder) {
    this.folders.push(newFolder);
    newFolder.addFolderHTML();
  }

  deleteFolder(deleteFolder) {
    /*WIP*/
    let newArray = [];
    newArray = this.folders.filter(
      (folder) => folder.id != deleteFolder.id
    ); /* Filtra por id y saca la carpeta no deseada */
    this.folders = newArray; /* Se actualiza con las nuevas carpetas */
  }
}

let foulderCount = 0; /* For the Folders IDs */
$("#new-folder-button").click(function () {
  const newFolder = document.getElementById("new-folder-text");
  const newFolderValue = newFolder.value;

  if (newFolderValue.length > 0) {
    const newFolderObject = new Folder(foulderCount, newFolderValue, []);
    motherFolderList.addFolder(newFolderObject);
    console.log("new folder created");
    foulderCount++;
  } else {
    console.log("no valid folder name");
  }
});

$("#test").click(function () {
  console.log("entro");
});

const motherFolderList = new FoldersList(0, []); /* MUST BE UNIQUE, ONLY ONE */

/* ------------------------     Creacion del codigo HTML -------------------- */
motherFolderList.addFolderListHTML();

let taskCount = 0; /* For the Tasks IDs */
class Folder {
  constructor(id, name, tasks) {
    this.id = id;
    this.name = name;
    this.tasks = tasks; /* array of tasks */
    this.div = document.createElement("div").innerHTML = `
      <li class="list-group-item" id="folder${id}DivId">
        <div class="widget-content p-0">
          <div class="widget-content-wrapper">
            <div class="widget-content-left mr-2">
            <div class="custom-checkbox custom-control">
            <input
              class="custom-control-input"
              id="exampleCustomCheckbox${id}" 
              type="checkbox"
            /><label
              class="custom-control-label"
              for="exampleCustomCheckbox${id}"
            ></label>
          </div>
          </div>
            <div class="widget-content-left">
              <div class="widget-heading">
                ${name}
              </div>
            </div>
            <div class="widget-content-right">
              <button class="border-0 btn btn-outline-success" id="folder${id}ItemsButtonId">
                view items
              </button>
              <button
                class="border-0 btn-transition btn btn-outline-danger" id="test"
              >
                <i class="fa fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </li>
    `;
  }

  addFolderHTML() {
    /*Realizar instantaneamente al crear una nueva carpeta */
    document.getElementById("table").insertAdjacentHTML("beforeend", this.div);
  }

  addTask(newTaskContent) {
    const newTask = new Task(taskCount, newTaskContent);
    this.tasks.push(newTask);
  }

  deleteTask(deleteTask) {
    console.log("entro delete", deleteTask);
    let newArray = [];
    newArray = this.tasks.filter(
      (tasks) => tasks.id != deleteTask.id
    ); /* Filtra por id y saca la tarea no deseada */
    this.tasks = newArray; /* Se actualiza con las nuevas tareas */
  }

  switchFooterToCreateTaskUI() {
    console.log("entro");
    const newFooter = document.createElement("div");
    newFooter.innerHTML = `
      <div class="card-footer" id="task-footer-create-ui">
        <input type="text" id="new-folder-text" placeholder="New Task" class="footer-input">
        <button type="button" class="btn btn-primary" id="new-folder-button">
          Add Task
        </button>
      </div>
    `;

    document.getElementById("foolder-footer").appendChild(newFooter);
    //pintar la tarea seleccionada de otro color
  }
}

class Task {
  constructor(id, content) {
    this.id = id;
    this.content = content;
    this.div = document.createElement("div").innerHTML = `
      <li class="list-group-item" id="taskDiv${id}">
        <div class="widget-content p-0">
          <div class="widget-content-wrapper">
            <div class="widget-content-left mr-2">
              <div class="custom-checkbox custom-control">
              <input
                class="custom-control-input"
                id="exampleCustomCheckbox${id}" 
                type="checkbox"
              /><label
                class="custom-control-label"
                for="exampleCustomCheckbox${id}"
              ></label>
            </div>
            </div>
            <div class="widget-content-left">
              <div class="widget-heading" id="taskText${id}">
                ${content}
              </div>
              <div class="widget-subheading">
                <!-- <i>By CAMBIAR POR NOMBRE DE USUARIO</i> -->
              </div>
            </div>
            <div class="widget-content-right">
              <button class="border-0 btn btn-outline-success">
                <a id="editA${id}" onClick="switchFooter(${id})">Edit</a>
              </button>
              <button
                class="border-0 btn-transition btn btn-outline-danger"
              >
                <i class="fa fa-trash" id="trash${id}" onClick="deleteTask(${id})"></i>
              </button>
            </div>
          </div>
        </div>
      </li>
    `;
  }
  editContent(newContent) {
    this.content = newContent;
  }
}
