// let value;
// do{
//     value =prompt("Enter a number");
//     console.log(value);
    
//     }while (value(isNaN||value ==='')){
//         console.log(`${value} is not a number`)
//     }

// 1.2
// const num1= 18;
// const num2=24;
// let GCD;
// for(let i =1; i<=num1 && i<=num2;i++){
//     if(num1 %i ===0 && num2%i===0){
//         GCD=i;
//     }

// }
// console.log(GCD);


// 1.3
// const num= 12;
// for(let i=1; i<=num;i++){
//     if(num%i===0){
//         console.log(i+'is a fator of ') +num;
//     }
// }
// 1.4
// let num=5;//prompt('Enter a number: ')4x4x4
// let power =3;// prompt ('Enter the power of that number you want to calculate')
// let res =1;
// for(let i=0; i<power;i++){
// res= res*num;
// }
// console.log(res);
// 1.5
// const num =4;
// let factorial =1;
// for(let i = 1; i<=num;i++){
//     factorial= factorial*1;

// }
// console.log(factorial);

// 1.6
// const  range =8;
// for(let i =1; i<=range;i++){
//     let str='';
//     for(let j=1;j<=i;j++){
//         str +=j+  '';
//     }
// console.log(str);
// }

// 1.7
// for(let i =100; i<=1000; i++){
//     if(!(i%3) && !(i%5)){
//         console.log(`${i} is divisible by 3 and 5`);
//     }

// }

1.8
for(let i=1; i<=10; i++){
    console.log('mult of : '+ i);
    for(let j=1; j<=10; j++){
        console.log(`${i}*${j}=${i*j}`);
    }

}