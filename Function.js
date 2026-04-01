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