import React from "react";

const WHATSAPP_URL = "https://wa.me/15551234567?text=Hi%20SpyDishTest%2C%20I%27m%20interested!";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <DinersSection />
        <RestaurantsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="hero">
      <nav className="container nav">
        <a href="#" className="logo">
          <img
            src="https://storage.googleapis.com/tapthetable/assets/1406217/inbox/1000860753445699232/logo_spydish.png"
            alt="SpyDishTest logo mark"
          />
          <span>SpyDishTest</span>
        </a>
        <a className="btn primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          Start Now
        </a>
      </nav>

      <div className="hero-content">
        <h1>Unlock Smart Dining &amp; Data-Driven Growth</h1>
        <p>
          SpyDishTest is an intelligent WhatsApp bot that delights diners with personalized
          recommendations while empowering restaurants with real-time insights and marketing tools.
        </p>
        <a className="btn primary big" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          Chat on WhatsApp
        </a>
      </div>
    </header>
  );
}

function DinersSection() {
  return (
    <section className="strip alt">
      <div className="container grid">
        <div>
          <h2 className="section-title">
            For <span className="highlight">Diners</span>
          </h2>
          <ul className="list">
            <li>Explore restaurants tailored to your taste &amp; location.</li>
            <li>Discover trending dishes and curated menus nearby.</li>
            <li>Dive into reviews, rankings &amp; popularity insights.</li>
          </ul>
        </div>
        <div className="mockup">
          <img
            src="https://images.pexels.com/photos/11284242/pexels-photo-11284242.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"
            alt="Chat with SpyDishTest screen"
          />
        </div>
      </div>
    </section>
  );
}

function RestaurantsSection() {
  return (
    <section className="strip">
      <div className="container grid reverse">
        <div>
          <h2 className="section-title">
            For <span className="highlight">Restaurants</span>
          </h2>
          <ul className="list">
            <li>Competitor Pricing Intelligence &amp; Dish Ranking.</li>
            <li>Advanced Sentiment Analysis &amp; Heatmaps of diner interest.</li>
            <li>AI-driven notifications, smart pricing &amp; campaign optimization.</li>
            <li>Weekly executive reports delivered to your inbox.</li>
          </ul>
          <a className="btn secondary" href="#contact">
            Request Demo
          </a>
        </div>
        <div className="mockup">
          <img
            src="https://images.pexels.com/photos/5665662/pexels-photo-5665662.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"
            alt="Analytics dashboard"
          />
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const items = [
    {
      quote:
        "SpyDishTest boosted our dinner traffic by 35% in just two weeks. The insights are pure gold!",
      name: "Maria G.",
      role: "Owner, Casa Bella"
    },
    {
      quote:
        "Finally, a bot that actually understands my taste! Every suggestion has been spot-on.",
      name: "Daniel S.",
      role: "Foodie &amp; Reviewer"
    },
    {
      quote:
        "The competitor price alerts helped us adjust our menu fast—keeping us at the top of the market.",
      name: "Chef Aaron",
      role: "Head Chef, Urban Spoon"
    }
  ];
  return (
    <section className="strip alt">
      <div className="container testimonials">
        <h2 className="section-title">What People Are Saying</h2>
        <div className="cards">
          {items.map((t, i) => (
            <blockquote key={i}>
              <p>“{t.quote}”</p>
              <footer>
                <strong>{t.name}</strong>, {t.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="strip">
      <div className="container contact">
        <h2 className="section-title">Get in Touch</h2>
        <p>
          Interested in elevating your dining experience or boosting your restaurant’s performance?
          Drop us a message—our team will respond within 24 hours.
        </p>
        <form
          className="contact-form"
          action="mailto:gaorgaoe@gmail.com"
          method="post"
          encType="text/plain"
        >
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Email address" required />
          <textarea name="message" rows="4" placeholder="Tell us more…" required></textarea>
          <button className="btn primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="#" className="logo footer-logo">
            <img
              src="https://storage.googleapis.com/tapthetable/assets/1406217/inbox/1000860753445699232/logo_spydish.png"
              alt=""
            />
            <span>SpyDishTest</span>
          </a>
          <p className="small">
            &copy; {new Date().getFullYear()} SpyDishTest. All rights reserved.
          </p>
        </div>
        <ul className="social">
          <li>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              X / Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
