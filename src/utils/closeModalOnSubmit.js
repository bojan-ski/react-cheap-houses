const closeModalOnSubmit = (modalID) => {
    console.log(modalID);

    document.querySelector(modalID).classList.remove('show')
    document.body.classList.remove('modal-open')
    document.querySelector('.modal-backdrop').remove()
}

export default closeModalOnSubmit