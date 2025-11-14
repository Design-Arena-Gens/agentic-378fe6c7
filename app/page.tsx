'use client';

import { useMemo, useState } from "react";

type Habitat = {
  name: string;
  biome: string;
  description: string;
  initiatives: string[];
};

const habitats: Habitat[] = [
  {
    name: "Lumin Grove",
    biome: "Bioluminescent rainforest",
    description:
      "Canopies glow with symbiotic algae that store daylight and release warm light during the night cycle.",
    initiatives: [
      "Zero-impact canopy walkways",
      "Photosynthetic energy harvesting",
      "Nocturnal pollinator sanctuaries"
    ]
  },
  {
    name: "Aeon Dunes",
    biome: "Kinetic desert",
    description:
      "Wind-carved dunes support moisture farms that condense vapor into mineral-rich water reserves.",
    initiatives: ["Atmospheric water seeding", "Wind-etched solar sails", "Adaptive dune stabilizers"]
  },
  {
    name: "Maris Arc",
    biome: "Floating archipelago",
    description:
      "Tidal cities drift above coral forests that regenerate reef structures with engineered limestone.",
    initiatives: ["Reef acoustic restorers", "Wave-driven nutrient canals", "Regenerative aquaculture"]
  }
];

const expeditionMoments = [
  {
    title: "Aurora Induction",
    detail:
      "Witness the harmonic launch that synchronizes tidal, solar, and geothermal collectors across Eteterre."
  },
  {
    title: "Symphony Exchange",
    detail:
      "Collaborate with resident ecologists to craft new bioengineered instruments that respond to local wildlife."
  },
  {
    title: "Mirrored Dawn",
    detail:
      "Join the community reflection that charts the next decade of restoration milestones."
  }
];

export default function HomePage() {
  const [selectedHabitatIndex, setSelectedHabitatIndex] = useState(0);

  const selectedHabitat = useMemo(() => habitats[selectedHabitatIndex], [selectedHabitatIndex]);

  return (
    <main className="page">
      <div className="page__canvas">
        <div className="page__backdrop" aria-hidden>
          {/* Layered gradients build the bioluminescent backdrop */}
          <div className="page__gradient page__gradient--vertical" />
          <div className="page__gradient page__gradient--halo" />
        </div>

        <header className="hero">
          <p className="hero__tagline">The Eteterre Initiative</p>
          <h1 className="hero__title">Regenerate the Planetary Commons</h1>
          <p className="hero__description">
            Eteterre is a living landscape of speculative habitats designed for climate resilience. Explore its biomes,
            co-create restorative technologies, and pledge your craft to the ecological renaissance.
          </p>

          <div className="habitat-selector">
            {habitats.map((habitat, index) => (
              <button
                key={habitat.name}
                type="button"
                onClick={() => setSelectedHabitatIndex(index)}
                className={`habitat-card${selectedHabitatIndex === index ? " habitat-card--active" : ""}`}
              >
                <p className="habitat-card__kicker">Habitat</p>
                <p className="habitat-card__name">{habitat.name}</p>
                <p className="habitat-card__biome">{habitat.biome}</p>
              </button>
            ))}
          </div>
        </header>

        <section className="feature-panel">
          <div className="feature-panel__grid">
            <div className="feature-panel__summary">
              <p className="feature-panel__kicker">Featured Habitat</p>
              <h2 className="feature-panel__title">{selectedHabitat.name}</h2>
              <p className="feature-panel__description">{selectedHabitat.description}</p>
            </div>
            <div className="initiative-list">
              {selectedHabitat.initiatives.map(initiative => (
                <div key={initiative} className="initiative-card">
                  {initiative}
                </div>
              ))}
            </div>
          </div>

          <div className="moments">
            {expeditionMoments.map(moment => (
              <article key={moment.title} className="moments__card">
                <h3 className="moments__title">{moment.title}</h3>
                <p className="moments__detail">{moment.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta">
          <h2 className="cta__title">Join the Regenerative Council</h2>
          <p className="cta__description">
            Contribute your disciplines—from biomaterials to speculative design—to steward Eteterre&apos;s unfolding
            ecosystems. Collective pledges unlock new habitats and shared research archives.
          </p>
          <form className="cta__form">
            <label className="cta__field">
              <span className="cta__label">Your craft</span>
              <input type="text" name="craft" placeholder="Biomimicry architect" className="cta__input" />
            </label>
            <label className="cta__field">
              <span className="cta__label">Orbit email</span>
              <input type="email" name="email" placeholder="you@eteterre.network" className="cta__input" />
            </label>
            <button type="submit" className="cta__submit">
              Pledge
            </button>
          </form>
        </section>

        <footer className="footer">
          Eteterre Collective — Crafted for the regenerative futures we imagine together.
        </footer>
      </div>
    </main>
  );
}
