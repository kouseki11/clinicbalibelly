export default function CartOffcanvas() {
    return (
      <div
        className="cartOffcanvas offcanvas offcanvas-end"
        tabIndex="-1"
        data-bs-scroll="true"
        id="cartOffcanvas"
      >
        <div className="cartOffcanvas_header d-flex align-items-center justify-content-end">
          <button
            className="cartOffcanvas_header-close"
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="fi fi-rr-circle-xmark"></i>
          </button>
        </div>
        <div className="cartOffcanvas_body">
          <div className="row g-3">
            <div className="col-md-5">
              <img src="/img/index/infuss1.jpeg" alt="" />
            </div>
            <div className="col-md-7">
              <h3 className="fw-bold mb-3">Bali Belly</h3>
              <p className="mb-2">
                IV therapy that combines fluids, electrolytes, vitamins, and
                occasionally medications for enhanced wellness.
              </p>
              <p>
                This treatment takes around
                <b>45 minutes.</b>
              </p>
              <p>
                IV Medications
                <b>Normal Saline Solution</b>
              </p>
              <h5 className="text-dark mt-3 mb-2">Multivitamin :</h5>
              <ul className="ps-3">
                <li>Vitamin C</li>
                <li>
                  B-Complex Vitamins (Vit B1, Vit B2, Vit B3, Vit B5, Vit B6, Vit
                  B7, Vit B9, Vit B12)
                </li>
                <li>Anti-Nausea</li>
                <li>Pain Relief</li>
                <li>Gaster Protector</li>
              </ul>
              <h5 className="text-dark mt-3 mb-2">
                Oral medications:(depend on symptoms)
              </h5>
              <li>Antibiotic</li>
              <li>Antidiarrheal</li>
              <li>Zinc Supplements</li>
              <div className="cartOffcanvas_body-total d-flex justify-content-between align-items-center">
                <span className="cartTotal">IDR 1,690,000</span>
              </div>
              <a className="cartOffcanvas_body-btn btn" href="#">Book Now</a>
            </div>
          </div>
        </div>
      </div>
    )
  }