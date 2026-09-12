import { useEffect, useState } from "react";
import "./App.css";
import "./social.css";
import "./glass.css";

const whatsapp = "https://wa.me/254797033262";
const instagram = "https://www.instagram.com/cliqadventures/";
const facebook = "https://www.facebook.com/cliqadventures/";
const tiktok = "https://www.tiktok.com/@cliqadventures";
const whatsappChat = (message) =>
  `${whatsapp}?text=${encodeURIComponent(message)}`;
const storyLinks = [
  "https://en.wikipedia.org/wiki/Maasai_Mara",
  "https://en.wikipedia.org/wiki/Swahili_coast",
];
const storySections = [
  {
    title: "It started with a simple idea",
    image: "/Photos-Cliq/Family%20crew.jpeg",
    alt: "Friends celebrating outdoors",
    paragraphs: [
      "Travel should mean more than just going somewhere.",
      "At Cliq Adventures, we believe some of life’s best memories are made when we step away from the familiar, discover new places, and share experiences with the people who matter.",
      "Our journey began with a passion for creating experiences that bring people together. From the energy of a Mombasa yacht party to unforgettable getaways along the Kenyan coast, we started building Cliq around one simple belief: every journey has a story waiting to be created.",
    ],
  },
  {
    title: "More than a trip",
    image: "/Photos-Cliq/children%20at%20the%20beach.jpeg",
    alt: "Children enjoying a day at the beach",
    paragraphs: [
      "We don’t believe travel is just about booking a hotel, arranging transport, or choosing a destination.",
      "It’s about the laughter on the journey. The conversations that would not have happened anywhere else. The first view of the ocean. The team that became closer. The birthday that became unforgettable.",
      "We bring together the planning, logistics, accommodation, activities and experiences so our clients can focus on what matters most: enjoying the moment.",
    ],
  },
  {
    title: "Growing through every journey",
    image: "/Photos-Cliq/Team%20building%20activity..jpeg",
    alt: "Cliq team enjoying a group activity outdoors",
    paragraphs: [
      "Today, Cliq Adventures works with individuals, couples, families, friends, companies, schools and groups to turn travel ideas into carefully planned experiences.",
      "No two journeys are the same. A corporate retreat needs different planning from a honeymoon, and a family holiday has different priorities from an adventure weekend. We listen first, then create the experience around you.",
    ],
  },
  {
    title: "Our Kenyan roots",
    image: "/Photos-Cliq/Nairobi%20National%20park.jpeg",
    alt: "Travellers beside a safari vehicle",
    paragraphs: [
      "From the beaches of Mombasa, Diani and Nyali to Naivasha, Nanyuki, Nakuru and the Maasai Mara, adventure does not always require a passport.",
      "We are proud to showcase the beauty and experiences available within Kenya while helping our clients discover destinations beyond our borders. Our ambition is to make travel more accessible, exciting and memorable, starting from home and reaching wherever the next adventure takes us.",
    ],
  },
  {
    title: "Where we’re going",
    image: "/Photos-Cliq/rift%20valley%20escapades.jpeg",
    alt: "Flamingos across a Rift Valley lake",
    paragraphs: [
      "Cliq Adventures is still growing. Our vision is to build more than a travel company: a community and platform where people can discover experiences, connect with destinations, plan trips and create memories with less stress and more confidence.",
      "One thing will never change: people will always want to experience something beautiful, share it with others, and have a story worth telling. And we want Cliq Adventures to be part of that story.",
    ],
  },
];
const categories = [
  "All escapes",
  "Safari",
  "Coastal",
  "Family",
  "Couples",
  "Corporate",
  "Zumba",
  "International",
  "Flights",
];
const packages = [
  {
    title: "Maasai Mara in Full Colour",
    category: "Safari",
    price: "KES 34,500",
    meta: "3 days / 2 nights",
    hook: "Big skies, golden light, unforgettable wildlife.",
    image: "/Photos-Cliq/Maasai%20Mara%20p1.jpeg",
  },
  {
    title: "Mombasa Weekend Getaway",
    category: "Coastal",
    price: "KES 13,999",
    meta: "2 days / 1 night",
    hook: "A yacht party, warm water and zero ordinary.",
    image: "/Photos-Cliq/Mombasa%20kids%20photo.jpeg",
  },
  {
    title: "North Coast Expedition",
    category: "Family",
    price: "KES 21,500",
    meta: "4 days / 3 nights",
    hook: "Malindi to Watamu, made for curious families.",
    image: "/Photos-Cliq/children%20at%20the%20beach.jpeg",
  },
  {
    title: "Bariki Mzazi Trip",
    category: "Family",
    price: "From KES 21,000",
    meta: "3 days / 2 nights",
    hook: "Comfortable, reliable transfers for family trips and special moments.",
    image: "/Photos-Cliq/Family%20weekend%20photo.jpeg",
  },
  {
    title: "Kids Affair Event",
    category: "Family",
    price: "From KES 7,800",
    meta: "Family event",
    hook: "A joyful day planned around play, connection and memorable family moments.",
    image: "/Photos-Cliq/kids%20affair.jpeg",
  },
  {
    title: "Diani Slow Weekend",
    category: "Couples",
    price: "KES 18,900",
    meta: "3 days / 2 nights",
    hook: "Barefoot mornings and a little more time together.",
    image: "/Photos-Cliq/ilovediani.jpeg",
  },
  {
    title: "Anniversary / Birthday Custom Package",
    category: "Couples",
    price: "From KES 10,000",
    meta: "2 days / 1 night",
    hook: "A beautiful reason to celebrate, made around you.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Adrenaline Day Trip",
    category: "Safari",
    price: "From KES 5,999",
    meta: "1 day adventure",
    hook: "Big energy, wild views and a full day out of office.",
    image: "/Photos-Cliq/adrenaline%20rush%20photo.jpeg",
  },
  {
    title: "Suswa Day Trip",
    category: "Safari",
    price: "From KES 2,500",
    meta: "Day trip",
    hook: "Rift Valley views, fresh air and an easy escape from the city.",
    image: "/Photos-Cliq/Namanga%20photo.jpeg",
  },
  {
    title: "Nairobi National Park Daily Transfers",
    category: "Safari",
    price: "From KES 5,500",
    meta: "Daily transfer",
    hook: "Easy city-to-safari transfers for a day among Nairobi’s wild side.",
    image: "/Photos-Cliq/Nairobi%20National%20park.jpeg",
  },
  {
    title: "Naivasha / Olkaria Escape",
    category: "Safari",
    price: "From KES 2,999",
    meta: "Day trip",
    hook: "A refreshing Rift Valley escape with scenic views, open air and time to unwind.",
    image: "/Photos-Cliq/naivasha%20olkaria.jpeg",
  },
  {
    title: "Amboseli + Tsavo East / West Safari",
    category: "Safari",
    price: "From KES 15,000",
    meta: "3 days / 2 nights",
    hook: "Elephants, red earth and three iconic Kenyan landscapes.",
    image: "/Photos-Cliq/Maasai%20mara%20p2.jpeg",
  },
  {
    title: "Samburu Team Escape",
    category: "Corporate",
    price: "From KES 10,500",
    meta: "2 days / 1 night",
    hook: "A wild reset for teams ready to reconnect and recharge.",
    image: "/Photos-Cliq/samburu%20affair.jpeg",
  },
  {
    title: "Corporate Escapades",
    category: "Corporate",
    price: "From KES 19,999",
    meta: "3 days / 2 nights",
    hook: "A thoughtfully planned team escape built for connection, energy and fresh perspective.",
    image: "/Photos-Cliq/corporate%20escapades.jpeg",
  },
  {
    title: "Namanga Zumba Day Trip",
    category: "Zumba",
    price: "From KES 3,300",
    meta: "Day trip",
    hook: "Move, sweat, laugh and make a full day of it together.",
    image: "/Photos-Cliq/namanga%20escapades.jpeg",
  },
  {
    title: "The Great Rift Reset",
    category: "Corporate",
    price: "From KES 28,000",
    meta: "Custom itinerary",
    hook: "An off-site your team will actually talk about.",
    image: "/Photos-Cliq/rift%20valley%20escapades.jpeg",
  },
  {
    title: "Zanzibar, Unscripted",
    category: "International",
    price: "From KES 49,500",
    meta: "5 days / 4 nights",
    hook: "Spice, sea and the kind of stories you keep.",
    image: "/Photos-Cliq/znz%20affair.jpeg",
  },
  {
    title: "Dubai City Escape",
    category: "International",
    price: "From KES 105,000",
    meta: "5 days / 4 nights",
    hook: "Skyline views, desert horizons and a city that never slows down.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Tanzania: Moshi + Arusha",
    category: "International",
    price: "From KES 15,000",
    meta: "3 days / 2 nights",
    hook: "Mountain air, open roads and the warm welcome of northern Tanzania.",
    image: "/Photos-Cliq/arusha%20photo.jpeg",
  },
  {
    title: "Jambojet + Kenya Airways Flights",
    category: "Flights",
    price: "Request a fare",
    meta: "Small groups to large bookings",
    hook: "We book flights to cities across Kenya and beyond, with Jambojet and Kenya Airways.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=85",
  },
];
const testimonials = [
  {
    quote:
      "Cliq took care of every little detail. We just showed up, laughed a lot, and came home with stories.",
    name: "Wanjiku M.",
    detail: "Mombasa weekend, 2026",
  },
  {
    quote:
      "Our team came back genuinely recharged. It was organized, relaxed and felt completely like us.",
    name: "Brian K.",
    detail: "Team retreat, Nairobi",
  },
  {
    quote:
      "The kids are still talking about the giraffes. Best family decision we made all year.",
    name: "Miriam O.",
    detail: "Maasai Mara escape",
  },
];
const featuredWeekendPhoto = "/Photos-Cliq/Family%20weekend%20photo.jpeg";

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Cliqadventures home">
      <img
        src="/cliq-logo/cliq%20adventures%20best%20logo.png"
        alt="Cliq Adventures - Escaping the Ordinary"
      />
    </a>
  );
}
function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
function SocialIcon({ name }) {
  if (name === "Instagram")
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" className="social-dot" />
      </svg>
    );
  if (name === "Facebook")
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 21v-8h2.75l.4-3H14V8.1c0-.87.24-1.46 1.5-1.46h1.75V4a23 23 0 0 0-2.55-.13C12.18 3.87 10 5.54 10 8.6V10H7.5v3H10v8h4Z" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.2 4c.25 2.1 1.42 3.35 3.3 3.48v3.02a8.5 8.5 0 0 1-3.28-.75v5.68a5.3 5.3 0 1 1-4.58-5.25v3.1a2.3 2.3 0 1 0 1.58 2.15V4h2.98Z" />
    </svg>
  );
}

