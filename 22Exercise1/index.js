let chances =99 ;
 let number=0;
let looper=0;
 number = Math.floor(Math.random()*101);
for( let i=0;i==looper; i++){
 let guess = prompt("guess the number :");
 guess=parseInt(guess);
 console.log(number)
 if (guess==number){
     console.log("right guess")
     looper--;
     console.log("chances you take " + chances)
 }
 else if (chances==1){
     console.log("you lost consumed all your chances the actual number is "+ number )
     looper--;
 }
    else{
        console.log("wrong guess")
        console.log("chances left " + chances)
        chances--;
        looper++;
        
    }
}
