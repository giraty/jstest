// process.stdout.write("#"); tanpa ganti garis

for(y = 5; y >= 0; y--){
    for(x = -5; x <= 5; x++){
        if((y - x <= 5) && (x + y <=5) ){
            //process.stdout.write(`x is ${x}, y is ${y} `);
            if(y % 2 == 0){
                if(Math.abs(x) % 2 == 0){
                    process.stdout.write(" ");
                }
                else{
                    process.stdout.write("#");
                }
            }
            else if(y % 2 == 1){
                if(Math.abs(x) % 2 == 1){
                    process.stdout.write(" ");
                } 
                else{
                    process.stdout.write("#");
                }
            }
        }
        else{
            process.stdout.write(" ");
        }
        //process.stdout.write(`x is ${x}, y is ${y} `);
    }
    process.stdout.write("\n");
}