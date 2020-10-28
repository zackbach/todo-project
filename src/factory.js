const Factory = (() => {
    const taskFactory = () => {
        let name = "" 
        let desc = ""
        let date = ""
        return {name, desc, date};
    }

    const projFactory = () => {
        let name = ""
        let tasks = []
        return {name, tasks};
    }

    return {taskFactory, projFactory};
})();

export { Factory }