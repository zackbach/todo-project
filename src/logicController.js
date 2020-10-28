import { Factory } from "./factory"
import { DOMController } from "./DOMController"

const logicController = (() => {
    let defaultProj = Factory.projFactory();
    let projList = [defaultProj];
    let currentProj = { project: projList[0], index: 0 };
    let currentTask = {};

    const addTask = (currentProj, name, desc, date) => {
        let newTask = Factory.taskFactory(name, desc, date);
        currentProj.tasks.push(newTask);
    }

    const updateProj = (index, name) => {
        projList[index].name = name;
        currentProj.project = projList[index];
        DOMController.renderProj();
        DOMController.renderTasks(currentProj.project);
    }

    const projSubmit = () => {
        updateProj(currentProj.index, document.getElementById("projTitle").value);
    }

    const updateTask = (currentProj, currentTask, name, desc, date) => {
        currentProj.tasks[currentTask.index].name = name;
        currentProj.tasks[currentTask.index].desc = desc;
        currentProj.tasks[currentTask.index].date = date;
        DOMController.renderTasks(currentProj);
    }

    const taskSubmit = (currentProj) => {
        updateTask(currentProj, currentTask, document.getElementById("taskTitle").value, document.getElementById("taskDesc").value, document.getElementById("taskDate").value);
    }

    return {projList, addTask, updateProj, currentProj, projSubmit, currentTask, taskSubmit}

})();

export { logicController }