let obj={
    name:"yinghan",
    arr:[{
        test:"1",
        date:()=>{
            console.log("haha");
        }
    },{
        test:"2"
    }],
    age:18
};
let objTmp1=Object.assign({},obj);
objTmp1.arr[0].age=19;
objTmp1.name="wentao";

let objTmp2={
    ...obj
};
objTmp2.arr[0].age=20;

let objTmp3=JSON.parse(JSON.stringify(obj));
objTmp3.arr[0].age=21;
//console.log(obj);

function deepCopy(obj) {
    let objTmp=Array.isArray(obj) ? []:{};
    if(obj && typeof obj === "object"){
        for(let i in obj){
            let prop=obj[i];
            if(obj.hasOwnProperty(i)){
                if(prop && typeof prop == "object"){
                    objTmp[i]=deepCopy(prop);
                    //arguments.callee调用函数本身，在es5后被弃用
                    //objTmp[i]=arguments.callee(prop);
                }else {
                    objTmp[i]=prop;
                }
            }
        }
    }
    return objTmp;
}
let obj2={
  a:{}
};
let objTmp4=deepCopy(obj2);
//objTmp4.arr[0].age=22;
console.log(objTmp4);
