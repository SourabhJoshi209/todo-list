console.log("hello")
var userInput=document.getElementById('todo-input');
var list=document.getElementById('todo-list');
var btn=document.getElementById('add-item');



var currentValue="";
userInput.addEventListener('input',function(e){
    
        currentValue=e.target.value;
  
})


function createNewNode(){
    var newListItem=document.createElement('li');
  
    var textElement=document.createTextNode(currentValue);
    newListItem.appendChild(textElement);
    newListItem.id='item' +(list.childElementCount+1);
    var mySpan=document.createElement('span');
    mySpan.innerText= "x";
    newListItem.appendChild(mySpan);
    
   
  // console.log(mySpan)
}
   




function addListItem(){
    if(userInput.value !==""){
    
    var newListItem=document.createElement('li');
    
    var textElement=document.createTextNode(currentValue);
    newListItem.appendChild(textElement);
    newListItem.id='item' +(list.childElementCount+1);
    console.log(list.childElementCount)
    
    list.appendChild(newListItem);
    
    var mySpan=document.createElement('span');
    mySpan.innerText= "x";
    newListItem.appendChild(mySpan);
    
   
    console.log(newListItem)
    userInput.value="";
    currentValue="";
    }
    else{
        alert("invalid input")
    }
    var btn2=document.querySelectorAll('span');
    for(let i=0;i<(list.childElementCount+1);i++){
    
        btn2[i].addEventListener('click',function(){
            //list.splice(i,1)
            btn2[i].parentElement.style.display="none";
           
        });
    }
   

   
}




userInput.addEventListener('keyup',function(e){
    if(e.keyCode===13){
        addListItem()
    }
    
});


btn.addEventListener('click',createNewNode);
btn.addEventListener('click',addListItem);
