import './Services.css'

const services = [
  {
    title: 'სიძლიერის ვარჯიში',
    body: [
      'ოლიმპიური შტანგები, მძიმე დისკები, თავისუფალი წონები.',
      'სრული სიძლიერის ზონა სერიოზული ვარჯიშისთვის.',
    ],
  },
  {
    title: 'ფიტნეს მანქანები',
    body: ['თანამედროვე სიმულატორები და ტრენაჟორები — ყველა კუნთის ჯგუფისთვის.'],
  },
  {
    title: 'კარდიო ზონა',
    body: ['კარდიო აღჭურვილობა ვარჯიშის დასაწყებად ან დასასრულებლად.'],
  },
  {
    title: 'პირადი მწვრთნელი',
    body: [
      'პროფესიონალი ტრენერი შეგიმუშავებს ინდივიდუალურ პროგრამას შენი მიზნის მიხედვით.',
    ],
  },
  {
    title: 'გამოსაცვლელი ოთახი და შხაპი',
    body: ['სუფთა გამოსაცვლელი ოთახი, ბოქსები, შხაპი.'],
  },
  {
    title: 'უფასო Wi-Fi',
    body: ['სწრაფი ინტერნეტი დარბაზში.'],
  },
]

function Services() {
  return (
    <div className="page services-page">
      <section className="page-hero page-hero--compact">
        <div className="page-hero__inner">
          <div className="page-hero__content">
            <h1>
              ყველაფერი, რაც <span className="accent-text">გჭირდება</span>.
            </h1>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-media-row">
            <div className="placeholder-box placeholder-box--services-strength" aria-label="სიძლიერის ზონის ფოტო">
              <div className="placeholder-box__content">
                <span className="placeholder-box__label">სიძლიერე</span>
                <span className="placeholder-box__note">HAMMER STRENGTH-ის ტრენაჟორები</span>
              </div>
            </div>
            <div className="placeholder-box placeholder-box--services-cardio" aria-label="კარდიო ზონის ფოტო">
              <div className="placeholder-box__content">
                <span className="placeholder-box__label">კარდიო</span>
                <span className="placeholder-box__note">კარდიო აღჭურვილობა</span>
              </div>
            </div>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
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
            * დღიური გადასვლის ფასი და პირადი ტრენინგის ღირებულება — გთხოვთ,
            დაგვიკავშირდეთ პირდაპირ.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Services
