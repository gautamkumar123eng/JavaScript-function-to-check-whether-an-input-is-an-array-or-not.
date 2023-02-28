let a = [1,2];
let o = "object";
let checking = () => {
    let ans = typeof(a);
    if(ans == o){
        console.log(`it is a array`);
    }else{
        console.log(`it is not a array`);
    }
};
checking();