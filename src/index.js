//this js file contains all of the button logic

import { logicController } from "./logicController"
import { DOMController } from "./DOMController"
import { Factory } from "./factory"

window.onclick = function(event) {
    if (event.target == document.getElementById("projModal") || 
    event.target == document.getElementById("taskModal")) {
        document.getElementById("projModal").style.display = "none";
        document.getElementById("taskModal").style.display = "none";
    }
}

document.getElementById("projButton").onclick = function() {
    document.getElementById("projModal").style.display = "block"; 
    document.getElementById("projTitle").value = "";
    
    logicController.projList.push(Factory.projFactory());
    logicController.currentProj.project = logicController.projList[logicController.projList.length - 1];
    logicController.currentProj.index = logicController.projList.length -1;
}

document.getElementById("taskButton").onclick = function() {
    document.getElementById("taskModal").style.display = "block";
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDesc").value = "";
    document.getElementById("taskDate").value = "";
    //creates a new task and updates
    logicController.currentProj.project.tasks.push(Factory.taskFactory());
    logicController.currentTask.task = logicController.currentProj.project.tasks[logicController.currentProj.project.tasks.length - 1];
    logicController.currentTask.index = logicController.currentProj.project.tasks.length - 1;
}

document.getElementById("projForm").onsubmit = function(event) {
    event.preventDefault();
    logicController.projSubmit();
    document.getElementById("projModal").style.display = "none";
};

document.getElementById("taskForm").onsubmit = function(event) {
    event.preventDefault();
    logicController.taskSubmit(logicController.currentProj.project);
    document.getElementById("taskModal").style.display = "none";
};

document.getElementById("projDel").onclick = function() {
    if (logicController.currentProj.index == 0) {
        alert("You cannot delete the default Tasks project");
    } else {
        logicController.projList.splice(logicController.currentProj.index, 1);
        DOMController.renderProj();
        logicController.currentProj = { project: logicController.projList[0], index: 0 };
        DOMController.renderTasks(logicController.currentProj.project);
    }
    document.getElementById("projModal").style.display = "none";
};

document.getElementById("taskDel").onclick = function() {
    logicController.projList[logicController.currentProj.index].tasks.splice(logicController.currentTask.index, 1);
    DOMController.renderTasks(logicController.currentProj.project);
    document.getElementById("taskModal").style.display = "none";
};

logicController.updateProj(logicController.currentProj.index, "Tasks");
DOMController.renderProj();
DOMController.renderTasks(logicController.currentProj.project);