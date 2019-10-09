let name1= {
    first:"saravana",
    last:"kumar",
}
let name2= {
    first:"Rajesh",
    last:"Kl",
}
fullName=function(...friends){
    console.log( this.first+" "+this.last+" "+friends);
}
let friends=['arun','balu','cade']

Function.prototype.mybind=function(...x){
 let obj=this;
    r=x.slice(1)
    return function(...y){
        obj.apply(x[0],[...r,...y]);
 }
}
fullName.bind
fullName.apply(name1,);
f1=fullName.bind(name2,friends)
f1("hello")