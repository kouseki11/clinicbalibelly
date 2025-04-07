export default function CartOffcanvas({ product }) {
  if (!product) return null

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
            <img src={product.image} alt={product.title} />
          </div>
          <div className="col-md-7">
            <h3 className="fw-bold mb-3">{product.title}</h3>
            <p className="mb-2">{product.desc}</p>
            <p>
              This treatment takes around <b>{product.duration}</b>
            </p>
            <p>
              IV Medications: <b>{product.solution}</b>
            </p>
            {product.multivitamins && (
              <>
                <h5 className="text-dark mt-3 mb-2">Multivitamin:</h5>
                <ul className="ps-3">
                  {product.multivitamins.map((vitamin, idx) => (
                    <li key={idx}>{vitamin}</li>
                  ))}
                </ul>
              </>
            )}
            {product.oralMeds && (
              <>
                <h5 className="text-dark mt-3 mb-2">
                  Oral medications (depend on symptoms):
                </h5>
                <ul className="ps-3">
                  {product.oralMeds.map((med, idx) => (
                    <li key={idx}>{med}</li>
                  ))}
                </ul>
              </>
            )}
            <div className="cartOffcanvas_body-total d-flex justify-content-between align-items-center">
              <span className="cartTotal">{product.price}</span>
            </div>
            <a className="cartOffcanvas_body-btn btn" href="https://wa.me/6283811972903">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
