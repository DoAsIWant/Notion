const tasks = [
    {
      _id: '5d2ca9e2e03d40b326596aa7',
      completed: true,
      body:
        'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
      title: 'Eu ea incididunt sunt consectetur fugiat non.',
    },
    {
      _id: '5d2ca9e29c8a94095c1288e0',
      completed: false,
      body:
        'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
      title:
        'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
    },
    {
      _id: '5d2ca9e2e03d40b3232496aa7',
      completed: true,
      body:
        'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
      title: 'Eu ea incididunt sunt consectetur fugiat non.',
    },
    {
      _id: '5d2ca9e29c8a94095564788e0',
      completed: false,
      body:
        'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
      title:
        'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
    },
  ];
  
  (function(arrOfTasks) {
      const objOfTask = arrOfTasks.reduce((acc,task)=>{
      acc[task._id] = task;
      return acc;
      },{});
      
      // dom elements
      const listContainer = document.querySelector(".tasks-list-section .list-group");
      const form = document.forms["addTask"];
      const inputTitle = form.elements["title"];
      const inputBody = form.elements["body"];
      form.addEventListener("submit",submitForm)
      listContainer.addEventListener("click",onDeleteHandler);
      
      renderAllTasks(objOfTask);

      function renderAllTasks(taskList){
       if(!taskList){
           console.error("Передайте массив значений");
       }
        
        const fragment = document.createDocumentFragment();
        Object.values(taskList).forEach(element => {
            const li = listTemplate(element);
            fragment.appendChild(li);
            
        });
        listContainer.appendChild(fragment);
      }

      function listTemplate({_id,title,body}={}){
       const li = document.createElement("li");

       li.classList.add(
         "list-group-item",
         "d-flex", 
         "align-items-center", 
         "flex-wrap", 
          "mt-2");

        li.setAttribute("data-task-id",_id);
        
        const span = document.createElement("span");
        span.innerText = title;

        const p = document.createElement("p");
        p.classList.add("mt-2","w-100");
        p.innerText = body

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn","btn-danger","ml-auto","delete-btn");
        deleteBtn.textContent = "Delete Task";

        li.appendChild(span);
        li.appendChild(deleteBtn);
        li.appendChild(p);

        return li;
        
      }

      function submitForm(e){
      e.preventDefault();
      const titleValue = inputTitle.value;
      const bodyValue = inputBody.value;

      if(!titleValue || !bodyValue){
          alert("Введите title и body");
          return;
        }

        let task = createTask(titleValue,bodyValue);
        let listItem = listTemplate(task);
        listContainer.insertAdjacentElement("beforebegin",listItem);

      console.log(titleValue,bodyValue);
      }

      function createTask(title,body){
          let newTask ={
              title,
              body,
              completed:false,
              _id:`Task-${Math.random()}`,
          }

          objOfTask[newTask._id] = newTask

        return {...newTask};
      }

      function deleteTask(id){
        const{title} = objOfTask[id];
        const confirmed = confirm(`Удалить задачу ${title}`);
        if(confirmed === false)
          return confirmed;
          delete objOfTask[id];
        return confirmed;

      }

      function deleteFromHtml(el,confirmed){
        if(confirmed){
          el.remove();
        }
      }

      function onDeleteHandler(e){
        if(e.target.classList.contains("delete-btn")){
          let parent = e.target.closest("[data-task-id]");
          let id = parent.dataset.taskId;
          const isConfirm = deleteTask(id);
          deleteFromHtml(parent,isConfirm);
        }
      }

  })(tasks);
  