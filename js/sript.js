var inputData = document.querySelector('input[type="text"]');
var ulSpisok = document.getElementById('list');
var spans = document.getElementsByTagName('span');
var saveBtn = document.getElementById('save');
var clearBtn = document.getElementById('clear');

 var day=new Array("Воскресенье","Понедельник","Вторник",
 "Среда","Четверг","Пятница","Суббота");
 var month=new Array("января","февраля","марта","апреля","мая","июня",
 "июля","августа","сентября","октября","ноября","декабря");

 var date = new Date();

inputData.addEventListener("keypress", function (keyPressed) {
    
if(keyPressed.which === 13) {
    var newLi = document.createElement('li');
    var newSpan = document.createElement('span'); 
    var newDate = document.createElement('span');
        
        newSpan.innerHTML = 'Delete    '; //как сделать пробел
        newDate.innerHTML = (day[date.getDay()]+" " +date.getDate()+ " " + month[date.getMonth()]
					 + " " + date.getFullYear() + " г.");

    var newTodo = this.value;
     this.value = '';

    ulSpisok.appendChild(newLi).append(newSpan, newTodo, newDate); 
 
    deleteTodo();
    }

});



 function deleteTodo(){
    for (let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.preventDefault();
        })
    }

 };


saveBtn.addEventListener('click', function(){
//  document.write(newTodo.strike()); как перечеркнуть не могу понять

 localStorage.setItem('todoApplication', ulSpisok.innerHTML);

});

clearBtn.addEventListener('click', function(){
    ulSpisok.innerHTML = '';
   localStorage.setItem('todoApplication', ulSpisok.innerHTML);
});

deleteTodo();

loadTodo();




 