# promise-order
Run promise in order like promise-queue

# Usage
``` javascript
const order = require('./index.js');
// Can also:
// Promise.order = require('./index.js');

// fn should be Promise-fn.
order([fn1, fn2, fn3...])
.then((data_arr)=>{
    // handle data...
})
.catch((error)=>{
    // Get the succeed fn data
    const finished_arr = error.order_data;
    const real_error = error.origin_error;
    // handle error & data...
});
```
