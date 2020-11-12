const promise = new Promise((resolve,reject)=>{
    setTimeout(() => {resolve(Math.random())},1000);
});

promise.then((result)=>{
 console.log(result);
 return result;
});


fetch("https://jsonplaceholder.typicode.com/posts")
   .then((response)=>{
       return response.json();
   }).then((post)=>{
       console.log(post);
   }).catch((error)=>{
       console.log(error);
   });

function getPost(id){
    return Promise.resolve().then(()=>{
        const [userType,userId] = id.split("-");
        return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`).then((response)=>{
            response.json();
        })
    })
}

getPost("hh-1").then((post)=>{
    console.log(post);
}).catch(er=>{
    console.log(er);
})
