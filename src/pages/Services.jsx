import { useLanguage } from '../i18n/LanguageContext'
import './Services.css'

function Services() {
  const { t } = useLanguage()

  return (
    <div className="page services-page">
      <section className="page-hero page-hero--compact">
        <div className="page-hero__inner">
          <div className="page-hero__content">
            <h1>
              {t.services.heroPrefix} <span className="accent-text">{t.services.heroAccent}</span>.
            </h1>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-media-row">
            <div className="placeholder-box placeholder-box--services-strength" aria-label={t.services.strengthImageAria}>
              <div className="placeholder-box__content">
                <span className="placeholder-box__label">{t.services.strengthImageLabel}</span>
                <span className="placeholder-box__note">{t.services.strengthImageNote}</span>
              </div>
            </div>
            <div className="placeholder-box placeholder-box--services-cardio" aria-label={t.services.cardioImageAria}>
              <div className="placeholder-box__content">
                <span className="placeholder-box__label">{t.services.cardioImageLabel}</span>
                <span className="placeholder-box__note">{t.services.cardioImageNote}</span>
              </div>
            </div>
          </div>

          <div className="services-grid">
            {t.services.items.map((service, index) => (
              <article className="service-card card" key={service.title}>
                <span className="service-card__number">{String(index + 1).padStart(2, '0')}</span>
                <h2>{service.title}</h2>
                {service.body.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </article>
            ))}
          </div>

          <p className="muted-note">
            {t.services.note}
          </p>
        </div>
      </section>
    </div>
  )
}

export default Services
