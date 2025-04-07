import './globals.css'
import { CartProvider } from './context/CartContext'
import AOSWrapper from './components/AOSWrapper'

export const metadata = {
  title: 'clinicbalibelly',
  description: 'Energize your body, rejuvenate your well-being',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" type="image/x-icon" href="/img/index/logo-clinickbalibelly.svg" />
        <link rel="preload" as="style" href="/css/preload.min.css" />
        <link rel="stylesheet" href="/uicons/css/uicons-regular-rounded.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="stylesheet" href="/css/libs.min.css" />
        <link rel="stylesheet" href="/css/index.min.css" />
      </head>
      <body>
        <CartProvider>
          <AOSWrapper>
            {children}
          </AOSWrapper>
        </CartProvider>

        {/* JS Scripts */}
        <script src="/js/common.min.js" defer></script>
        <script
          src="https://code.jquery.com/jquery-3.7.1.min.js"
          integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
          crossOrigin="anonymous"
          defer
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
          crossOrigin="anonymous"
          defer
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
          integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
          crossOrigin="anonymous"
          defer
        ></script>
        <script src="/js/index.min.js" defer></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js"
          integrity="sha512-Ysw1DcK1P+uYLqprEAzNQJP+J4hTx4t/3X2nbVwszao8wD+9afLjBQYjz7Uk4ADP+Er++mJoScI42ueGtQOzEA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          defer
        ></script>
      </body>
    </html>
  )
}
