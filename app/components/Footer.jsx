export default function Footer() {
    return (
      <footer className="footer section--nopb">
        <div className="footer_main section">
          <div className="container d-flex flex-column flex-md-row flex-wrap flex-xl-nowrap justify-content-xl-between">
            <div className="footer_main-about footer_main-block col-md-6 col-xl-auto">
              <a className="brand footer_main-about_brand d-flex align-items-center" href="#">
                <span className="accent">clinicbalibelly</span>
              </a>
              <div className="footer_main-about_wrapper">
                <p className="text">
                  Boost your energy and health with IV therapy delivered right to
                  your door—quick, easy, and effective! aliquam eleifend mi in
                  nulla posuere sollicitudin
                </p>
              </div>
            </div>
            <div className="footer_main-contacts footer_main-block col-md-6 col-xl-auto">
              <h4 className="footer_main-contacts_header footer_main-header">
                Contacts information
              </h4>
              <ul className="footer_main-contacts_list">
                <li className="list-item d-flex align-items-center">
                  <span className="icon d-flex justify-content-center align-items-center">
                    <i className="fi fi-rr-phone-flip"></i>
                  </span>
                  <div className="wrapper d-flex flex-column">
                    <a className="link" href="#">+62-202-555-0133</a>
                  </div>
                </li>
                <li className="list-item d-flex align-items-center">
                  <span className="icon d-flex justify-content-center align-items-center">
                    <i className="fi fi-rr-marker"></i>
                  </span>
                  <div className="wrapper d-flex flex-column">
                    <span>Bali, Indonesia</span>
                    <span>Jakarta, Indonesia</span>
                  </div>
                </li>
                <li className="list-item d-flex align-items-center">
                  <span className="icon d-flex justify-content-center align-items-center">
                    <i className="fi fi-rr-time-fast"></i>
                  </span>
                  <div className="wrapper d-flex flex-column">
                    <span>24/7</span>
                    <span>Everyday</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="footer_main-nav footer_main-block col-md-6 col-xl-auto">
              <h4 className="footer_main-nav_header footer_main-header">About</h4>
              <ul className="footer_main-nav_list d-flex flex-wrap flex-md-column">
                <li className="list-item">
                  <a className="link d-inline-flex align-items-center" href="#">
                    Services
                  </a>
                </li>
                <li className="list-item">
                  <a className="link d-inline-flex align-items-center" href="#">
                    FAQs
                  </a>
                </li>
                <li className="list-item">
                  <a className="link d-inline-flex align-items-center" href="#">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer_main-instagram footer_main-block col-md-6 col-xl-auto footer_main-about_wrapper">
              <h4 className="footer_main-instagram_header footer_main-header">
                Social Media
              </h4>
              <ul className="socials d-flex align-items-center accent">
                <li className="list-item">
                  <a
                    className="link"
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener norefferer"
                  >
                    <i className="fa-brands fa-facebook icon"></i>
                  </a>
                </li>
                <li className="list-item">
                  <a
                    className="link"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener norefferer"
                  >
                    <i className="fa-brands fa-instagram icon"></i>
                  </a>
                </li>
                <li className="list-item">
                  <a
                    className="link"
                    href="#"
                    target="_blank"
                    rel="noopener norefferer"
                  >
                    <i className="fa-brands fa-whatsapp icon"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_secondary">
          <div className="container d-flex flex-column-reverse flex-md-row justify-content-center justify-content-md-between align-items-md-center">
            <p className="footer_secondary-copyright">
              clinicbalibelly ©
              <span className="linebreak">
                All rights reserved Copyrights
                <span>2025</span>
              </span>
            </p>
          </div>
        </div>
      </footer>
    )
  }