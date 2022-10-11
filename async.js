const someFuncMustCalledFirst = () => {
    let randomResult;
    console.log("someFuncMustCalledFirst() is start running.");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            randomResult = Math.floor(Math.random() * 100) + 1;
            console.log("someFuncMustCalledFirst() is finished.");
            resolve(randomResult);
        }, 3000);
    });
};

const someRoutine = async () => {
    const result1 = await someFuncMustCalledFirst();
    console.log(`result1 : ${result1}`);
    const result2 = await someFuncMustCalledFirst();
    console.log(`result2 : ${result2}`);
};

someRoutine();