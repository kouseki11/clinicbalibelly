import FeaturedProducts from './featured-products'

export default function FeaturedSection() {
  return (
    <section className="featured section--nopb">
      <div className="container">
        <div className="featured_header">
          <h2 className="featured_header-title">Featured Products</h2>
          <p className="featured_header-text">
            Explore our handpicked selection of top-rated products, carefully
            chosen to enhance your wellness and meet your needs
          </p>
        </div>
        <FeaturedProducts />
      </div>
    </section>
  )
}