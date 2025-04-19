export default function HeroSection() {
    return (
      <section className="hero">
        <div className="container d-xl-flex align-items-start">
          <div className="hero_about col-xl-6">
            <div className="hero_header">
              <h1 className="hero_header-title">
                Recharge and rejuvenate your energy!
              </h1>
              <p className="hero_header-text">
                Claim back your energy and improve your health with our IV therapy, delivered right to your door—quick, simple, effective, and hassle-free
              </p>
              <a className="hero_header-btn btn" href="https://wa.me/62895320066260">Book Now</a>
            </div>
            <div className="hero_contacts">
              <span className="hero_contacts-data d-flex flex-column flex-sm-row align-items-center">
                <span className="icon d-flex align-items-center justify-content-center">
                  <i className="fi fi-rr-phone-flip"></i>
                </span>
                <span className="d-flex flex-column">
                  <span>Phone number</span>
                  <a className="link" href="tel:+1234567890">+62-555-0133</a>
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
    )
  }