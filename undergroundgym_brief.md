# UndergroundGym Tbilisi — Website Brief

---

## 1. Project Overview

Build a multi-page static website for **UndergroundGym**, a serious strength and fitness gym located at 28 Nino Zhvania Street, Tbilisi, Georgia. The site is in **Georgian language only**. The tone is serious and confident — straightforward, no fluff. The design should look clean and professional, not over-designed.

---

## 2. Technical Stack

- **React + Vite** — standard setup via `npm create vite@latest`, select React
- **Pure CSS only** — no Tailwind, no CSS frameworks, no utility libraries
- All styles written in plain `.css` files, one per component or page where appropriate
- CSS custom properties (variables) defined in a global `:root` block in `index.css`
- **React Router** (`react-router-dom`) for client-side multi-page navigation
- **Google Fonts** loaded via `@import` in `index.css`
- Each "page" is a React component in a `src/pages/` folder
- Shared components (Navbar, Footer) live in `src/components/`
- Must be **fully mobile responsive** using standard CSS media queries
- Deploys to Netlify or Vercel via `npm run build` — output is the `dist/` folder

### Project Structure
```
undergroundgym/
├── public/
│   └── images/          ← placeholder image assets
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Services.jsx
│   │   ├── Services.css
│   │   ├── Pricing.jsx
│   │   ├── Pricing.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx          ← React Router routes defined here
│   ├── App.css
│   └── index.css        ← global CSS variables, resets, fonts
├── index.html
├── vite.config.js
└── package.json
```

### React Router Setup (App.jsx)
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
```

### Global CSS Variables (index.css)
```css
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Sans+Georgian:wght@300;400;600;700&display=swap');

:root {
  --color-bg:           #1a1a1a;
  --color-surface:      #242424;
  --color-surface2:     #2e2e2e;
  --color-border:       #3a3a3a;
  --color-accent:       #F5C518;
  --color-accent-hover: #e0b014;
  --color-text:         #f0f0f0;
  --color-muted:        #9a9a9a;
  --font-display:       'Bebas Neue', sans-serif;
  --font-body:          'Noto Sans Georgian', sans-serif;
  --max-width:          1100px;
  --section-padding:    64px 24px;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
}

h1, h2, h3 {
  font-family: var(--font-display);
  letter-spacing: 0.04em;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}
```

### Netlify Redirect Fix
Add a `_redirects` file inside the `public/` folder to fix React Router on Netlify:
```
/*    /index.html   200
```

---

## 3. Pages

| Component | Route | Georgian Title | Purpose |
|---|---|---|---|
| `Home.jsx` | `/` | მთავარი | Hero + gym intro |
| `About.jsx` | `/about` | ჩვენს შესახებ | Story, atmosphere, values |
| `Services.jsx` | `/services` | სერვისები | Equipment and training offered |
| `Pricing.jsx` | `/pricing` | ფასები | Membership tiers |
| `Contact.jsx` | `/contact` | კონტაქტი | Address, hours, map, phone, social |

---

## 4. Design Direction

### Aesthetic
**Clean dark gym site.** Professional, straightforward, and easy to read. Think of a well-designed local gym website — dark background, clear sections, yellow accents that pop. No gimmicks, no heavy textures. The kind of site that looks trustworthy and modern without trying too hard.

### Color Palette
```
--color-bg:        #1a1a1a   /* dark grey background — not pure black */
--color-surface:   #242424   /* card and section backgrounds */
--color-surface2:  #2e2e2e   /* slightly lighter for hover states and nested cards */
--color-border:    #3a3a3a   /* borders and dividers */
--color-accent:    #F5C518   /* yellow — matches their logo */
--color-accent-hover: #e0b014 /* slightly darker yellow for hover */
--color-text:      #f0f0f0   /* primary text */
--color-muted:     #9a9a9a   /* secondary/caption text */
```

### Typography
- **Display / headings:** `Bebas Neue` (Google Fonts) — tall, condensed, strong. Good for section titles and the hero.
- **Body text:** `Noto Sans Georgian` (Google Fonts) — clean, readable, supports Georgian script properly.
- Headings: large but not overwhelming. Moderate letter-spacing on section labels.
- Yellow (`--color-accent`) used sparingly — on prices, key stats, active nav links, and one word in the hero heading.

### Effects & Details
- No grain, no textures — clean flat surfaces
- Thin **yellow bottom border** on the active navigation link
- Cards with a subtle border (`1px solid #3a3a3a`) and a slight yellow left border on hover
- Smooth scroll behavior on anchor links
- Button style: solid yellow background (`#F5C518`), black text, slightly rounded corners (`border-radius: 4px`) — standard and clean

