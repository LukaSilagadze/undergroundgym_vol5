import { Link } from 'react-router-dom'
import './Home.css'

const stats = [
  { number: '2018', label: 'დაარსდა' },
  { number: '07:00 – 22:00', label: 'ყოველდღე' },
  { number: '120₾', label: 'თვეური აბონიმენტი' },
  { number: 'Hammer Strength', label: 'ტრენაჟორები' },
]

const serviceCards = [
  {
    title: 'სიძლიერის ვარჯიში',
    text: 'თავისუფალი წონები, ოლიმპიური შტანგები, მძიმე დისკები',
  },
  {
    title: 'კარდიო და ფიტნესი',
    text: 'თანამედროვე აღჭურვილობა, ყველა დონისთვის',
  },
  {
    title: 'პირადი მწვრთნელი',
    text: 'ინდივიდუალური პროგრამა, პროფესიონალი ტრენერი',
  },
]

const reviews = [
  'ეს ჩემი საყვარელი ადგილია ქალაქში. ძალიან კარგი გარემო, ტრენერები და მეგობრული ატმოსფერო.',
  'საუკეთესო სპორტდარბაზი თბილისში. ძალიან კომფორტული და ვარიანტებით სავსე.',
  'პერსონალი, განსაკუთრებით ტრენერი დაღა, მეგობრული და კვალიფიციურია. სუფთა დარბაზი, კარგი აღჭურვილობა.',
]

function Home() {
  return (
    <div className="page home-page">
      <section className="page-hero home-hero">
        <div className="page-hero__inner">
          <div className="page-hero__content">
            <h1>
              მოამზადე სხეული.
              <br />
              გაამაგრე <span className="accent-text">ნება</span>.
            </h1>
            <p>სატრენაჟორო დარბაზი ვაკეში — 2018 წლიდან.</p>
            <div className="button-row">
              <Link className="button button--primary" to="/pricing">
                ფასების ნახვა
              </Link>
              <a className="button button--secondary" href="tel:+995591444063">
                დარეკე ახლავე
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="home-stats" aria-label="სწრაფი ინფორმაცია">
        <div className="home-stats__inner">
          {stats.map((stat) => (
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
              სერიოზული ვარჯიში. ნამდვილი შედეგები.
            </h2>
            <p className="section-copy">
              Underground Gym არის სივრცე მათთვის, ვინც სერიოზულად ვარჯიშობს. ვაკეში,
              ნინო ჟვანიას ქუჩაზე, ჩვენ 2018 წლიდან ვქმნით გარემოს, სადაც ყველა —
              დამწყებიდან გამოცდილ სპორტსმენამდე — თავს ადგილზე გრძნობს.
            </p>
          </div>
          <div className="placeholder-box placeholder-box--home-strength" aria-label="აღჭურვილობის ფოტო">
            <div className="placeholder-box__content">
              <span className="placeholder-box__label">ძალის ზონა</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <h2 className="section-title">რას ნახავ დარბაზში</h2>
          <div className="grid grid--3">
            {serviceCards.map((card) => (
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
          <h2 className="section-title">რას ამბობენ სტუმრები</h2>
          <div className="grid grid--3">
            {reviews.map((review) => (
              <article className="review-card" key={review}>
                <span aria-hidden="true">“</span>
                <p>{review}</p>
                <strong>Google Maps</strong>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
