export default function EffectsSection() {
    return (
      <section className="effects section--nopb">
        <span className="effects_underlay">
          <span className="effects_underlay-circle effects_underlay-circle--accent"></span>
          <span className="effects_underlay-circle effects_underlay-circle--green"></span>
        </span>
        <div className="container d-md-flex flex-wrap flex-xxl-nowrap justify-content-between align-items-center">
          <div className="effects_header d-lg-flex flex-xxl-column col-md-12 col-xxl-auto">
            <div className="main col-lg-6 col-xl-12">
              <h2 className="effects_header-title">HOW IT WORKS</h2>
              <p className="effects_header-text">
                Getting started is simple! Just choose your service, schedule a
                time, and our expert team will deliver personalized IV therapy
                directly to you—no hassle, just results.
              </p>
            </div>
          </div>
          <div className="effects_media">
            <picture>
              <source
                data-srcset="/img/index/img-infusionpeople.png"
                srcset="/img/index/img-infusionpeople.png"
                type="image/webp"
              />
              <img
                className="lazy"
                data-src="/img/index/img-infusionpeople.png"
                src="/img/index/img-infusionpeople.png"
                alt="media"
              />
            </picture>
          </div>
          <ul className="effects_list col-xxl-4">
            <li
              className="effects_list-item d-flex flex-column align-items-center flex-sm-row align-items-sm-start"
              data-aos="fade-up"
            >
              <span className="icon d-flex align-items-center justify-content-center">
                <i className="fi fi-rr-check-circle"></i>
              </span>
              <div className="wrapper">
                <h4 className="effects_list-item_header">RELAX</h4>
                <p className="effects_list-item_text">
                  Choose from our many treatment options and then sit tight. We
                  are a purely mobile service, so all IVs are administered in
                  your accommodation, no need to travel.
                </p>
              </div>
            </li>
            <li
              className="effects_list-item d-flex flex-column align-items-center flex-sm-row align-items-sm-start"
              data-aos="fade-up"
            >
              <span className="icon d-flex align-items-center justify-content-center">
                <i className="fi fi-rr-check-circle"></i>
              </span>
              <div className="wrapper">
                <h4 className="effects_list-item_header">NEED A INFUSION?</h4>
                <p className="effects_list-item_text">
                  Our vitamin IV treatments can be used as an anti-aging energy
                  boost or to help with hangover, food poisoning, or Dengue
                  Fever symptoms.
                </p>
              </div>
            </li>
            <li
              className="effects_list-item d-flex flex-column align-items-center flex-sm-row align-items-sm-start"
              data-aos="fade-up"
            >
              <span className="icon d-flex align-items-center justify-content-center">
                <i className="fi fi-rr-check-circle"></i>
              </span>
              <div className="wrapper">
                <h4 className="effects_list-item_header">FEEL BETTER</h4>
                <p className="effects_list-item_text">
                  Symptoms are often improved before the treatment is even over,
                  post-treatment, you should look visibly improved. Now get back
                  to the beach!
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    )
  }