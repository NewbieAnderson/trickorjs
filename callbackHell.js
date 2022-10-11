const taskA = (N, callback) => {
    console.log(`(N=${N}) Task A finished!`);
    callback(N + 1);
};

const taskB = (N, callback) => {
    console.log(`(N=${N}) Task B finished!`);
    callback(N + 1);
};

const taskC = (N, callback) => {
    console.log(`(N=${N}) Task C finished!`);
    callback(N + 1);
};

const taskD = (N, callback) => {
    console.log(`(N=${N}) Task D finished!`);
    callback(N + 1);
};

const taskE = (N) => {
    console.log(`(N=${N}) Task E finished!`);
};

taskA(1, (paramA) => {
    taskB(paramA, (paramB) => {
        taskC(paramB, (paramC) => {
            taskD(paramC, (paramD) => {
                taskE(paramD);
            });
        });
    });
});