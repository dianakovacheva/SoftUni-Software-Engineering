function speedInfo(km) {

    let speed = Number(km[0]);

    if(speed <= 10) {
        console.log("slow");
    } else if(speed > 10 && speed <= 50) {
        console.log("average");
    } else if(speed > 50 && speed <= 150) {
        console.log("fast");
    }else if(speed > 150 && speed <= 1000) {
        console.log("ultra fast");
    } else {
        console.log("extremely fast");
    }
}

speedInfo([549]);



/*
function writeHelloWorld(name){
    console.log(`Hello, ${name}!`);
}

console.log(typeof(writeHelloWorld('Diana')));
*/