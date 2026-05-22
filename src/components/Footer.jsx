import { useLanguage } from '../i18n/LanguageContext'
import './Footer.css'

const instagramUrl = 'https://www.instagram.com/undergroundgym28?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
const facebookUrl = 'https://www.facebook.com/UndegroundGym'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <div className="footer__brand">
            <img src="/logo.png" alt={t.common.logoAlt} className="brand-logo" />
            <span>{t.common.brand}</span>
          </div>
          <p className="footer__address">{t.footer.address}</p>
        </div>

        <div className="footer__socials" aria-label={t.nav.socialsAria}>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            {t.common.social.instagram}
          </a>
          <a href={facebookUrl} target="_blank" rel="noreferrer">
            {t.common.social.facebook}
          </a>
        </div>

        <p className="footer__copyright">{t.footer.copyright}</p>
      </div>
    </footer>
  )
}

export default Footer
