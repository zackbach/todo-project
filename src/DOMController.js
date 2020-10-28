import { logicController } from "./logicController"

const DOMController = (() => {

    const renderProj = () => {
        document.getElementById("projects").innerHTML = "";
        for (let i = 0; i<logicController.projList.length; i++) {
            let proj = document.createElement('div');

            let name = document.createElement("h3");
            name.textContent = logicController.projList[i].name;
            name.addEventListener("click", function(){
                logicController.currentProj.project = logicController.projList[i];
                logicController.currentProj.index = i;
                renderTasks(logicController.currentProj.project);
            });
            proj.appendChild(name);

            let edit = document.createElement("button");
            edit.textContent = "Edit";
            edit.onclick = function() {
                document.getElementById("projModal").style.display = "block";
                document.getElementById("projTitle").value = logicController.projList[i].name;
                logicController.currentProj.name = logicController.projList[i].name;
                logicController.currentProj.index = i;
            }
            proj.appendChild(edit);

            document.getElementById("projects").appendChild(proj);
        }
    }

    const renderTasks = (currentProj) => {
        document.getElementById("projectHeader").innerHTML = currentProj.name;
        document.getElementById("content").innerHTML = "";
        
        for (let i = 0; i<currentProj.tasks.length; i++) {
            let task = document.createElement('div');
            
            let name = document.createElement("h4");
            name.textContent = currentProj.tasks[i].name;
            task.appendChild(name);

            let desc = document.createElement("p");
            desc.textContent = currentProj.tasks[i].desc;
            task.appendChild(desc);

            let date = document.createElement("p");
            date.textContent = currentProj.tasks[i].date;
            task.appendChild(date);

            let edit = document.createElement("button");
            edit.textContent = "Edit";
            edit.onclick = function() {
                document.getElementById("taskModal").style.display = "block";
            }
            task.appendChild(edit);

            document.getElementById("content").appendChild(task);
        }
    }

    return {renderProj, renderTasks}
})();

export { DOMController }