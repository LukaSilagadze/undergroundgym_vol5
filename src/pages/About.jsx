import { useLanguage } from '../i18n/LanguageContext'
import './About.css'

function About() {
  const { t } = useLanguage()

  return (
    <div className="page about-page">
      <section className="page-hero page-hero--compact">
        <div className="page-hero__inner">
          <div className="page-hero__content">
            <h1>
              {t.about.heroPrefix} <span className="accent-text">{t.about.heroAccent}</span>. {t.about.heroSuffix}
            </h1>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <h2 className="section-title">{t.about.storyTitle}</h2>
            <div className="about-story">
              {t.about.storyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="placeholder-box placeholder-box--about-team" aria-label={t.about.teamImageAria}>
            <div className="placeholder-box__content">
              <span className="placeholder-box__label">{t.about.teamImageLabel}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <h2 className="section-title">{t.about.valuesTitle}</h2>
          <div className="grid grid--3">
            {t.about.values.map((value) => (
              <article className="about-value card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-note-section">
        <div className="container">
          <div className="about-note">
            <p>{t.about.atmosphere}</p>
            <p className="about-languages">
              {t.about.languages}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
