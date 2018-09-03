/**
 * Run promise in order like promise-queue
 * @param  Array queue [fn1, fn2, fn3...]
 * @return Promise
 */
const order = function(queue){return new Promise(function(resolve, reject) {
    const data_arr = [];
    const execute = function(queue){
        if(queue.length){
            const fn = queue.shift();
            fn().then((data)=>{
                data_arr.push(data);
                execute(queue);
            }).catch((origin_error)=>{
                const err = new Error([
                    `Error occurred during execurion of Promise.order At index ${data_arr.length}.`,
                    'Get the succeed data from err.order_data.',
                    'Get the original error from err.origin_error.'
                ].join('\n'));
                err.order_data = data_arr;
                err.origin_error = origin_error;
                reject(err);
            });
        }else{
            resolve(data_arr);
        }
    };
    execute(queue);
});};

module.exports = order;
