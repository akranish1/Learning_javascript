const URL="https://catfact.ninja/fact";
const fa=document.querySelector("#facts");
const bu=document.querySelector("#btn");


// const getData= async ()=>{
//     let response= await fetch(URL);
//     console.log(response);//JSON format type //AJAJ=Asynchronous js and json
//     let data= await response.json();
//     fa.innerText=data.fact;
// };


//with promises;
function getData(){
    fetch(URL)
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        fa.innerText=data.fact;
     })
}
bu.addEventListener('click',getData);


//RESPONSE & REQUEST:

// HTTP request methods
// HTTP defines a set of request methods to indicate the purpose of the request and what is expected if the request is successful.
// GET
// The GET method requests a representation of the specified resource. Requests using GET should only retrieve data and should not contain a request content.
// HEAD
// The HEAD method asks for a response identical to a GET request, but without a response body.
// POST
// The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.


// HTTP response codes
// HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:
// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)