function App() {
  const [activeCategory, setActiveCategory] = useState("All escapes");
  const [testimonial, setTestimonial] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("experiences");
  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 24);
      const scrollMarker = window.scrollY + window.innerHeight * 0.35;
      const sectionIds = [
        "experiences",
        "why-cliq",
        "corporate",
        "story",
        "journal",
      ];
      const currentSection = sectionIds
        .map((sectionId) => document.getElementById(sectionId))
        .filter(Boolean)
        .filter((section) => section.offsetTop <= scrollMarker)
        .at(-1);
      setActiveSection(currentSection?.id || "experiences");
    };
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);
  useEffect(() => {
    document
      .querySelectorAll(".journal-grid article a")
      .forEach((link, index) => {
        link.href = storyLinks[index] || storyLinks[0];
        link.target = "_blank";
        link.rel = "noreferrer";
      });
  }, []);
  useEffect(() => {
    const socialLinks = document.querySelector(".footer-social-links");
    if (!socialLinks) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          socialLinks.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(socialLinks);
    return () => observer.disconnect();
  }, []);
  const visiblePackages =
    activeCategory === "All escapes"
      ? packages
      : packages.filter((item) => item.category === activeCategory);
  const handleQuoteSubmit = async (event) => {
    event.preventDefault();
    setFormStatus("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("form-name", "quote-request");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  };
  return (
    <div id="top">
      <header className={isScrolled ? "site-header scrolled" : "site-header"}>
        <Logo />
        <nav
          className={menuOpen ? "nav-links open" : "nav-links"}
          aria-label="Main navigation"
        >
          <a
            className={activeSection === "experiences" ? "active" : ""}
            href="#experiences"
            onClick={() => setMenuOpen(false)}
          >
            Experiences
          </a>
          <a
            className={activeSection === "why-cliq" ? "active" : ""}
            href="#why-cliq"
            onClick={() => setMenuOpen(false)}
          >
            Why Cliq
          </a>
          <a
            className={activeSection === "corporate" ? "active" : ""}
            href="#corporate"
            onClick={() => setMenuOpen(false)}
          >
            Corporate
          </a>
          <a
            className={activeSection === "story" ? "active" : ""}
            href="#story"
            onClick={() => setMenuOpen(false)}
          >
            Our story
          </a>
          <a
            className={activeSection === "journal" ? "active" : ""}
            href="#journal"
            onClick={() => setMenuOpen(false)}
          >
            Journal
          </a>
          <a
            className="nav-cta"
            href="#quote"
            onClick={() => setMenuOpen(false)}
          >
            Get a quote <Arrow />
          </a>
        </nav>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </header>
      <main>
        <section className="hero">
          <div className="hero-image" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow light">Kenya, made unforgettable</p>
            <h1>
              Escaping
              <br />
              <em>the Ordinary.</em>
            </h1>
            <p className="hero-copy">
              Thoughtfully planned adventures for the moments you will talk
              about for years.
            </p>
            <div className="hero-actions">
              <a className="button orange" href="#quote">
                Get a quote <Arrow />
              </a>
              <a className="text-link light" href="#experiences">
                Explore experiences <span>↓</span>
              </a>
            </div>
          </div>
          <div className="hero-note">
            <span className="scroll-line" />
            Scroll to wander
          </div>
        </section>
        <section className="intro section-pad">
          <div className="section-kicker">01 / The Cliq way</div>
          <div className="intro-grid">
            <h2>
              Travel should feel
              <br />
              <em>like a story.</em>
            </h2>
            <div>
              <p className="lead">
                The best trips are not just places on a map. They are the rush
                of a first view, the belly laugh over dinner, the feeling that
                time got a little softer.
              </p>
              <p>
                From a weekend on the coast to a week beneath the savannah sun,
                we plan the details so you can be fully in the moment. We also
                book Jambojet and Kenya Airways flights to different cities for
                individuals, small groups and large bookings. Welcome to travel,
                the Cliq way.
              </p>
              <a className="underlined-link" href="#story">
                Meet the people behind the adventures <Arrow />
              </a>
            </div>
          </div>
        </section>
        <section className="featured">
          <div
            className="featured-image"
            style={{ backgroundImage: `url("${featuredWeekendPhoto}")` }}
          />
          <div className="featured-panel">
            <p className="eyebrow">Limited escape · September 2026</p>
            <h2>
              Mombasa
              <br />
              <em>Weekend Getaway</em>
            </h2>
            <p>
              A yacht party on the Indian Ocean. Sun-warmed afternoons. Your new
              favourite people.
            </p>
            <div className="featured-price">
              <strong>KES 13,999</strong>
              <span>per person · all in</span>
            </div>
            <a className="button orange" href="#quote">
              I want in <Arrow />
            </a>
          </div>
        </section>
        <section id="experiences" className="section-pad packages-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / Find your way out</p>
              <h2>
                Choose your <em>escape.</em>
              </h2>
            </div>
            <a className="underlined-link desktop-only" href="#quote">
              Get a quote <Arrow />
            </a>
          </div>
          <div
            className="filters"
            role="tablist"
            aria-label="Filter experiences"
          >
            {categories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="package-grid">
            {visiblePackages.map((item) => (
              <article className="package-card" key={item.title}>
                <div className="card-image">
                  <img src={item.image} alt={item.title} />
                  <span className="card-category">{item.category}</span>
                </div>
                <div className="card-body">
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.hook}</p>
                  </div>
                  <div className="card-meta">
                    <span>{item.meta}</span>
                    <strong>{item.price}</strong>
                  </div>
                  <div className="card-actions">
                    <a href="#quote">
                      Get a quote <Arrow />
                    </a>
                    <a
                      href={whatsappChat(
                        `Hi Cliqadventures! I am interested in the ${item.title} experience. Please share the details.`,
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="trust-bar">
          <div>
            <strong>500+</strong>
            <span>happy travellers</span>
          </div>
          <div>
            <strong>★ 4.9</strong>
            <span>average trip rating</span>
          </div>
          <div>
            <strong>M-PESA</strong>
            <span>till 9799143</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>local expertise</span>
          </div>
        </section>
        <section id="why-cliq" className="why-cliq section-pad">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / Why book with us</p>
              <h2>
                More than a booking.
                <br />
                <em>A better way to travel.</em>
              </h2>
            </div>
            <p className="why-cliq-intro">
              We make the planning feel clear, personal and dependable, so you
              can look forward to the journey instead of worrying about the
              details.
            </p>
          </div>
          <div className="why-cliq-grid">
            <article>
              <strong>01</strong>
              <h3>Local knowledge</h3>
              <p>
                We know the destinations, routes and experiences that make a
                trip feel special, from Kenyan getaways to international plans.
              </p>
            </article>
            <article>
              <strong>02</strong>
              <h3>Everything in one place</h3>
              <p>
                We coordinate transport, accommodation, activities and flights
                with Jambojet or Kenya Airways around one clear travel plan.
              </p>
            </article>
            <article>
              <strong>03</strong>
              <h3>Made for your group</h3>
              <p>
                Whether you are travelling alone, with family, in a small group
                or making a large booking, we shape the plan around you.
              </p>
            </article>
            <article>
              <strong>04</strong>
              <h3>Real human support</h3>
              <p>
                You can speak to a team that listens, answers your questions
                and stays close from your first inquiry to your return home.
              </p>
            </article>
          </div>
          <a className="button orange" href="#quote">
            Get a quote <Arrow />
          </a>
        </section>
        <section id="corporate" className="corporate">
          <div className="corporate-image" />
          <div className="corporate-content">
            <p className="eyebrow">03 / For teams that go further</p>
            <h2>
              Off-site
              <br />
              <em>done right.</em>
            </h2>
            <p className="lead">
              Your best people deserve more than a conference room. We create
              team experiences that boost morale, build connection and give
              everyone something to come back with.
            </p>
            <div className="stat-row">
              <div>
                <strong>+32%</strong>
                <span>team connection</span>
              </div>
              <div>
                <strong>2.4×</strong>
                <span>more memorable</span>
              </div>
            </div>
            <a className="button dark" href="#quote">
              Get a quote <Arrow />
            </a>
          </div>
        </section>
        <section className="testimonial-section section-pad">
          <div className="section-kicker">04 / Kind words</div>
          <div className="testimonial-grid">
            <div>
              <p className="eyebrow">From the road</p>
              <div className="stars">★★★★★</div>
              <blockquote>“{testimonials[testimonial].quote}”</blockquote>
              <p className="testimonial-author">
                <strong>{testimonials[testimonial].name}</strong>
                <span>{testimonials[testimonial].detail}</span>
              </p>
              <div className="slider-controls">
                <button
                  onClick={() =>
                    setTestimonial(
                      (testimonial - 1 + testimonials.length) %
                        testimonials.length,
                    )
                  }
                  aria-label="Previous testimonial"
                >
                  ←
                </button>
                <span>
                  0{testimonial + 1} / 0{testimonials.length}
                </span>
                <button
                  onClick={() =>
                    setTestimonial((testimonial + 1) % testimonials.length)
                  }
                  aria-label="Next testimonial"
                >
                  →
                </button>
              </div>
            </div>
            <div className="quote-image">
              <img
                src="/Photos-Cliq/cliqstory.jpeg"
                alt="Cliq Adventures story"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </section>
        <section id="story" className="story section-pad">
          <div className="story-image">
            <video
              controls
              muted
              playsInline
              loop
              preload="metadata"
              aria-label="Cliq Adventures brand video"
            >
              <source src="/Photos-Cliq/cliq-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="story-copy">
            <p className="eyebrow">05 / Our story</p>
            <h2>
              Family escapades,
              <br />
              <em>in every sense.</em>
            </h2>
            <p className="lead">
              Cliqadventures started with a simple belief: unforgettable travel
              should feel possible to more people.
            </p>
            <p>
              We are a Kenyan family business obsessed with the small details,
              the honest recommendations and the magic that happens when a plan
              is well made. Affordable, memorable, well-organized and always
              human.
            </p>
            <a className="underlined-link" href="#our-story">
              More about our story <Arrow />
            </a>
          </div>
        </section>
        <section id="our-story" className="our-story section-pad">
          <div className="section-kicker">05.1 / The full story</div>
          <div className="story-reading">
            <p className="eyebrow">Our story</p>
            <h2>
              Your next story
              <br />
              <em>could start here.</em>
            </h2>
            {storySections.map((part) => (
              <article key={part.title}>
                <img src={part.image} alt={part.alt} />
                <div>
                  <h3>{part.title}</h3>
                  {part.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
            <a className="button orange" href="#quote">
              Get a quote <Arrow />
            </a>
          </div>
        </section>
        <section id="journal" className="journal section-pad">
          <div className="section-heading">
            <div>
              <p className="eyebrow">06 / The travel journal</p>
              <h2>
                Notes for the <em>curious.</em>
              </h2>
            </div>
            <a className="underlined-link desktop-only" href="#journal">
              View all stories <Arrow />
            </a>
          </div>
          <div className="journal-grid">
            <article>
              <img
                src="/Photos-Cliq/Maasai%20Mara%20p1.jpeg"
                alt="Safari vehicle in the Maasai Mara"
              />
              <p className="eyebrow">Safari · 08 min read</p>
              <h3>Best time to visit the Maasai Mara</h3>
              <a href="#quote">
                Read story <Arrow />
              </a>
            </article>
            <article>
              <img
                src="/Photos-Cliq/ilovediani.jpeg"
                alt="Travellers enjoying the Kenyan coast in Diani"
              />
              <p className="eyebrow">Coast · 06 min read</p>
              <h3>The Kenya Coast guide: beyond the beach</h3>
              <a href="#quote">
                Read story <Arrow />
              </a>
            </article>
          </div>
        </section>
        <section id="quote" className="quote-section">
          <div className="quote-intro">
            <p className="eyebrow light">07 / Your next escape</p>
            <h2>
              Ready to go
              <br />
              <em>somewhere unforgettable?</em>
            </h2>
            <p>
              Tell us what you are dreaming about. We will take it from there.
            </p>
            <p className="brand-story">
              From weekend escapes to once-in-a-lifetime journeys.
            </p>
            <a
              className="whatsapp-link"
              href={whatsappChat(
                "Hi Cliqadventures! I would like help planning my next escape.",
              )}
              target="_blank"
              rel="noreferrer"
            >
              <svg className="whatsapp-mark" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.66 15L2 22l5.17-1.31A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.08-1.12l-.29-.17-3.07.78.82-2.99-.19-.3A8 8 0 1 1 12 20Z" />
                <path d="M16.7 13.5c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.7-.14-.25-.01-.39.11-.52.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.02 2.6c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.42 1.43.54.6.19 1.15.16 1.58.1.48-.07 1.48-.61 1.69-1.2.21-.59.21-1.09.15-1.2-.06-.11-.23-.17-.48-.29Z" />
              </svg>{" "}<strong>Chat on WhatsApp ↗</strong>
            </a>
          </div>
          <form
            className="quote-form"
            name="quote-request"
            method="POST"
            data-netlify="true"
            onSubmit={handleQuoteSubmit}
          >
            <input type="hidden" name="form-name" value="quote-request" />
            <div className="form-row">
              <label>
                Your name
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                />
              </label>
              <label>
                Phone / WhatsApp
                <input
                  type="tel"
                  name="phone"
                  placeholder="+254 700 000 000"
                  required
                />
              </label>
            </div>
            <div className="form-row">
              <label>
                Where are you going?
                <select name="destination">
                  <option>Choose an escape</option>
                  <option>Safari</option>
                  <option>Kenya Coast</option>
                  <option>International</option>
                  <option>Corporate / team-building</option>
                  <option>Flight booking - Jambojet</option>
                  <option>Flight booking - Kenya Airways</option>
                </select>
              </label>
              <label>
                When are you thinking?
                <input
                  type="text"
                  name="dates"
                  placeholder="e.g. August 2026"
                />
              </label>
            </div>
            <div className="form-row">
              <label>
                Group size
                <select name="group-size">
                  <option>Just me</option>
                  <option>2 people</option>
                  <option>3–6 people</option>
                  <option>7–15 people</option>
                  <option>16+ people</option>
                  <option>Large booking / 16+ travellers</option>
                </select>
              </label>
              <label>
                Budget per person
                <select name="budget">
                  <option>Choose a range</option>
                  <option>Under KES 20,000</option>
                  <option>KES 20,000–50,000</option>
                  <option>KES 50,000+</option>
                </select>
              </label>
            </div>
            <label className="message-field">
              Tell us about your plans
              <textarea
                name="message"
                placeholder="Tell us what you would like help planning"
                rows="4"
              />
            </label>
            <button className="button orange" type="submit" disabled={formStatus === "sending"}>
              {formStatus === "sending" ? "Sending..." : "Get a quote"} <Arrow />
            </button>
            {formStatus === "success" && (
              <p className="form-status success" role="status">
                Thank you. Your inquiry has been sent, and our team will be in touch.
              </p>
            )}
            {formStatus === "error" && (
              <p className="form-status error" role="alert">
                We could not send your inquiry. Please try again or use WhatsApp.
              </p>
            )}
            <p className="form-trust">
              No commitment. Just tell us what you are imagining.
              <br />
              Your details stay private with us.
            </p>
          </form>
        </section>
      </main>
      <a
        className="floating-whatsapp"
        href={whatsappChat(
          "Hi Cliqadventures! I found you on your website and would like to plan an escape.",
        )}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Cliqadventures on WhatsApp"
      >
        <svg className="whatsapp-mark" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.66 15L2 22l5.17-1.31A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.08-1.12l-.29-.17-3.07.78.82-2.99-.19-.3A8 8 0 1 1 12 20Z" />
          <path d="M16.7 13.5c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.7-.14-.25-.01-.39.11-.52.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.02 2.6c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.42 1.43.54.6.19 1.15.16 1.58.1.48-.07 1.48-.61 1.69-1.2.21-.59.21-1.09.15-1.2-.06-.11-.23-.17-.48-.29Z" />
        </svg>
        <span>Chat with us</span>
      </a>
      <footer>
        <div className="social-links footer-social-links">
          <span>Follow us on</span>
          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Cliq Adventures on Instagram"
            title="Instagram"
          >
            <SocialIcon name="Instagram" />
          </a>
          <a
            href={facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Cliq Adventures on Facebook"
            title="Facebook"
          >
            <SocialIcon name="Facebook" />
          </a>
          <a
            href={tiktok}
            target="_blank"
            rel="noreferrer"
            aria-label="Cliq Adventures on TikTok"
            title="TikTok"
          >
            <SocialIcon name="TikTok" />
          </a>
        </div>
        <div className="footer-legal">
          <div className="footer-legal-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
            <span className="footer-copyright">
              &copy; 2026 Cliqadventures. All rights reserved.
            </span>
          <span>Nairobi · Kenya</span>
        </div>
      </footer>
    </div>
  );
}
export default App;
