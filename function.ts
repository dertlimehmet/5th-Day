function add(a: number, b: number): number {
    return a + b;
}
console.log(add(1, 2));

let add_anonymous = function (a: number, b: number): number {
    return a + b;
}

add_anonymous(5, 6);

let add_anonymousType_2 = (a: number, b: number): number => { return a + b };
let add_anonymousType_3 = (a: number, b: number): number => a + b;
let add_anonymousType_4 = () => console.log("Boş Method");

function add2(...a: number[]) { //... sonra değişeken ismi = istediğin kadar değişken yollamaca
    var sum = 0;
    a.forEach(x => {
        sum += x;
    })
    return sum;
}

console.log(add2(2, 3, 4, 5, 6, 7));


function add3(x: number, y: number, ...a: number[]) { //... sonra değişeken ismi = istediğin kadar değişken yollamaca
    var sum = 0;
    a.forEach(x => {
        sum += x;
    })
    return sum;
}


//default parameters
function calculate(a:number,b:number,c:number=6){
    return a+b+c;
}

calculate(2,3);
calculate(2,4,15);