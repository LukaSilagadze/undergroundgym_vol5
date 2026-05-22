import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import './Navbar.css'

const links = [
  { to: '/', labelKey: 'home', end: true },
  { to: '/about', labelKey: 'about' },
  { to: '/services', labelKey: 'services' },
  { to: '/pricing', labelKey: 'pricing' },
  { to: '/contact', labelKey: 'contact' },
]

const instagramUrl = 'https://www.instagram.com/undergroundgym28?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
const facebookUrl = 'https://www.facebook.com/UndegroundGym'
const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="7" width="14" height="10" rx="2" />
      <path d="m6 9 6 5 6-5" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.3 5.8 10 5l2.2 4.1-1.7 1.1c.8 1.7 2.1 3 3.8 3.8l1.1-1.7 4.1 2.2-.8 1.7c-.3.7-1 1.1-1.8 1a12.2 12.2 0 0 1-10.1-10c-.1-.8.3-1.5 1-1.8Z" />
    </svg>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const location = useLocation()
  const { language, languages, setLanguage, t } = useLanguage()
  const activeLanguage = languages.find((item) => item.code === language) || languages[0]

  useEffect(() => {
    setIsOpen(false)
    setIsLanguageOpen(false)
  }, [location.pathname])

  return (
    <header className="navbar">
      <div className="navbar__top">
        <div className="navbar__top-inner">
          <NavLink to="/" className="navbar__brand" aria-label={t.nav.brandAria}>
            <img src={assetUrl('logo.png')} alt={t.common.logoAlt} className="brand-logo" />
            <span>{t.common.brand}</span>
          </NavLink>

          <div className="navbar__contact" aria-label={t.nav.contactAria}>
            <div className="navbar__contact-item">
              <span className="navbar__contact-icon navbar__contact-icon--clock">
                <ClockIcon />
              </span>
              <div>
                <strong>{t.nav.hoursTitle}</strong>
                <span>{t.nav.hoursWeekdays}</span>
                <span>{t.nav.hoursSunday}</span>
              </div>
            </div>
            <div className="navbar__contact-item">
              <span className="navbar__contact-icon navbar__contact-icon--mail">
                <MailIcon />
              </span>
              <div>
                <strong>{t.nav.emailTitle}</strong>
                <a href="mailto:undergroundgym28@gmail.com">undergroundgym28@gmail.com</a>
              </div>
            </div>
            <div className="navbar__contact-item">
              <span className="navbar__contact-icon navbar__contact-icon--phone">
                <PhoneIcon />
              </span>
              <div>
                <strong>{t.nav.phoneTitle}</strong>
                <a href="tel:+995591444063">+995 591 44 40 63</a>
                <a href="tel:+995555202450">+995 555 20 24 50</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar__lower">
        <div className="navbar__lower-inner">
          <button
            className="navbar__toggle"
            type="button"
            aria-label={t.nav.menuOpen}
            aria-expanded={isOpen}
            aria-controls="site-navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            id="site-navigation"
            className={`navbar__links${isOpen ? ' navbar__links--open' : ''}`}
            aria-label={t.nav.navAria}
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `navbar__link${isActive ? ' navbar__link--active' : ''}`
                }
              >
                {t.nav[link.labelKey]}
              </NavLink>
            ))}
          </nav>

          <div className="navbar__right-tools">
            <div className="navbar__socials" aria-label={t.nav.socialsAria}>
              <a href={facebookUrl} target="_blank" rel="noreferrer">{t.common.social.facebook}</a>
              <a href={instagramUrl} target="_blank" rel="noreferrer">{t.common.social.instagram}</a>
            </div>
            <div className="navbar__language">
              <button
                className="navbar__language-trigger"
                type="button"
                aria-label={t.nav.languageLabel}
                aria-expanded={isLanguageOpen}
                aria-haspopup="listbox"
                onClick={() => setIsLanguageOpen((open) => !open)}
              >
                <img
                  className="navbar__language-flag"
                  src={assetUrl(activeLanguage.flagSrc)}
                  alt=""
                  aria-hidden="true"
                />
                <span>{activeLanguage.shortLabel}</span>
                <span className="navbar__language-caret" aria-hidden="true">▾</span>
              </button>

              {isLanguageOpen && (
                <div className="navbar__language-menu" role="listbox" aria-label={t.nav.languageLabel}>
                  {languages.map((item) => (
                    <button
                      className={`navbar__language-option${item.code === language ? ' navbar__language-option--active' : ''}`}
                      type="button"
                      role="option"
                      aria-selected={item.code === language}
                      key={item.code}
                      onClick={() => {
                        setLanguage(item.code)
                        setIsLanguageOpen(false)
                      }}
                    >
                      <img
                        className="navbar__language-flag"
                        src={assetUrl(item.flagSrc)}
                        alt=""
                        aria-hidden="true"
                      />
                      <span>{item.shortLabel}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
