function mtHttp(){
    return{
       async get(url){
        try{
          const responce = await fetch(url);
          return responce.json();
        }catch(err){
            return Promise.reject();
        }
        },


            post(url,data,...head){
                const responce = await fetch(url,{method:'POST', headers:head, body:JSON.stringify(data)})
                return await responce.json()
                   
            }
        }
        
}

const http = mtHttp();

http.get("fjfkj",(err,response)=>{
    if(err){
        return;
    }

    else{
        http.get("ffdf",(err,response)=>{
            if(err){
                return
            }
            else{
                http.het("ffdfdf",(err,responce)=>{
                    console.log(responce);
                })
            }
        })
    }
})

function getPosts(){
    return new Promise((resolve,reject)=>{
        mtHttp("fifjdfh",(err,res)=>{
            if(err){
                reject();
            }
            else{
                resolve(res)
            }
        })
    })
}

function getComents(){
    return new Promise((resolve,reject)=>{
        mtHttp("hkdfhufb",(err,res)=>{
            if(err){
            reject();
            }
            else{
                resolve(res);
            }
        })
    })
}

getPosts().
then(post=>getComents()).
then(comments=>console.log(comments)).
catch(err=>{
    console.log(err);
}).finally(()=>console.log("finally"));

const all = Promise.all([
    getPosts, getComents
])