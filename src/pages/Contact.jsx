import { useLanguage } from '../i18n/LanguageContext'
import './Contact.css'

const instagramUrl = 'https://www.instagram.com/undergroundgym28?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
const facebookUrl = 'https://www.facebook.com/UndegroundGym'

function Contact() {
  const { t } = useLanguage()

  return (
    <div className="page contact-page">
      <section className="page-hero page-hero--compact">
        <div className="page-hero__inner">
          <div className="page-hero__content">
            <h1>
              <span className="accent-text">{t.contact.hero}</span>.
            </h1>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <article className="contact-block">
              <h2>{t.contact.phoneTitle}</h2>
              <a href="tel:+995591444063">+995 591 44 40 63</a>
              <a href="tel:+995555202450">+995 555 20 24 50</a>
              <a href="tel:+995557665222">+995 557 66 52 22</a>
            </article>

            <article className="contact-block">
              <h2>{t.contact.emailTitle}</h2>
              <a href="mailto:undergroundgym28@gmail.com">undergroundgym28@gmail.com</a>
            </article>

            <article className="contact-block">
              <h2>{t.contact.addressTitle}</h2>
              <p>{t.contact.addressLine1}</p>
              <p>{t.contact.addressLine2}</p>
            </article>

            <article className="contact-block">
              <h2>{t.contact.hoursTitle}</h2>
              <p>{t.contact.hoursWeekdays}</p>
              <p>{t.contact.hoursSunday}</p>
            </article>

            <div className="contact-socials" aria-label={t.contact.socialsAria}>
              <a href={instagramUrl} target="_blank" rel="noreferrer">
                {t.common.social.instagram}
              </a>
              <a href={facebookUrl} target="_blank" rel="noreferrer">
                {t.common.social.facebook}
              </a>
            </div>
          </div>

          <div className="contact-map-wrap">
            <iframe
              className="contact-map"
              title={t.contact.mapTitle}
              src="https://maps.google.com/maps?q=28%20Nino%20Zhvania%20Street%2C%20Tbilisi%2C%20Georgia&t=&z=16&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="section section--surface contact-directions-section">
        <div className="container">
          <div className="contact-directions-panel">
            <div className="contact-directions-panel__copy">
              <span className="contact-directions-panel__eyebrow">
                {t.contact.videoPlaceholderTitle}
              </span>
              <h2>{t.contact.directionsTitle}</h2>
              <p>{t.contact.directions}</p>
              <div className="contact-directions-panel__note">
                <strong>{t.contact.videoPlaceholderText}</strong>
                <span>{t.contact.videoPlaceholderNote}</span>
              </div>
            </div>

            <div className="contact-video-frame" aria-label={t.contact.videoPlaceholderTitle}>
              <div className="contact-video-frame__inner">
                <iframe
                  title={t.contact.videoPlaceholderTitle}
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2654644731558380%2F&show_text=false&width=380&t=0"
                  width="380"
                  height="476"
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
