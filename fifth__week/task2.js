function http(){
    return{

        get(url,callback){
            try{
                const xhr = new XMLHttpRequest();
                xhr.open('GET',url);
                xhr.addEventListener("load",()=>{
                    if(Math.floor(xhr.status/100)!==2){
                        callback(`Error ${xhr.status}`, xhr)
                    }
                    else{
                    const response = JSON.parse(xhr.responseText);
                    callback(null,response);
                    }
                })
            
                xhr.addEventListener("error",()=>{
                    callback(`Error ${xhr.status}`, xhr)
                });
                xhr.send();

            }catch(err){
                callback(err);
            }
        },
        post(url,body,headers,callback){
            try{
                const xhr = new XMLHttpRequest();
                xhr.open('GET',url);
                xhr.addEventListener("load",()=>{
                    if(Math.floor(xhr.status/100)!==2){
                        callback(`Error ${xhr.status}`, xhr)
                    }
                    else{
                    const response = JSON.parse(xhr.responseText);
                    callback(null,response);
                    }
                })
            
                xhr.addEventListener("error",()=>{
                    callback(`Error ${xhr.status}`, xhr)
                });

                if(headers){
                    Object.entries(headers).forEach(([key,value])=>{
                        xhr.setRequestHeader(key,value);
                    })
                }
                xhr.send(JSON.stringify(body));

            }catch(err){
                callback(err);
            }
        },
    }
}

const httpReq = http();

