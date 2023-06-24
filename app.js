//object literal
//key, value 
/*const user={
    firstname:'wiem',
    lastname:'moussi',
    age:'21',
    fullName:function(){
        return ` ${user.firstname} ${user.lastname}`
    }
}
console.log(user.fullName());
const p = document.querySelector('.p1');
p.innerHTML=`Hello, my name is ${user.fullName()}  and I am ${user.age} years old.`;
p.style.color='red';
*/

let users=[
    
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
              "lat": "-43.9509",
              "lng": "-34.4618"
            }
          },
          "phone": "010-692-6593 x09125",
          "website": "anastasia.net",
          "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
          }
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
          "username": "Samantha",
          "email": "Nathan@yesenia.net",
          "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
              "lat": "-68.6102",
              "lng": "-47.0653"
            }
          },
          "phone": "1-463-123-4447",
          "website": "ramiro.info",
          "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
          }
        },
        {
          "id": 4,
          "name": "Patricia Lebsack",
          "username": "Karianne",
          "email": "Julianne.OConner@kory.org",
          "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
              "lat": "29.4572",
              "lng": "-164.2990"
            }
          },
          "phone": "493-170-9623 x156",
          "website": "kale.biz",
          "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
          }
        },
        {
          "id": 5,
          "name": "Chelsey Dietrich",
          "username": "Kamren",
          "email": "Lucio_Hettinger@annie.ca",
          "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
              "lat": "-31.8129",
              "lng": "62.5342"
            }
          },
          "phone": "(254)954-1289",
          "website": "demarco.info",
          "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
          }
        },
        {
          "id": 6,
          "name": "Mrs. Dennis Schulist",
          "username": "Leopoldo_Corkery",
          "email": "Karley_Dach@jasper.info",
          "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
              "lat": "-71.4197",
              "lng": "71.7478"
            }
          },
          "phone": "1-477-935-8478 x6430",
          "website": "ola.org",
          "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
          }
        },
        {
          "id": 7,
          "name": "Kurtis Weissnat",
          "username": "Elwyn.Skiles",
          "email": "Telly.Hoeger@billy.biz",
          "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
              "lat": "24.8918",
              "lng": "21.8984"
            }
          },
          "phone": "210.067.6132",
          "website": "elvis.io",
          "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
          }
        },
        {
          "id": 8,
          "name": "Nicholas Runolfsdottir V",
          "username": "Maxime_Nienow",
          "email": "Sherwood@rosamond.me",
          "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
              "lat": "-14.3990",
              "lng": "-120.7677"
            }
          },
          "phone": "586.493.6943 x140",
          "website": "jacynthe.com",
          "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
          }
        },
        {
          "id": 9,
          "name": "Glenna Reichert",
          "username": "Delphine",
          "email": "Chaim_McDermott@dana.io",
          "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
              "lat": "24.6463",
              "lng": "-168.8889"
            }
          },
          "phone": "(775)976-6794 x41206",
          "website": "conrad.com",
          "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
          }
        },
        {
          "id": 10,
          "name": "Clementina DuBuque",
          "username": "Moriah.Stanton",
          "email": "Rey.Padberg@karina.biz",
          "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
              "lat": "-38.2386",
              "lng": "57.2232"
            }
          },
          "phone": "024-648-3804",
          "website": "ambrose.net",
          "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
          }
        }
      
];
const tbody = document.querySelector(".list");
users.forEach(element=>{
    
    const node1 = document.createElement("td");
    const text1 = document.createTextNode(element.id);
    node1.appendChild(text1);
    
    const node2 = document.createElement("td");
    const text2 = document.createTextNode(element.name);
    node2.appendChild(text2);

    const node3 = document.createElement("td");
    const text3 = document.createTextNode(element.username);
    node3.appendChild(text3);

    const node4 = document.createElement("td");
    const text4 = document.createTextNode(element.email);
    node4.appendChild(text4);

    const node5 = document.createElement("td");
    const text5 = document.createTextNode(`${element.address.street} ${element.address.zipcode}, ${element.address.city}`);
    node5.appendChild(text5);

    const node6 = document.createElement("td");
    const text6 = document.createTextNode(element.phone);
    node6.appendChild(text6);

    const node7 = document.createElement("td");
    const text7 = document.createTextNode(element.website);
    node7.appendChild(text7);

    const node8 = document.createElement("td");
    const text8 = document.createTextNode(element.company.name);
    node8.appendChild(text8);
   
    const trNode =document.createElement("tr")
    trNode.appendChild(node1);
    trNode.appendChild(node2);
    trNode.appendChild(node3);
    trNode.appendChild(node4);
    trNode.appendChild(node5);
    trNode.appendChild(node6);
    trNode.appendChild(node7);
    trNode.appendChild(node8);

    tbody.appendChild(trNode);
});




