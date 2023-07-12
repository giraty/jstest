// process.stdout.write("#"); tanpa ganti garis

console.log("Judul");

let x, y;
let z = -5;

console.log("type of z is " + typeof(z));

for(y = 5; y >= 0; y--){

    for(x = -5; x <= 5; x++){
        if((y - x <= 5) && (x + y <=5) ){
            //process.stdout.write(`x is ${x}, y is ${y} `);
            process.stdout.write("#");
        }
        else{
            process.stdout.write(" ");
        }
        //process.stdout.write(`x is ${x}, y is ${y} `);
    }

    process.stdout.write("\n");
}
console.log("oi");