import FeaturedProducts from './featured-products'

export default function FeaturedSection() {
  return (
    <section className="featured section--nopb">
      <div className="container">
        <div className="featured_header">
          <h2 className="featured_header-title">Featured Products</h2>
          <p className="featured_header-text">
            Browse the finest selection of our top-rated products, crafted by our experts, guaranteed to make you feel better in an instant
          </p>
        </div>
        <FeaturedProducts />
      </div>
    </section>
  )
}