let bouton=document.querySelector("#btn");

bouton.addEventListener('click',function(){
  let filtre=document.querySelector("#txt").value;
  console.log(typeof(filtre));
  let check1=document.querySelector('#c1');
  let check2=document.querySelector('#c2');
  let check3=document.querySelector('#c3');
  let check4=document.querySelector('#c4');
  let check5=document.querySelector('#c5');
  let check6=document.querySelector('#c6');
  let check7=document.querySelector('#c7');
  let check8=document.querySelector('#c8');
  if(check1.checked==true)
  {
    let resultat=users.filter((element)=>{
      return element.id===parseInt(filtre); 
    })   
    console.log(resultat);
    tbody.innerHTML="";
    
    resultat.forEach(element=>{
        
      const node1 = document.createElement("td");
      const text1 = document.createTextNode(element.id);
      node1.appendChild(text1);
    
      const node2 = document.createElement("td");
      const text2 = document.createTextNode(element.name);
      node2.appendChild(text2);
  
      const node3 = document.createElement("td");
      const text3 = document.createTextNode(element.username);
      node3.appendChild(text3);
  
      const node4 = document.createElement("td");
      const text4 = document.createTextNode(element.email);
      node4.appendChild(text4);
  
      const node5 = document.createElement("td");
      const text5 = document.createTextNode(`${element.address.street} ${element.address.zipcode}, ${element.address.city}`);
      node5.appendChild(text5);
  
      const node6 = document.createElement("td");
      const text6 = document.createTextNode(element.phone);
      node6.appendChild(text6);
  
      const node7 = document.createElement("td");
      const text7 = document.createTextNode(element.website);
      node7.appendChild(text7);
  
      const node8 = document.createElement("td");
      const text8 = document.createTextNode(element.company.name);
      node8.appendChild(text8);
     
      const trNode =document.createElement("tr")
      trNode.appendChild(node1);
      trNode.appendChild(node2);
      trNode.appendChild(node3);
      trNode.appendChild(node4);
      trNode.appendChild(node5);
      trNode.appendChild(node6);
      trNode.appendChild(node7);
      trNode.appendChild(node8);
  
      tbody.appendChild(trNode);
      } 
    )
  }
  if(check2.checked==true)
  {
    let resultat=users.filter((element)=>{
      return element.name.toUpperCase().includes(filtre.toUpperCase()); 
    })   
    console.log(resultat);
    tbody.innerHTML="";
    
    resultat.forEach(element=>{
        
      const node1 = document.createElement("td");
      const text1 = document.createTextNode(element.id);
      node1.appendChild(text1);
    
      const node2 = document.createElement("td");
      const text2 = document.createTextNode(element.name);
      node2.appendChild(text2);
  
      const node3 = document.createElement("td");
      const text3 = document.createTextNode(element.username);
      node3.appendChild(text3);
  
      const node4 = document.createElement("td");
      const text4 = document.createTextNode(element.email);
      node4.appendChild(text4);
  
      const node5 = document.createElement("td");
      const text5 = document.createTextNode(`${element.address.street} ${element.address.zipcode}, ${element.address.city}`);
      node5.appendChild(text5);
  
      const node6 = document.createElement("td");
      const text6 = document.createTextNode(element.phone);
      node6.appendChild(text6);
  
      const node7 = document.createElement("td");
      const text7 = document.createTextNode(element.website);
      node7.appendChild(text7);
  
      const node8 = document.createElement("td");
      const text8 = document.createTextNode(element.company.name);
      node8.appendChild(text8);
     
      const trNode =document.createElement("tr")
      trNode.appendChild(node1);
      trNode.appendChild(node2);
      trNode.appendChild(node3);
      trNode.appendChild(node4);
      trNode.appendChild(node5);
      trNode.appendChild(node6);
      trNode.appendChild(node7);
      trNode.appendChild(node8);
  
      tbody.appendChild(trNode);
      } 
    )
  }
  else if(check3.checked==true)
  {
    let resultat=users.filter((element)=>{
      return element.username.toUpperCase().includes(filtre.toUpperCase()); 
    })   
    console.log(resultat);
    tbody.innerHTML="";
    
    resultat.forEach(element=>{
        
      const node1 = document.createElement("td");
      const text1 = document.createTextNode(element.id);
      node1.appendChild(text1);
    
      const node2 = document.createElement("td");
      const text2 = document.createTextNode(element.name);
      node2.appendChild(text2);
  
      const node3 = document.createElement("td");
      const text3 = document.createTextNode(element.username);
      node3.appendChild(text3);
  
      const node4 = document.createElement("td");
      const text4 = document.createTextNode(element.email);
      node4.appendChild(text4);
  
      const node5 = document.createElement("td");
      const text5 = document.createTextNode(`${element.address.street} ${element.address.zipcode}, ${element.address.city}`);
      node5.appendChild(text5);
  
      const node6 = document.createElement("td");
      const text6 = document.createTextNode(element.phone);
      node6.appendChild(text6);
  
      const node7 = document.createElement("td");
      const text7 = document.createTextNode(element.website);
      node7.appendChild(text7);
  
      const node8 = document.createElement("td");
      const text8 = document.createTextNode(element.company.name);
      node8.appendChild(text8);
     
      const trNode =document.createElement("tr")
      trNode.appendChild(node1);
      trNode.appendChild(node2);
      trNode.appendChild(node3);
      trNode.appendChild(node4);
      trNode.appendChild(node5);
      trNode.appendChild(node6);
      trNode.appendChild(node7);
      trNode.appendChild(node8);
  
      tbody.appendChild(trNode);
      } 
    )
  }
  else if(check4.checked==true)
  {
    let resultat=users.filter((element)=>{
      return element.email.toUpperCase().includes(filtre.toUpperCase()); 
    })   
    console.log(resultat);
    tbody.innerHTML="";
    
    resultat.forEach(element=>{
        
      const node1 = document.createElement("td");
      const text1 = document.createTextNode(element.id);
      node1.appendChild(text1);
    
      const node2 = document.createElement("td");
      const text2 = document.createTextNode(element.name);
      node2.appendChild(text2);
  
      const node3 = document.createElement("td");
      const text3 = document.createTextNode(element.username);
      node3.appendChild(text3);
  
      const node4 = document.createElement("td");
      const text4 = document.createTextNode(element.email);
      node4.appendChild(text4);
  
      const node5 = document.createElement("td");
      const text5 = document.createTextNode(`${element.address.street} ${element.address.zipcode}, ${element.address.city}`);
      node5.appendChild(text5);
  
      const node6 = document.createElement("td");
      const text6 = document.createTextNode(element.phone);
      node6.appendChild(text6);
  
      const node7 = document.createElement("td");
      const text7 = document.createTextNode(element.website);
      node7.appendChild(text7);
  
      const node8 = document.createElement("td");
      const text8 = document.createTextNode(element.company.name);
      node8.appendChild(text8);
     
      const trNode =document.createElement("tr")
      trNode.appendChild(node1);
      trNode.appendChild(node2);
      trNode.appendChild(node3);
      trNode.appendChild(node4);
      trNode.appendChild(node5);
      trNode.appendChild(node6);
      trNode.appendChild(node7);
      trNode.appendChild(node8);
  
      tbody.appendChild(trNode);
      } 
    )
  }
  else if(check5.checked==true)
  {
    let resultat=users.filter((element)=>{
      return `${element.address.street} ${element.address.zipcode}, ${element.address.city}`.toUpperCase().includes(filtre.toUpperCase()); 
    })   
    console.log(resultat);
    tbody.innerHTML="";
    
    resultat.forEach(element=>{
        
      const node1 = document.createElement("td");
      const text1 = document.createTextNode(element.id);
      node1.appendChild(text1);
    
      const node2 = document.createElement("td");
      const text2 = document.createTextNode(element.name);
      node2.appendChild(text2);
  
      const node3 = document.createElement("td");
      const text3 = document.createTextNode(element.username);
      node3.appendChild(text3);
  
      const node4 = document.createElement("td");
      const text4 = document.createTextNode(element.email);
      node4.appendChild(text4);
  
      const node5 = document.createElement("td");
      const text5 = document.createTextNode(`${element.address.street} ${element.address.zipcode}, ${element.address.city}`);
      node5.appendChild(text5);
  
      const node6 = document.createElement("td");
      const text6 = document.createTextNode(element.phone);
      node6.appendChild(text6);
  
      const node7 = document.createElement("td");
      const text7 = document.createTextNode(element.website);
      node7.appendChild(text7);
  
      const node8 = document.createElement("td");
      const text8 = document.createTextNode(element.company.name);
      node8.appendChild(text8);
     
      const trNode =document.createElement("tr")
      trNode.appendChild(node1);
      trNode.appendChild(node2);
      trNode.appendChild(node3);
      trNode.appendChild(node4);
      trNode.appendChild(node5);
      trNode.appendChild(node6);
      trNode.appendChild(node7);
      trNode.appendChild(node8);
  
      tbody.appendChild(trNode);
      } 
    )
  }
  else if(check6.checked==true)
  {
    let resultat=users.filter((element)=>{
      return element.phone.includes(parseInt(filtre)); 
    })   
    console.log(resultat);
    tbody.innerHTML="";
    
    resultat.forEach(element=>{
        
      const node1 = document.createElement("td");
      const text1 = document.createTextNode(element.id);
      node1.appendChild(text1);
    
      const node2 = document.createElement("td");
      const text2 = document.createTextNode(element.name);
      node2.appendChild(text2);
  
      const node3 = document.createElement("td");
      const text3 = document.createTextNode(element.username);
      node3.appendChild(text3);
  
      const node4 = document.createElement("td");
      const text4 = document.createTextNode(element.email);
      node4.appendChild(text4);
  
      const node5 = document.createElement("td");
      const text5 = document.createTextNode(`${element.address.street} ${element.address.zipcode}, ${element.address.city}`);
      node5.appendChild(text5);
  
      const node6 = document.createElement("td");
      const text6 = document.createTextNode(element.phone);
      node6.appendChild(text6);
  
      const node7 = document.createElement("td");
      const text7 = document.createTextNode(element.website);
      node7.appendChild(text7);
  
      const node8 = document.createElement("td");
      const text8 = document.createTextNode(element.company.name);
      node8.appendChild(text8);
     
      const trNode =document.createElement("tr")
      trNode.appendChild(node1);
      trNode.appendChild(node2);
      trNode.appendChild(node3);
      trNode.appendChild(node4);
      trNode.appendChild(node5);
      trNode.appendChild(node6);
      trNode.appendChild(node7);
      trNode.appendChild(node8);
  
      tbody.appendChild(trNode);
      } 
    )
  }
  else if(check7.checked==true)
  {
    let resultat=users.filter((element)=>{
      return element.website.toUpperCase().includes(filtre.toUpperCase()); 
    })   
    console.log(resultat);
    tbody.innerHTML="";
    
    resultat.forEach(element=>{
        
      const node1 = document.createElement("td");
      const text1 = document.createTextNode(element.id);
      node1.appendChild(text1);
    
      const node2 = document.createElement("td");
      const text2 = document.createTextNode(element.name);
      node2.appendChild(text2);
  
      const node3 = document.createElement("td");
      const text3 = document.createTextNode(element.username);
      node3.appendChild(text3);
  
      const node4 = document.createElement("td");
      const text4 = document.createTextNode(element.email);
      node4.appendChild(text4);
  
      const node5 = document.createElement("td");
      const text5 = document.createTextNode(`${element.address.street} ${element.address.zipcode}, ${element.address.city}`);
      node5.appendChild(text5);
  
      const node6 = document.createElement("td");
      const text6 = document.createTextNode(element.phone);
      node6.appendChild(text6);
  
      const node7 = document.createElement("td");
      const text7 = document.createTextNode(element.website);
      node7.appendChild(text7);
  
      const node8 = document.createElement("td");
      const text8 = document.createTextNode(element.company.name);
      node8.appendChild(text8);
     
      const trNode =document.createElement("tr")
      trNode.appendChild(node1);
      trNode.appendChild(node2);
      trNode.appendChild(node3);
      trNode.appendChild(node4);
      trNode.appendChild(node5);
      trNode.appendChild(node6);
      trNode.appendChild(node7);
      trNode.appendChild(node8);
  
      tbody.appendChild(trNode);
      } 
    )
  }
  else if(check8.checked==true)
  {
    let resultat=users.filter((element)=>{
      return element.company.toUpperCase().includes(filtre.toUpperCase()); 
    })   
    console.log(resultat);
    tbody.innerHTML="";
    
    resultat.forEach(element=>{
        
      const node1 = document.createElement("td");
      const text1 = document.createTextNode(element.id);
      node1.appendChild(text1);
    
      const node2 = document.createElement("td");
      const text2 = document.createTextNode(element.name);
      node2.appendChild(text2);
  
      const node3 = document.createElement("td");
      const text3 = document.createTextNode(element.username);
      node3.appendChild(text3);
  
      const node4 = document.createElement("td");
      const text4 = document.createTextNode(element.email);
      node4.appendChild(text4);
  
      const node5 = document.createElement("td");
      const text5 = document.createTextNode(`${element.address.street} ${element.address.zipcode}, ${element.address.city}`);
      node5.appendChild(text5);
  
      const node6 = document.createElement("td");
      const text6 = document.createTextNode(element.phone);
      node6.appendChild(text6);
  
      const node7 = document.createElement("td");
      const text7 = document.createTextNode(element.website);
      node7.appendChild(text7);
  
      const node8 = document.createElement("td");
      const text8 = document.createTextNode(element.company.name);
      node8.appendChild(text8);
     
      const trNode =document.createElement("tr")
      trNode.appendChild(node1);
      trNode.appendChild(node2);
      trNode.appendChild(node3);
      trNode.appendChild(node4);
      trNode.appendChild(node5);
      trNode.appendChild(node6);
      trNode.appendChild(node7);
      trNode.appendChild(node8);
  
      tbody.appendChild(trNode);
      } 
    )
  }
  else
  {
    console.log('rien a afficher');
  }
});
    
    

  

 