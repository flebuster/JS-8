var inputData = document.querySelector('input[type="text"]');
var ulSpisok = document.getElementById('list');

inputData.addEventListener("keypress", function (keyPressed) {
if(keyPressed.which === 13) {
    var newLi = document.createElement('li');
    var newSpan = document.createElement('span');
    newSpan.innerHTML = 'Delete';
     var newTodo = this.value;
     this.value = '';
    ulSpisok.appendChild(newLi).append(newSpan, newTodo);
    
    }

});
