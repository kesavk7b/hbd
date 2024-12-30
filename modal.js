cover = document.getElementById('letter_cover');
modal = document.getElementById('letter_modal');
modal_content = document.getElementById('letter_content');
 function openModal(){
    modal.style.display = 'flex';
    modal_content.innerHTML = modal_content.innerHTML.replace(/#/g,'❤️')
    modal_content.innerHTML = modal_content.innerHTML.replace(/@/g,'💖')
    
}
 function closeModal(){
    modal.style.display = 'none';
    
}

modal.click = () =>{
    modal.style.display = 'none';
}