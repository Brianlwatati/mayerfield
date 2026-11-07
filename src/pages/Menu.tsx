// import CafeHero from "../components/sections/CafeHero";
import MenuCatalog from "../components/sections/menusection/Menu";

export default function Menu() {
  return (
    <>
      {/* <CafeHero
        eyebrow="Made for your everyday"
        title="Find your"
        highlight="little moment."
        description="From a familiar first sip to a fresh-from-the-oven treat, there’s something lovely waiting for you at Brew & Bean."
        primaryAction={{ label: "Explore the menu", href: "#menu" }}
        secondaryAction={{ label: "A little about us", href: "/about" }}
        highlights={[
          "Thoughtfully made",
          "Coffee, tea & more",
          "Something for every mood",
        ]}
        image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=85&w=1200"
        imageAlt="A warm cup of coffee ready to enjoy"
        imageEyebrow="Your daily pause"
        imageHeadline="Made with a little more care."
        note="one cup at a time"
      /> */}
      <MenuCatalog />
    </>
  );
}
