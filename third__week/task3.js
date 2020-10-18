

/*

1. Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и 
 возвращает объект, содержащий первый аргумент и массив из остатка:

func(‘a’, ‘b’, ‘c’, ‘d’) → 
{
  first: ‘a’,
  other: [‘b’, ‘c’, ‘d’]
}


*/


function destruct(first, ...rest){
    return{
        firstA: first,
        restA: rest,
    }
}

let objArgs = destruct(1,7,9,1,"j");
console.log(objArgs);


/*

2. Организовать функцию getInfo, которая принимает объект вида
{ name: ...,  info: { employees: [...], partners: [ … ]  } }
и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

const organisation = {  
  name: 'Google',   
  info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing']   } 
};
getInfo(organisation); → 
Name: Google 
Partners: Microsoft Facebook


*/

const organisation = {  
    name: 'Google',   
    info: { employees: ["Vlad", "Olga"], partners: ['Microsoft', 'Facebook', 'Xing']   } 
  };

  function getInfo(
    {
      name = 'Unknow',
      info: { partners: [first = 'none', second = 'none'] = [] } = {}
    } = {}
  ) {
    console.log(`Name: ${name}`);
    console.log(`Partners: ${first}, ${second}`);
  }

getInfo(organisation);
