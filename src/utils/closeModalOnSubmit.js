const closeModalOnSubmit = (modalID) => {
    console.log(modalID);
    
    document.body.classList.remove('modal-open')
    document.querySelector('.modal-backdrop').remove()

    if(document.querySelector(modalID)){
        document.querySelector(modalID).classList.remove('show')
    }
}

export default closeModalOnSubmit