const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for(const placeholder of placeholders) {
    //console.log(placeholder);
    placeholder.addEventListener('dragover', dragOver); // dragover событие - элемент находится над placeholder, куда можем поместить
    placeholder.addEventListener('dragenter', dragEnter); // заходим на територрию placeholder, где можем разместить элемент
    placeholder.addEventListener('dragleave', dragLeave); // вышли из зоны placeholder
    placeholder.addEventListener('drop',dragDrop);  // отпустили
}

function dragstart(event) {
    //console.log('drag start', event.target);
    event.target.classList.add('hold'); 
    setTimeout( () => event.target.classList.add('hidden'), 0);  
}

function dragend(event) {
   // console.log('drag end');
    event.target.classList.remove('hold', 'hidden');
}

function dragOver(event) {
   // console.log('drag over');
   event.preventDefault();
}

function dragEnter(event) {
    // console.log('drag enter');
    event.target.classList.add('hovered');
}

function dragLeave(event) {
   // console.log('drag leave');
    event.target.classList.remove('hovered');
}

function dragDrop(event) {
    // console.log('drag drop');
    event.target.append(item);
    event.target.classList.remove('hovered');
}