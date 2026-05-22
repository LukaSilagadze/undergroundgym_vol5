import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/', label: 'მთავარი', end: true },
  { to: '/about', label: 'ჩვენს შესახებ' },
  { to: '/services', label: 'სერვისები' },
  { to: '/pricing', label: 'ფასები' },
  { to: '/contact', label: 'კონტაქტი' },
]

const instagramUrl = 'https://www.instagram.com/undergroundgym28?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
const facebookUrl = 'https://www.facebook.com/UndegroundGym'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <header className="navbar">
      <div className="navbar__top">
        <div className="navbar__top-inner">
          <NavLink to="/" className="navbar__brand" aria-label="Underground Gym მთავარი">
            <img src="/logo.png" alt="Underground Gym ლოგო" className="brand-logo" />
            <span>UNDERGROUND GYM</span>
          </NavLink>

          <div className="navbar__contact" aria-label="საკონტაქტო ინფორმაცია">
            <div className="navbar__contact-item">
              <span className="navbar__contact-icon" aria-hidden="true">⏱</span>
              <div>
                <strong>საათები</strong>
                <span>ორშ. – შაბ. 07:00 – 22:00</span>
                <span>კვირა 07:00 – 21:30</span>
              </div>
            </div>
            <div className="navbar__contact-item">
              <span className="navbar__contact-icon" aria-hidden="true">@</span>
              <div>
                <strong>ელ-ფოსტა</strong>
                <a href="mailto:undergroundgym28@gmail.com">undergroundgym28@gmail.com</a>
              </div>
            </div>
            <div className="navbar__contact-item">
              <span className="navbar__contact-icon" aria-hidden="true">☎</span>
              <div>
                <strong>ტელეფონი</strong>
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
            aria-label="მენიუს გახსნა"
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
            aria-label="მთავარი ნავიგაცია"
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
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar__right-tools">
            <div className="navbar__socials" aria-label="სოციალური ბმულები">
              <a href={facebookUrl} target="_blank" rel="noreferrer">Facebook</a>
              <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
            </div>
            <div className="navbar__language-slot" aria-hidden="true" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
