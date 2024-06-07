import heroImg from '../../assets/dashboard-assets/jeftine_kuce_hero.png'

const Hero = () => {
    return (
        <section className='hero py-5'>
            <div className="container">

                <div className="row">
                    {/* row item 1 */}
                    <div className="col-12 col-md-7">
                        <div className='hero-heading'>
                            <h1 className='fw-bold mb-4'>
                                Portal JEFTINE KUĆE
                            </h1>
                            <h6>
                                Jedno mesto za nekretnine i sve oko nekretnina. Pretražite, kupite, prodajte nekretninu ili se samo posavetujte sa stručnim ljudima iz ove oblasti...
                            </h6>
                        </div>

                        <div className='counter-boxes'>
                            <div className="row">

                                {/* counter-box one */}
                                <div className="col-4 counter-box one">
                                    <h3 className='fw-bold value' limit="250">
                                        0
                                    </h3>
                                    <p className='fw-bold text-muted'>
                                        Nekretnina u ponudi
                                    </p>
                                </div>

                                {/* counter-box two */}
                                <div className="col-4 counter-box two">
                                    <h3 className='fw-bold value' limit="150">
                                        0
                                    </h3>
                                    <p className='fw-bold text-muted'>
                                        Saradnika
                                    </p>
                                </div>

                                {/* counter-box three */}
                                <div className="col-4 counter-box three">
                                    <h3 className='fw-bold value' limit="750">
                                        0
                                    </h3>
                                    <p className='fw-bold text-muted'>
                                        Zadovoljinih kupaca
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* row item 2 */}
                    <div className="col-12 col-md-5">

                    </div>
                </div>

                {/* hero filter component */}
                <div className="hero-filter">

                </div>
            </div>
        </section>
    )
}

export default Hero