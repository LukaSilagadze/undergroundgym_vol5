import './Contact.css'

const instagramUrl = 'https://instagram.com/your-profile'
const facebookUrl = 'https://facebook.com/your-page'

function Contact() {
  return (
    <div className="page contact-page">
      <section className="page-hero page-hero--compact">
        <div className="page-hero__inner">
          <div className="page-hero__content">
            <h1>
              <span className="accent-text">დაგვიკავშირდით</span>.
            </h1>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <article className="contact-block">
              <h2>ტელეფონი</h2>
              <a href="tel:+995591444063">+995 591 44 40 63</a>
              <a href="tel:+995555202450">+995 555 20 24 50</a>
              <a href="tel:+995557665222">+995 557 66 52 22</a>
            </article>

            <article className="contact-block">
              <h2>ელ-ფოსტა</h2>
              <a href="mailto:undergroundgym28@gmail.com">undergroundgym28@gmail.com</a>
            </article>

            <article className="contact-block">
              <h2>მისამართი</h2>
              <p>ნინო ჟვანიას ქუჩა 28</p>
              <p>თბილისი, საქართველო</p>
            </article>

            <article className="contact-block">
              <h2>სამუშაო საათები</h2>
              <p>ორშაბათი – შაბათი: 07:00 – 22:00</p>
              <p>კვირა: 07:00 – 21:30</p>
            </article>

            <div className="contact-socials" aria-label="სოციალური ბმულები">
              <a href={instagramUrl} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={facebookUrl} target="_blank" rel="noreferrer">
                Facebook
              </a>
            </div>
          </div>

          <div className="contact-map-wrap">
            <iframe
              className="contact-map"
              title="Underground Gym რუკა"
              src="https://maps.google.com/maps?q=28%20Nino%20Zhvania%20Street%2C%20Tbilisi%2C%20Georgia&t=&z=16&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="section section--surface contact-directions-section">
        <div className="container">
          <div className="contact-directions">
            <h2>როგორ მოვიდე?</h2>
            <p>
              სპორტდარბაზი მდებარეობს სავარაუდოდ საცხოვრებელ კორპუსთან ახლოს. თუ
              ვერ პოულობთ — დარეკეთ და მოგვახსენეთ, სად ხართ. მოვა ვინმე.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
