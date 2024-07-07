const closeModalOnSubmit = (modalID) => {
    // console.log(modalID);
    const bodyEl = document.body;
    
    bodyEl.style.overflow = ''
    bodyEl.style.paddingRight = ''
    bodyEl.classList.remove('modal-open')
    document.querySelector('.modal-backdrop').remove()

    if(document.querySelector(modalID)){
        document.querySelector(modalID).classList.remove('show')
    }
}

export default closeModalOnSubmit