### Layout
- Standard full-width sections, alternating between `--color-bg` and `--color-surface` for visual separation
- Centered content with a max-width of `1100px`
- Consistent padding (`64px` vertical on desktop, `40px` on mobile)
- Simple two-column layouts where needed (text left, content right), single column on mobile

---

## 5. Navigation — `Navbar.jsx`

```
Logo / Name: "UNDERGROUND GYM"  ← styled in var(--font-display), var(--color-accent)
Links: მთავარი | ჩვენს შესახებ | სერვისები | ფასები | კონტაქტი
```
- Use React Router `<NavLink>` for all links — it automatically applies an `active` class to the current page link
- Sticky top navigation, background `var(--color-bg)`, bottom border `1px solid var(--color-border)`
- Active link: `color: var(--color-accent)` and `border-bottom: 2px solid var(--color-accent)`
- Hamburger menu on mobile (toggle with `useState`), links stack vertically in a dropdown

---

## 6. Page-by-Page Content

---

### PAGE 1 — `Home.jsx` (მთავარი)

**Hero Section**
```
Heading:     მოამზადე სხეული.
             გაამაგრე ნება.
Subheading:  სატრენაჟორო დარბაზი ვაკეში — 2018 წლიდან.
```
- Full-width dark grey hero, large Bebas Neue heading, yellow accent on one word
- Two buttons below heading:
  - Primary: `ფასების ნახვა` → React Router `<Link to="/pricing">` (solid yellow button, black text)
  - Secondary: `დარეკე ახლავე` → `<a href="tel:+995591444063">` (outlined button, yellow border and text)

**Quick Stats Strip**
Four stats in a horizontal band, yellow numbers, Georgian labels:
```
2018       |  07:00 – 22:00  |  120₾    |  ყველა დონე
დაარსდა    |  ყოველდღე        |  თვიური  |  მისასვლელი
```

**Intro Section**
```
Heading:   სერიოზული ვარჯიში. ნამდვილი შედეგები.

Body:      Underground Gym არის სივრცე მათთვის, ვინც სერიოზულად
           ვარჯიშობს. ვაკეში, ნინო ჟვანიას ქუჩაზე, ჩვენ 2018 წლიდან
           ვქმნით გარემოს, სადაც ყველა — დამწყებიდან გამოცდილ
           სპორტსმენამდე — თავს ადგილზე გრძნობს.
```

**Services Preview** (3 cards linking to services.html)
```
Card 1:  სიძლიერის ვარჯიში    — თავისუფალი წონები, ოლიმპიური შტანგები, მძიმე დისკები
Card 2:  კარდიო და ფიტნესი    — თანამედროვე აღჭურვილობა, ყველა დონისთვის
Card 3:  პირადი მწვრთნელი     — ინდივიდუალური პროგრამა, პროფესიონალი ტრენერი
```

