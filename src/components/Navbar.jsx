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

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__brand" aria-label="Underground Gym მთავარი">
          <img src="/logo.png" alt="Underground Gym ლოგო" className="brand-logo" />
          <span>UNDERGROUND GYM</span>
        </NavLink>

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
      </div>
    </header>
  )
}

export default Navbar
