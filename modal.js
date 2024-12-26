cover = document.getElementById('letter_cover');
modal = document.getElementById('letter_modal');
 function openModal(){
    modal.style.display = 'flex';
    console.log('clicked')
}
 function closeModal(){
    modal.style.display = 'none';
    console.log('clicked')
}

modal.click = () =>{
    modal.style.display = 'none';
}