**Review Strip**
Pull 3 real reviews, display as dark cards (`#242424`) with a yellow quotation mark and subtle border:
```
Review 1: "ეს ჩემი საყვარელი ადგილია ქალაქში. ძალიან კარგი
           გარემო, ტრენერები და მეგობრული ატმოსფერო."
           — Google Maps

Review 2: "საუკეთესო სპორტდარბაზი თბილისში. ძალიან კომფორტული
           და ვარიანტებით სავსე."
           — Google Maps

Review 3: "პერსონალი, განსაკუთრებით ტრენერი დაღა, მეგობრული და
           კვალიფიციურია. სუფთა დარბაზი, კარგი აღჭურვილობა."
           — Google Maps
```

---

### PAGE 2 — `About.jsx` (ჩვენს შესახებ)

**Hero**
```
Heading:  2018 წლიდან. ვაკეში. ჩვენთვის.
```

**Story Section**
```
Heading:  ვინ ვართ ჩვენ

Body:     Underground Gym 2018 წელს დაარსდა — სივრცე, სადაც
           სერიოზული ვარჯიში ხდება ყოველ დღე. ჩვენ ვართ კომპაქტური,
           პრაქტიკული, მეგობრული გარემო ვაკის გულში.

           ჩვენი გუნდი — პროფესიონალი ტრენერები, რომლებიც მზად
           არიან დაგეხმარონ — დამწყებ სტუდენტიდან გამოცდილ
           სპორტსმენამდე.
```

**Values — 3 column cards**
```
სიწმინდე        სუფთა გარემო, ყოველ დღე
პროფესიონალიზმი  კვალიფიციური ტრენერები, ინდივიდუალური მიდგომა
საზოგადოება     ქართველი და უცხოელი წევრები — ერთი გუნდი
```

**Atmosphere Note**
```
Body:  ჩვენი დარბაზი ცნობილია მეგობრული ატმოსფეროთი. სტუმრები
        ხშირად აღნიშნავენ, რომ სწრაფად გრძნობენ თავს "ადგილობრივად".
        ვარჯიში ხმამაღალ მუსიკასა და გულწრფელ მხარდაჭერას შორის.
```

**Languages note (subtle)**
```
ჩვენ ვსაუბრობთ ქართულად, ინგლისურად და რუსულად.
```

---

### PAGE 3 — `Services.jsx` (სერვისები)

**Hero**
```
Heading:  ყველაფერი, რაც გჭირდება.
```

**Services Grid — 6 cards**
```
1. სიძლიერის ვარჯიში
   ოლიმპიური შტანგები, მძიმე დისკები, თავისუფალი წონები.
   სრული სიძლიერის ზონა სერიოზული ვარჯიშისთვის.

2. ფიტნეს მანქანები
   თანამედროვე სიმულატორები და ტრენაჟორები — ყველა კუნთის
   ჯგუფისთვის.

3. კარდიო ზონა
   კარდიო აღჭურვილობა ვარჯიშის დასაწყებად ან
   დასასრულებლად.

4. პირადი მწვრთნელი
   პროფესიონალი ტრენერი შეგიმუშავებს ინდივიდუალურ
   პროგრამას შენი მიზნის მიხედვით.

5. გამოსაცვლელი ოთახი და შხაპი
   სუფთა გამოსაცვლელი ოთახი, ბოქსები, შხაპი.

6. უფასო Wi-Fi
   სწრაფი ინტერნეტი დარბაზში.
```

**Note section (small text, muted)**
```
* დღიური გადასვლის ფასი და პირადი ტრენინგის ღირებულება —
  გთხოვთ, დაგვიკავშირდეთ პირდაპირ.
```

---

### PAGE 4 — `Pricing.jsx` (ფასები)

**Hero**
```
Heading:  გახდი წევრი.
```

**Pricing Cards — 4 cards in a grid**

