const myPromise = new Promise((resolve, reject) => {
    // Thực hiện tác vụ bất đồng bộ
    if (/* điều kiện thành công */) {
    resolve('Thành công!');
    } else {
    reje
    
});
myPromise.then((message) => {
    console.log('đã thực thi' + message);
}).catch((message) => {
    console.log('da thuc thi'+ message);
});