let api='https://the-trivia-api.com/api/questions';
let ask=Array.from(document.getElementsByClassName('question'))
let option=Array.from(document.getElementsByClassName('option'));
let categ= Array.from(document.getElementsByClassName('categ'));
let mark= Array.from(document.getElementsByClassName('mark'));
let indicater= Array.from(document.getElementsByClassName('indicater'));


let i=0;
let data=new Array();
let indicate=0;


option.forEach((e)=>{
    e.addEventListener('click',()=>{

          indicate=indicate+1;
          indicater[0].innerHTML=`${indicate}/${10}`
        i++;
        display();
        
        if(e.innerHTML===data[i].correctAnswer)
        {
            marks=marks+1;
        }
    })
})

tojson();
async function tojson() {
    let resp=await fetch(api);
    data=await resp.json();
  

    
   display()
   
}
let a=[0,1,2,3];
function display(){
    a= [...a].sort(()=>0.5-Math.random()).slice(0,4)
   
 
   categ[0].innerHTML=data[i].category
   ask[0].innerHTML=data[i].question
    option[a[0]].innerHTML=data[i].correctAnswer;
    option[a[1]].innerHTML=data[i].incorrectAnswers[0];
    option[a[2]].innerHTML=data[i].incorrectAnswers[1];
    option[a[3]].innerHTML=data[i].incorrectAnswers[2];
}
let marks=0;
function result(){
   
   mark[0].innerHTML=`Marks:${marks}`
}

function reset(){
    i=0;
    indicate=0;
    indicater[0].innerHTML=`${indicate}/${10}`
}

