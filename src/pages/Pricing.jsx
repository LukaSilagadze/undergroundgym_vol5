import { useLanguage } from '../i18n/LanguageContext'
import './Pricing.css'

function Pricing() {
  const { t } = useLanguage()

  return (
    <div className="page pricing-page">
      <section className="page-hero page-hero--compact">
        <div className="page-hero__inner">
          <div className="page-hero__content">
            <h1>
              {t.pricing.heroPrefix} <span className="accent-text">{t.pricing.heroAccent}</span>.
            </h1>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {t.pricing.plans.map((plan) => (
              <article
                className={`pricing-card card${plan.featured ? ' pricing-card--featured' : ''}`}
                key={plan.name}
              >
                {plan.featured && <span className="pricing-card__badge">{t.pricing.featured}</span>}
                <h2>{plan.name}</h2>
                <p className="pricing-card__price">{plan.price}</p>
                <ul>
                  {t.pricing.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="pricing-notes">
            <p>
              {t.pricing.note}
            </p>
            <p>
              <strong>{t.pricing.paymentLabel}</strong> {t.pricing.paymentText}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing
