// src/pages/Home.tsx

import CafeHero from "../components/sections/CafeHero";
import Contact from "../components/sections/Contact";
import Menu from "../components/sections/menusection/Menu";
import Reviews from "../components/sections/Reviews";

export default function Home() {
  return (
    <>
      <CafeHero
        eyebrow="Your neighborhood coffee spot"
        title="Make room for"
        highlight="a little joy."
        description="Good coffee, warm company, and something fresh from the oven. Find your new favorite little ritual at Brew & Bean."
        primaryAction={{ label: "Find your favorite", href: "#menu" }}
        secondaryAction={{ label: "Our story", href: "/about" }}
        highlights={[
          "Freshly brewed every day",
          "Baked fresh each morning",
          "A cozy place to pause",
        ]}
        image="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=85&w=1200"
        imageAlt="Coffee being carefully prepared in a cozy cafe"
        imageEyebrow="Welcome to Brew & Bean"
        imageHeadline="Your favorite pause in the day."
        note="good things are brewing"
      />
      <Menu />
      <Reviews />
      <Contact />
    </>
  );
}
