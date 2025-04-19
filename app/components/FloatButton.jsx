export default function FloatButton() {
   const message = encodeURIComponent('Halo admin, saya butuh bantuan untuk layanan ini');
   const phoneNumber = '62895320066260';
   const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
      <div className="btn-float d-flex align-items-center">
        <div className="tooltip-custom">24/7 Chat</div>
        <div className="btn-circle whatsapp mb-0">
          <a
            href={whatsappLink}
            className="text-white text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fs-24 fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>
    )
  }