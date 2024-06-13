const closeModalOnSubmit = () => {
    document.querySelector('#logInModal').classList.remove('show')
    document.querySelector('.modal-backdrop').remove()
    document.body.classList.remove('modal-open')
}

export default closeModalOnSubmit