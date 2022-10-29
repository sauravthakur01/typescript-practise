const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')! ;

const numResult: Array<number> = [];  ////generic type
// const numResult: number[] = [];
const textResults: string[] = [];

type numberOrString = number | string
type Result =  {val: number ; timestamp: Date}

interface resultObj{
    val: number ; timestamp: Date
}

function sum (num1:numberOrString , num2:numberOrString){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2 ;
    }else if( typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 + ' '+ num2 ;
    }
    return +num1 + +num2 ;
    
}

function  printResult(resultObj : Result ){
    console.log(resultObj.val)
}

buttonElement.addEventListener('click' , ()=>{
    const num1 = num1Element.value ; /// these give us string
    const num2 = num2Element.value ;
    const result = sum(+num1 , +num2) ;
    const Stringresult = sum(num1 , num2) ;
    // console.log(result);
    // console.log(Stringresult);

    numResult.push(result as number);
    textResults.push(Stringresult as string);

    console.log(numResult , textResults)
    printResult({val: result as number , timestamp: new Date()})
})

const myPromise = new Promise<String> ((resolve , reject)=>{
    setTimeout(()=>{
        resolve("what'siup")
    },1000)
})

myPromise.then(result=>{
    console.log(result.split('i'))
})
