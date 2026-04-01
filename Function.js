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