```
┌─────────────────────┐
│  2 კვირა            │
│  70 ₾               │  ← accent yellow on price
│  ულიმიტო წვდომა     │
│  ყველა სერვისი      │
└─────────────────────┘

┌─────────────────────┐  ← this card highlighted (POPULAR)
│  1 თვე              │
│  120 ₾              │
│  ულიმიტო წვდომა     │
│  ყველა სერვისი      │
└─────────────────────┘

┌─────────────────────┐
│  3 თვე              │
│  300 ₾              │
│  ულიმიტო წვდომა     │
│  ყველა სერვისი      │
└─────────────────────┘

┌─────────────────────┐
│  1 წელი             │
│  1080 ₾             │
│  ულიმიტო წვდომა     │
│  ყველა სერვისი      │
└─────────────────────┘
```

Below cards:
```
Note:  დღიური ბილეთისა და პირადი ტრენინგის ფასის გასაგებად
       დაგვიკავშირდით პირდაპირ.
```

**Payment note:**
```
მიღება:  ნაღდი და უნაღდო გადახდა
```

---

### PAGE 5 — `Contact.jsx` (კონტაქტი)

**Hero**
```
Heading:  მოგვიდი.
```

**Two-column layout:**

Left column — Contact Info:
```
📞 ტელეფონი:
   +995 591 44 40 63
   +995 555 20 24 50
   +995 557 66 52 22

✉️ ელ-ფოსტა:
   undergroundgym28@gmail.com

📍 მისამართი:
   ნინო ჟვანიას ქუჩა 28
   თბილისი, საქართველო

🕐 სამუშაო საათები:
   ორშაბათი – შაბათი:  07:00 – 22:00
   კვირა:              07:00 – 21:30
```

Social links:
```
Instagram: @undergroundgym28
Facebook:  UndergroundGym
```

Right column:
- **Embedded Google Map** centered on 28 Nino Zhvania St, Tbilisi
- Map embed should be dark-styled if possible (dark iframe or CSS filter: invert/hue-rotate trick)

**Directions Note** (important — gym is hard to find):
```
⚠️ როგორ მოვიდე?
   სპორტდარბაზი მდებარეობს სავარაუდოდ საცხოვრებელ კორპუსთან
   ახლოს. თუ ვერ პოულობთ — დარეკეთ და მოგვახსენეთ,
   სად ხართ. მოვა ვინმე.
```

---

## 7. Footer (Shared Across All Pages)

```
UNDERGROUND GYM
ნინო ჟვანიას ქუჩა 28, თბილისი

Instagram | Facebook

© 2024 Underground Gym. ყველა უფლება დაცულია.
```

Dark grey background (`#1a1a1a`), top border (`1px solid #3a3a3a`), muted text, yellow on gym name.

---

## 8. Placeholder Notes for Builder

The following items are **intentionally left as placeholders** — do not invent or guess:

- `[LOGO_IMAGE]` — gym logo (yellow, to be provided by owner)
- `[GYM_PHOTO_1]`, `[GYM_PHOTO_2]` etc. — interior/equipment photos
- `[TRAINER_PHOTO]` — photo of Dagha or team
- Day pass price — show as "დაგვიკავშირდით" (contact us)
- Personal training price — same

Use grey placeholder boxes (`background: #2e2e2e; border: 1px dashed #F5C518`) where images will go.

---

## 9. Fonts

Load via `@import` at the top of `index.css` — already included in the Global CSS Variables block in Section 2. No separate `<link>` tag needed in `index.html` since Vite handles CSS imports.

---

## 10. Deployment

```bash
npm run build        # outputs to dist/
```

Deploy the `dist/` folder to Netlify (drag and drop or connect GitHub repo). Remember the `public/_redirects` file from Section 2 — without it, direct URL visits to `/about`, `/pricing` etc. will return a 404 on Netlify.

---

## 11. Tone Reminders for the Builder

- No emojis in body text (the contact page icons are fine as UI elements)
- No exclamation marks — serious tone, statements not cheerleading
- Georgian script must render correctly — always use `Noto Sans Georgian`
- Do not add services that are not listed (no boxing, no CrossFit, no nutrition plans)
- Do not add pricing that is not confirmed (no day pass number)
- Keep copy tight — this gym doesn't over-explain itself
