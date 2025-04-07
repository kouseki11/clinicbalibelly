'use client'

import { useEffect } from 'react'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

const reviews = [
  {
    id: 1,
    name: "Maria Harmon",
    text: "The at-home IV therapy service has truly transformed my day! I feel more refreshed and energized after every session. So convenient and professional",
    image: "/img/index/women1.jpg"
  },
  {
    id: 2,
    name: "Salvador Williams",
    text: "After feeling fatigued and dehydrated for a few days, I decided to try the infusion therapy. The results were amazing—I felt more energized and focused again. Thank you!",
    image: "/img/index/man1.jpg"
  },
  {
    id: 3,
    name: "Christina Phillips",
    text: "The booking process was super easy, and the team was so friendly. The infusion therapy I tried helped relieve my migraine in no time. Highly recommend",
    image: "/img/index/women2.jpg"
  },
  {
    id: 4,
    name: "John Doe",
    text: "I was a bit skeptical at first, but after trying it, I felt so much more refreshed and energetic. It's the perfect solution for my busy lifestyle",
    image: "/img/index/man2.jpg"
  },
  {
    id: 5,
    name: "Sandy Smith",
    text: "After feeling under the weather for a few days, I tried this service. The results were incredible! I felt healthier and ready to get back to my routine",
    image: "/img/index/man3.jpg"
  }
]

export default function ReviewsSection() {
  useEffect(() => {
    new Swiper('.swiper', {
      loop: true,
      grabCursor: true,
      spaceBetween: 24,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }
    })
  }, [])

  return (
    <section className="reviews section--nopb">
      <div className="container">
        <div className="reviews_header">
          <h2 className="reviews_header-title">What Our Clients Are Saying</h2>
          <p className="reviews_header-text">
            See what our satisfied clients are saying! Real stories, real
            results—discover how our services have made a difference in their
            lives.
          </p>
        </div>
        <div className="reviews_slider swiper">
          <div className="swiper-wrapper">
            {reviews.map(review => (
              <div className="reviews_slider-slide swiper-slide" key={review.id}>
                <div className="reviews_slider-slide_wrapper d-flex flex-column align-items-center">
                  <picture>
                    <source
                      data-srcset={review.image}
                      srcSet={review.image}
                      type="image/webp"
                    />
                    <img
                      className="lazy avatar"
                      data-src={review.image}
                      src={review.image}
                      alt="avatar"
                    />
                  </picture>
                  <p className="text">{review.text}</p>
                  <h5 className="name">{review.name}</h5>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination swiper-pagination--dots"></div>
        </div>
      </div>
      <div className="reviews_underlay">
        <span className="reviews_underlay-circle reviews_underlay-circle--green"></span>
        <span className="reviews_underlay-circle reviews_underlay-circle--yellow"></span>
      </div>
    </section>
  )
}