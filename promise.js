const taskFunc = (taskName, callbackFunc) => {
    console.log(`Task \"${taskName}\" has been finished!`);
    return new Promise((resolve, reject) => {
        if (taskName <= 0) {
            reject(`Whats that? Task \"${taskName}\" is invalid task, throw error!`);
        }
        
        resolve(taskName + 1);
    });
};

const arg = 1;

taskFunc(arg).then((taskName) => {
    console.log(`Task \"${taskName}\" has been finished!`);
    return (taskName + 1);
}).then((taskName) => {
    console.log(`Task \"${taskName}\" has been finished!`);
    return (taskName + 1);
}).then((taskName) => {
    console.log(`Task \"${taskName}\" has been finished, wow more than 3 times called!`);
    return (taskName + 1);
}).then((taskName) => {
    console.log(`Task \"${taskName}\" has been finished!`);
    return (taskName + 1);
}).catch((err) => {
    console.log(`in catch(err) : \"${err}\"`);
}).then(() => {
    console.log("It works anytime!");
});