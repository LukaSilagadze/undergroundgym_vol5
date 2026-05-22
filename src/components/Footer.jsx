import './Footer.css'

const instagramUrl = 'https://www.instagram.com/undergroundgym28?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
const facebookUrl = 'https://www.facebook.com/UndegroundGym'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <div className="footer__brand">
            <img src="/logo.png" alt="Underground Gym ლოგო" className="brand-logo" />
            <span>UNDERGROUND GYM</span>
          </div>
          <p className="footer__address">ნინო ჟვანიას ქუჩა 28, თბილისი</p>
        </div>

        <div className="footer__socials" aria-label="სოციალური ბმულები">
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={facebookUrl} target="_blank" rel="noreferrer">
            Facebook
          </a>
        </div>

        <p className="footer__copyright">
          © 2024 Underground Gym. ყველა უფლება დაცულია.
        </p>
      </div>
    </footer>
  )
}

export default Footer
