const btn = document.querySelectorAll('.Saiba_Mais');
const dialogs = document.querySelectorAll('.popup');

btn.forEach(btn => {
    btn.addEventListener('click', () =>{
        const type = btn.getAttribute('data-type');
        const popup = document.getElementById(`popup-${type}`);
        if(popup){
            popup.showModal();
        }
    })
})

dialogs.forEach(dialog => {
    const closeButton = dialog.querySelector('.fechar');
    closeButton.addEventListener('click', () => {
        dialog.close();
    })
})