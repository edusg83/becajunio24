
//A
let array1 = [1, 2, 3, 4];

console.log(array1);

//B
array1.forEach(element => {
    switch (element) {
        case 1:
            console.log("UNO");
            break;
        case 2:
            console.log("DOS");
            break;
        case 3:
            console.log("TRES");
            break;
        case 4:
            console.log("CUATRO");
            break;
        default:
            break;
    }
});

//C
array1.push(3);

console.log(array1);

//D
for (let i = 0; i < 3; i++) {
    array1.pop();
}

console.log(array1);