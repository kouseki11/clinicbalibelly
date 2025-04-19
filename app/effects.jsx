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
                As easy as 1,2,3. Select, Schedule, and Go! our team of experts will deliver your personalized IV 
                therapy in no time! just sit back, and feel the results revive your wellbeing
              </p>
            </div>
          </div>
          <div className="effects_media">
            <picture>
              <source
                data-srcset="/img/index/img-infusionpeople.png"
                srcSet="/img/index/img-infusionpeople.png"
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
                  No need to go anywhere, just sit tight and our mobile services will come 
                  to where you are so you can focus more on rest and relaxation. IV drips are fully administered at the convenience of your location.
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
                  Whether it's anti-aging, energy boost or to help with a nasty hangover, our IV treatments have got you covered. 
                  We could also administer relief for food poisoning or even Dengue Fever symptoms.
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
                  Many symptoms are often improved before the treatment has ended, so post-treatment, you may feel immediately better. 
                  More to time to relax and hop on to the beach!
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    )
  }