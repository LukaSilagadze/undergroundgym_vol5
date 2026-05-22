import './About.css'

const values = [
  {
    title: 'სისუფთავე',
    text: 'სუფთა გარემო, ყოველ დღე',
  },
  {
    title: 'პროფესიონალიზმი',
    text: 'კვალიფიციური ტრენერები, ინდივიდუალური მიდგომა',
  },
  {
    title: 'საზოგადოება',
    text: 'ქართველი და უცხოელი წევრები — ერთი გუნდი',
  },
]

function About() {
  return (
    <div className="page about-page">
      <section className="page-hero page-hero--compact">
        <div className="page-hero__inner">
          <div className="page-hero__content">
            <h1>
              2018 წლიდან. <span className="accent-text">ვაკეში</span>. ჩვენთვის.
            </h1>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <h2 className="section-title">ვინ ვართ ჩვენ</h2>
            <div className="about-story">
              <p>
                Underground Gym 2018 წელს დაარსდა — სივრცე, სადაც სერიოზული
                ვარჯიში ხდება ყოველ დღე. ჩვენ ვართ კომპაქტური, პრაქტიკული,
                მეგობრული გარემო ვაკის გულში.
              </p>
              <p>
                ჩვენი გუნდი — პროფესიონალი ტრენერები, რომლებიც მზად არიან
                დაგეხმარონ — დამწყებ სტუდენტიდან გამოცდილ სპორტსმენამდე.
              </p>
            </div>
          </div>
          <div className="placeholder-box placeholder-box--about-team" aria-label="გუნდის ფოტო">
            <div className="placeholder-box__content">
              <span className="placeholder-box__label">გუნდი</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <h2 className="section-title">ჩვენი ღირებულებები</h2>
          <div className="grid grid--3">
            {values.map((value) => (
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
            <p>
              ჩვენი დარბაზი ცნობილია მეგობრული ატმოსფეროთი. სტუმრები ხშირად
              აღნიშნავენ, რომ სწრაფად გრძნობენ თავს "ადგილობრივად". ვარჯიში
              ხმამაღალ მუსიკასა და გულწრფელ მხარდაჭერას შორის.
            </p>
            <p className="about-languages">
              ჩვენ ვსაუბრობთ ქართულად, ინგლისურად და რუსულად.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
