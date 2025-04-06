export default function Header() {
    return (
      <header
        className="header d-flex flex-wrap align-items-center"
        data-page="home"
        data-overlay="true"
      >
        <div className="container d-flex flex-wrap flex-xl-nowrap align-items-center justify-content-center justify-content-md-between">
          <a className="brand header_logo d-flex align-items-center" href="">
            <img src="/img/index/logo-clinickbalibelly.svg" className="logo" alt="" />
            <span className="accent">clinicbalibelly</span>
          </a>
          <span className="header_trigger"></span>
        </div>
      </header>
    )
  }