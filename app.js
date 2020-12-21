//DIV TOGGLE
const toggleButton = document.querySelector('#toggleList');
const listDiv = document.querySelector('.list');


//ADD ITEM
const addItemInput = document.querySelector('.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

//Remove Item
const removeItemButton = document.querySelector('button.removeItemButton');

//Save Item
const saveItemButton = document.querySelector('button.saveItemButton')
  
const username = document.getElementById('name')
let stored=[]
let arr1=[]
let arr2=[]

toggleButton.textContent = 'Show list'
listDiv.style.display = 'none';

toggleButton.addEventListener('click', () => {
  let flag=false
  for(let i=0;i<arr1.length;i++)
   {
      if(arr1[i]===username.value)
        {
          listuser(arr2[i]) 
          flag=true
          break 
        }
    }
    
      if(flag===false && username.value !== ''){    
        if (listDiv.style.display == 'none') {
           listDiv.style.display = 'block'
           document.querySelector('ul').innerHTML=''
          toggleButton.textContent = 'Hide list';
      
         } else {
          listDiv.style.display = 'none';
          toggleButton.textContent = 'Show list';
         } 
      }  
  });



addItemButton.addEventListener('click', () => {
  let list = document.querySelector('ul');
  let div = document.createElement('div')
  
  if(stored.length<=4)
    {
    stored.push(addItemInput.value) 
    list.appendChild(div)
    div.textContent = addItemInput.value;
   }
});



removeItemButton.addEventListener('click', () => {
  let list = document.querySelector('ul');
  let div = document.querySelector('div:last-child');
  list.removeChild(div);
  stored.pop()
});

saveItemButton.addEventListener('click', () => {
   if(arr1.length<3 && arr2.length<3)
   {
     arr2.push(stored)
     arr1.push(username.value)
     stored=[]
     let list = document.querySelector('ul');
     toggleButton.textContent = 'Show list'   
   } 
   else{
     let msg = document.getElementById('id1')
     msg.textContent = "Can't Save Any More As Database Full"
   } 
   username.value=''
   listDiv.style.display = 'none'
   
});


listDiv.addEventListener('mouseover', (event) => {
  if(event.target.tagName == 'DIV') {
  event.target.style.textTransform = 'uppercase';
  }
});

listDiv.addEventListener('mouseout', (event) => {
  if(event.target.tagName == 'DIV') {
  event.target.style.textTransform = 'lowercase';
  }
});


function listuser(array){
  let list = document.querySelector('ul');
  list.innerHTML = ''
  listDiv.style.display = 'block'
  for(let i=0;i<array.length;i++)
  {
    let div = document.createElement('div')
    list.append(div)
    div.textContent = array[i]
  }
}

console.log(arr1,arr2)



