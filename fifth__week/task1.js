
let button = document.querySelector("button");
let container = document.querySelector(".container");
let buttonPost = document.querySelector(".btn-danger");
let form = document.querySelector("form");

function getUser(callback){

    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/posts");
    xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        callback(response);
    });
    xhr.send();
}

function cardTemplate(post){
    const card = document.createElement("div");
    card.classList.add("card");
  
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.innerText = post.title;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body")

    const article = document.createElement("p");
    article.classList.add("card-text")
    article.innerText = post.body;


    cardBody.appendChild(title);
    cardBody.appendChild(article);
    card.appendChild(cardBody);
    return card;
}

function renderPost(response){
       const fragment = document.createDocumentFragment();
        response.forEach(post => {
          const card = cardTemplate(post);
          fragment.appendChild(card);
    });
    container.appendChild(fragment);
}

function createPost(body,cb){
    const xhr = new XMLHttpRequest();
    xhr.open("POST","https://jsonplaceholder.typicode.com/posts");
    xhr.addEventListener("load",()=>{
        const response = JSON.parse(xhr.responseText);
        cb(response);
    });

    xhr.setRequestHeader("Content-type",'application/json; charset=UTF-8');
    xhr.send(JSON.stringify(body));
}

button.addEventListener("click",()=>{
    getUser(renderPost);
});

buttonPost.addEventListener("click",()=>{
    const sendBody = objForm();
    createPost(sendBody,(response)=>{
     const card = cardTemplate(response);
     container.insertAdjacentElement("afterbegin",card);
    })
})

function objForm(){

    let title = form.querySelector("#name").value;
    let body = form.querySelector("#email").value;
    let id = form.querySelector("#user").value;
    let userId = form.querySelector("#number").value;

    return {
        title,
        body,
        id,
        userId,
    }
}






