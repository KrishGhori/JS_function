function printnumbers(num){
    console.log(num);
}
printnumbers(5);

let getmyname = (fristname,lastname) =>{
    let fullname = fristname+ " " +lastname;
    return fullname;
}  

let myname=getmyname("krish","ghori");
console.log(myname);
 
//object
let obj = {
    name:"krish",
    "full name":"hii hello", //if you are give to space on a object so that's write in a (" ")
    age:19,
    call : function(){
        console.log("hello, hanji numste!");
    }
};

console.log(obj);
obj.call();
// console.log(typeof(obj));

//Array
let brr = new Array(19,'K','R',19);
console.log(brr);

brr.push('hii');
console.log(brr);

brr.shift(); //left frist element is remove
console.log(brr);
brr.unshift("one"); // add the etement left end side
console.log(brr);

console.log(brr.slice(1,3)); //pickup this index value

brr.splice(0,2,'h'); //0 to 2 remove and left side add 'h'
console.log(brr);

let arra = [10,20,30,40];
console.log(arra);


arra.map((Number,index) => {
    console.log(Number);
    console.log(index);
});

let anss = arra.reduce((acc,curr) => {
    return acc + curr ;
},0);
console.log(anss);

let RR = [8,9,5,6,4,3,1,4,6,0];
RR.sort();
console.log(RR);
RR.reverse();
console.log(RR);

console.log(RR.indexOf(8));

let length = arra.length;
console.log("arra length is :",length);

//for each
arra.forEach((Value,index) => {
      console.log("value is :",Value,"index is :",index);
});


//for in
for(let key in obj){
    console.log(key,"",obj[key]);
}

//for of
for(let value of arra){
    console.log("vlaue",value);
}


const br = [
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    },
    function(a,b){
        return a/b;
    }
];
let rb = br[2];
let so = rb(6,3);
console.log(so);


class human{

    //properties
    age=19; //public
    #wt=58; //privte
    ht=170;

    constructor(newage,newht){
        this.age = newage;
        this.ht = newht;
    }

    //behaviour
    walking(){
        console.log("i am walking with rishva");
    }
    running(){
        console.log("i am running with vanshi");
    }
    get fathchwt(){   //get is ues for a fatch the privte properties
        return  this.#wt;
    }
    set modifywt(val){  //set is ues for a modify the privte properties
        this.#wt = val;
    }
}


let objs = new human("new age is:"+20,"   new ht is:"+173);
console.log(objs.age,objs.ht);

function hellomyname (fname,lname = fname.toUpperCase()){
    console.log("hello my name is:"+fname,lname);
}
hellomyname("rishva krishbhai ghori");


console.log(Math.PI);
console.log(Math.max(60,40,30,70,20,90));
console.log(Math.min(60,40,30,70,20,90));

let date = new Date();
console.log(date);

obj.colour = "white";
console.log(obj);


//cloning
let src ={
    age : 12,
    wt : 56,
    ht :170
};
let dest = {...src}; // cloning 



src.age=90;
console.log(src);
console.log(dest);

//assign
let srcs ={
    age : 12,
    wt : 56,
    ht :170
};
let det = Object.assign({},srcs);
srcs.age=90;
console.log("useing assign",srcs);
console.log("useing assign",det);


//error hendling 
try{
    //if there is any error then that's not run and goto catch
}
catch(error){
       // handel the error
}
finally{
    // every time run
}


// coustom error useing throw
// try{
//     console.log(abc);
// }
// catch(err){
//      throw new Error ("diclare the abc: ");
// }


//new example

// let errorcode = 100 ;
// if(errorcode==100){
//     throw new Error ("invalid jsun");
// }

// syntex = <event-target>.addEventListener('event-type',function-action)


function changeText(event){
    console.log(event);
    let fpara2 = document.getElementById('fpara2');
    fpara2.textContent = "hello ji"
}

 let fpara2 = document.getElementById('fpara2');
fpara2.addEventListener('click', changeText);

// let anchorElement = document.getElementById('fanchor');
// anchorElement.addEventListener('click', function(event){
//      event.preventDefault();
//      anchorElement.textContent = "ohk"
// });