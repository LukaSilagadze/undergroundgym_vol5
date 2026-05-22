import './Pricing.css'

const plans = [
  {
    name: '2 კვირა',
    price: '70 ₾',
  },
  {
    name: '1 თვე',
    price: '120 ₾',
    featured: true,
  },
  {
    name: '3 თვე',
    price: '300 ₾',
  },
  {
    name: '1 წელი',
    price: '1080 ₾',
  },
]

function Pricing() {
  return (
    <div className="page pricing-page">
      <section className="page-hero page-hero--compact">
        <div className="page-hero__inner">
          <div className="page-hero__content">
            <h1>
              გახდი <span className="accent-text">წევრი</span>.
            </h1>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article
                className={`pricing-card card${plan.featured ? ' pricing-card--featured' : ''}`}
                key={plan.name}
              >
                {plan.featured && <span className="pricing-card__badge">ხშირი არჩევანი</span>}
                <h2>{plan.name}</h2>
                <p className="pricing-card__price">{plan.price}</p>
                <ul>
                  <li>ულიმიტო წვდომა</li>
                  <li>ყველა სერვისი</li>
                </ul>
              </article>
            ))}
          </div>

          <div className="pricing-notes">
            <p>
              დღიური ბილეთისა და პირადი ტრენინგის ფასის გასაგებად დაგვიკავშირდით
              პირდაპირ.
            </p>
            <p>
              <strong>მიღება:</strong> ნაღდი და უნაღდო გადახდა
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing
