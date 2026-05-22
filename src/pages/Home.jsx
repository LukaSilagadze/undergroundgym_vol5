import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import './Home.css'

function Home() {
  const { t } = useLanguage()

  return (
    <div className="page home-page">
      <section className="page-hero home-hero">
        <div className="page-hero__inner">
          <div className="page-hero__content">
            <h1>
              {t.home.heroLine1}
              <br />
              {t.home.heroLine2Start} <span className="accent-text">{t.home.heroAccent}</span>.
            </h1>
            <p>{t.home.heroSubheading}</p>
            <div className="button-row">
              <Link className="button button--primary" to="/pricing">
                {t.home.primaryCta}
              </Link>
              <a className="button button--secondary" href="tel:+995591444063">
                {t.home.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="home-stats" aria-label={t.home.statsAria}>
        <div className="home-stats__inner">
          {t.home.stats.map((stat) => (
            <div className="home-stats__item" key={stat.label}>
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <h2 className="section-title">
              {t.home.introTitle}
            </h2>
            <p className="section-copy">
              {t.home.introBody}
            </p>
          </div>
          <div className="placeholder-box placeholder-box--home-strength" aria-label={t.home.introImageAria}>
            <div className="placeholder-box__content">
              <span className="placeholder-box__label">{t.home.introImageLabel}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <h2 className="section-title">{t.home.servicesTitle}</h2>
          <div className="grid grid--3">
            {t.home.serviceCards.map((card) => (
              <Link className="home-service-card card" to="/services" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{t.home.reviewsTitle}</h2>
          <div className="grid grid--3">
            {t.home.reviews.map((review) => (
              <article className="review-card" key={review}>
                <span aria-hidden="true">“</span>
                <p>{review}</p>
                <strong>{t.common.googleMaps}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
