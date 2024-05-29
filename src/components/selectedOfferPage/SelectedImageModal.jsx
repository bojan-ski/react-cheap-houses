const SelectedImageModal = ({ imageSrc }) => {
    return (
        <div class="modal fade" id="selectedImageModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="selectedImageModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                        <img src={imageSrc} alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectedImageModal