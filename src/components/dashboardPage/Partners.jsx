const Partners = () => {
    return (
        <section className="partners bg-info">
            <div className="container">

                <h6 className="mb-3">
                    Samo dobra ekipa garantuje dobar rezultat, ovo su neki od naših partnera
                </h6>


                <div className="row">
                    <div className="col-8">

                        <div className="partners-slider swiper-container carousel-5">
                            <div className="partners-slider-wrapper swiper-wrapper">

                                <div className="swiper-slide">
                                    <a href="#">
                                        <img src="" alt="JK - Partner #1" className="img-fluid" />
                                    </a>
                                </div>

                                <div className="swiper-slide">
                                    <a href="#">
                                        <img src="" alt="JK - Partner #2" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Partners