//Synchronous and Asynchronous 
function getData(data)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",data);
            resolve("Success");
        },2000);
    });
}

// callback hell
getData(1, () => {
  console.log("getting data2 ....");
  getData(2, () => {
    console.log("getting data3 .....");
    getData(3, () => {
      console.log("getting data4 .....");
      getData(4);
    });
  });
});
//It was complex and hard to understand. So, we move to promises


// Accessing using Promises:
getData(1).then((res)=>
{
    return getData(2);
}).then((res)=>
{
    return getData(3);
}).then((res)=>
{
    console.log(res);
});
//This is better than callback hell
//but Async-Await is better than Promise


//Accessing using async-await:
async function getAllData()
{
    await getData(1);
    await getData(2);
    await getData(3);
}

getAllData();