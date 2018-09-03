Promise.order = require('./index.js');
const order_arr = [];

const p_timeout = function(info, time){return new Promise(function(resolve, reject) {
    setTimeout(()=>{
        console.log(info);
        resolve(info);
    }, time);
});};

for(let i = 0; i < 3; i++){
    order_arr.push(()=>{
        return p_timeout(i, i * 1000);
    });
}

Promise.order(order_arr)
.then((data)=>{
    console.log(data);
});
