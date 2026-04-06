export interface CollectionImage {
  src: string;
  alt: string;
  ratio: "landscape" | "portrait" | "square";
}

export interface Collection {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  coverSrc: string;       // used on homepage grid
  coverRatio: "landscape" | "portrait" | "square";
  intro: string;          // longer paragraph for collection page
  images: CollectionImage[];
}

export const collections: Collection[] = [
  {
    slug: "patagonia-2024",
    title: "Patagonia, 2024",
    category: "Landscape",
    year: "2024",
    coverSrc: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1600&q=80",
    coverRatio: "landscape",
    description: "Torres del Paine & Los Glaciares — three weeks at the end of the world.",
    intro:
      "Patagonia rewards patience in a way that few places on earth can match. I spent three weeks in Torres del Paine and the Los Glaciares region in the austral summer of 2024, waiting for the winds to drop and the towers to clear. This series documents the full range of that experience — from the ice-blue silence of Glacier Grey at 5am to the violent golden light that floods the pampas in the final minutes before sunset.",
    images: [
      { src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1600&q=80", alt: "Torres del Paine towers at dawn", ratio: "landscape" },
      { src: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80", alt: "Glacial lake reflection", ratio: "portrait" },
      { src: "https://images.unsplash.com/photo-1553254090-d93b8e49c26d?auto=format&fit=crop&w=1600&q=80", alt: "Patagonian pampas at golden hour", ratio: "landscape" },
      { src: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=1200&q=80", alt: "Mountain reflection in still water", ratio: "square" },
      { src: "https://images.unsplash.com/photo-1548133650-7e26e3b01a44?auto=format&fit=crop&w=1600&q=80", alt: "Storm light over the steppe", ratio: "landscape" },
      { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80", alt: "Glacier ice detail", ratio: "portrait" },
      { src: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1600&q=80", alt: "Dramatic sky over mountain range", ratio: "landscape" },
      { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80", alt: "Snow-capped peaks at dusk", ratio: "square" },
    ],
  },
  {
    slug: "iceland-series",
    title: "Iceland Series",
    category: "Long Exposure",
    year: "2023",
    coverSrc: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
    coverRatio: "portrait",
    description: "Long exposures across Iceland's volcanic interior — autumn 2023.",
    intro:
      "Iceland in October is almost entirely unpredictable, which is exactly why I go. This series spans the Westfjords, the Highlands, and the south coast — shot over eighteen days in conditions that ranged from glass-calm overnight frost to gale-force Atlantic storms. Every image in this collection is a long exposure, compressing time from thirty seconds to four minutes. The goal was to show the country not as it looks, but as it feels.",
    images: [
      { src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=80", alt: "Icelandic waterfall long exposure", ratio: "portrait" },
      { src: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=1600&q=80", alt: "Northern lights over volcanic landscape", ratio: "landscape" },
      { src: "https://images.unsplash.com/photo-1531168556467-80aace0d0144?auto=format&fit=crop&w=1200&q=80", alt: "Glacial river long exposure", ratio: "landscape" },
      { src: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=1200&q=80", alt: "Aurora borealis reflection", ratio: "portrait" },
      { src: "https://images.unsplash.com/photo-1490682143684-14369e18dce8?auto=format&fit=crop&w=1600&q=80", alt: "Black sand beach at dusk", ratio: "landscape" },
      { src: "https://images.unsplash.com/photo-1516496636080-14fb876e029d?auto=format&fit=crop&w=1200&q=80", alt: "Lava field at sunrise", ratio: "square" },
      { src: "https://images.unsplash.com/photo-1482192505345-5852ba3f6607?auto=format&fit=crop&w=1600&q=80", alt: "Geothermal steam in winter light", ratio: "landscape" },
    ],
  },
  {
    slug: "dolomites-at-dawn",
    title: "Dolomites at Dawn",
    category: "Mountain",
    year: "2023",
    coverSrc: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80",
    coverRatio: "landscape",
    description: "The Dolomites in the blue hour — pre-dawn silence in the Italian Alps.",
    intro:
      "The Dolomites are heavily photographed, which means you have to arrive before everyone else. I spent ten days in the Tre Cime and Passo Giau area, leaving the car before 3am each morning to reach the viewpoints before first light. The series is specifically about the transition — the twenty minutes between deep blue darkness and the first pink alpenglow touching the limestone towers. After that window closes, I put the camera down.",
    images: [
      { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80", alt: "Tre Cime at dawn", ratio: "landscape" },
      { src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80", alt: "Alpine meadow at blue hour", ratio: "portrait" },
      { src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80", alt: "Dolomite peaks in alpenglow", ratio: "landscape" },
      { src: "https://images.unsplash.com/photo-1549294413-26f195200c16?auto=format&fit=crop&w=1200&q=80", alt: "Mountain lake reflection at dawn", ratio: "square" },
      { src: "https://images.unsplash.com/photo-1527489377706-5bf97e608852?auto=format&fit=crop&w=1600&q=80", alt: "Limestone tower silhouette", ratio: "landscape" },
      { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80", alt: "Pre-dawn sky over alpine ridge", ratio: "portrait" },
      { src: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=1600&q=80", alt: "Still lake before sunrise", ratio: "landscape" },
    ],
  },
  {
    slug: "namib-desert",
    title: "Namib Desert",
    category: "Aerial & Ground",
    year: "2022",
    coverSrc: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1200&q=80",
    coverRatio: "square",
    description: "Sossusvlei and Deadvlei — the oldest desert on earth, at first and last light.",
    intro:
      "The Namib is one of the most visually extreme places I've ever worked. The dunes at Sossusvlei shift between ochre, crimson, and near-black depending on the angle of the sun — and that angle matters enormously. This series required camping inside the park to access the dunes at true first light, before the wind erases the overnight ripple patterns. I shot both from the ground and from a light aircraft to capture the scale that's impossible to convey from eye level alone.",
    images: [
      { src: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1400&q=80", alt: "Namib dunes aerial view", ratio: "square" },
      { src: "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?auto=format&fit=crop&w=1600&q=80", alt: "Deadvlei white clay pan", ratio: "landscape" },
      { src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80", alt: "Sand dune crest at sunrise", ratio: "portrait" },
      { src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1600&q=80", alt: "Minimalist dune shadows", ratio: "landscape" },
      { src: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1200&q=80", alt: "Dead camel thorn trees", ratio: "square" },
      { src: "https://images.unsplash.com/photo-1484318571209-661cf29a69a3?auto=format&fit=crop&w=1600&q=80", alt: "Desert dune patterns from above", ratio: "landscape" },
    ],
  },
  {
    slug: "norwegian-fjords",
    title: "Norwegian Fjords",
    category: "Seascape",
    year: "2022",
    coverSrc: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",
    coverRatio: "landscape",
    description: "Hardangerfjord & Geirangerfjord — deep winter reflections.",
    intro:
      "The Norwegian fjords in January are a test of resolve. The light arrives briefly, stays low, and vanishes before 3pm. But in that narrow window — particularly in the hour before and after noon — the quality of illumination on the water is unlike anything else. This series focuses on reflections: the way the still fjord surface doubles the landscape and makes it impossible to identify top from bottom. Several images in this collection are presented rotated, and I will not tell you which ones.",
    images: [
      { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80", alt: "Norwegian fjord reflection at midwinter", ratio: "landscape" },
      { src: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=1200&q=80", alt: "Fjord village in winter light", ratio: "portrait" },
      { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80", alt: "Calm water reflection of cliffs", ratio: "landscape" },
      { src: "https://images.unsplash.com/photo-1531986627054-7b4d2b1e1c9c?auto=format&fit=crop&w=1200&q=80", alt: "Snow-covered fjord banks", ratio: "square" },
      { src: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=80", alt: "Waterfall into fjord", ratio: "landscape" },
      { src: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1200&q=80", alt: "Arctic fox on fjord hillside", ratio: "portrait" },
      { src: "https://images.unsplash.com/photo-1482192505345-5852ba3f6607?auto=format&fit=crop&w=1600&q=80", alt: "Geirangerfjord from above", ratio: "landscape" },
    ],
  },
  {
    slug: "atacama",
    title: "Atacama",
    category: "Astro & Landscape",
    year: "2021",
    coverSrc: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1200&q=80",
    coverRatio: "portrait",
    description: "The clearest skies on earth — night photography in the Atacama Desert.",
    intro:
      "The Atacama is the driest non-polar desert on earth and sits at an altitude that places you above most of the atmosphere's moisture. The result is sky clarity I've never experienced elsewhere — the Milky Way casts a visible shadow. I spent fourteen nights here, shooting from midnight to 5am, working with exposures between 15 and 25 seconds to capture star trails and galactic core detail. The landscape — salt flats, volcanoes, alien rock formations — becomes the foreground for a sky that feels impossibly close.",
    images: [
      { src: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1400&q=80", alt: "Milky Way over Atacama Desert", ratio: "portrait" },
      { src: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1600&q=80", alt: "Star trails over salt flat", ratio: "landscape" },
      { src: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?auto=format&fit=crop&w=1200&q=80", alt: "Night sky over volcanic landscape", ratio: "landscape" },
      { src: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1200&q=80", alt: "Galaxy core above desert floor", ratio: "portrait" },
      { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80", alt: "Pre-dawn glow over salt flats", ratio: "landscape" },
      { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80", alt: "Atacama moonrise", ratio: "square" },
      { src: "https://images.unsplash.com/photo-1509773896068-7fd39f4eedb5?auto=format&fit=crop&w=1600&q=80", alt: "Desert silhouette against night sky", ratio: "landscape" },
    ],
  },
];

// Helper to find a collection by slug
export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
