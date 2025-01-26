function savetoDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}
savetoDb("apna college", () => {
    console.log("Sucess: your data was saved");
    savetoDb("hello", () => {
        console.log("success1: data1 saved");
    }, () => {
        console.log("failure1: week connection");
    });
},
    () => {
        console.log("Failure: weak connection. data not saved");
    });

    let url ="https://catfact.ninja/fact";
    fetch(url)
    .then((res) =>{
        console.log(res);
        res.json()
    })
    .catch((err) => {
        console.log("ERROR - ", err);
    });