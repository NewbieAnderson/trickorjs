const callbackFunc = () => {
    console.log("setTimeout() has been finished.");
};

console.log("Before Call setTimeout().");
setTimeout(callbackFunc, 5000);
console.log("Called first than setTimeout().");