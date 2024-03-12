import type { ProjectImage } from "@components/pages/projects/Project.models";
import brackenBank1 from "@images/projects/bracken-bank/1.jpg";
import brackenBank2 from "@images/projects/bracken-bank/2.jpg";
import brackenBank3 from "@images/projects/bracken-bank/3.jpg";
import brackenBank4 from "@images/projects/bracken-bank/4.jpg";

import perryAvenue1 from "@images/projects/perry-avenue/1.jpg";
import perryAvenue2 from "@images/projects/perry-avenue/2.jpg";
import perryAvenue3 from "@images/projects/perry-avenue/3.jpg";
import perryAvenue4 from "@images/projects/perry-avenue/4.jpg";

import graftonRoad1 from "@images/projects/grafton-road/1.jpg";
import graftonRoad2 from "@images/projects/grafton-road/2.jpg";
import graftonRoad3 from "@images/projects/grafton-road/3.jpg";
import graftonRoad4 from "@images/projects/grafton-road/4.jpg";

import apartment1 from "@images/projects/apartment-01/1.jpg";
import apartment2 from "@images/projects/apartment-01/2.jpg";
import apartment3 from "@images/projects/apartment-01/3.jpg";
import apartment4 from "@images/projects/apartment-01/4.jpg";

import twinHouse1 from "@images/projects/twin-house/1.jpg";
import twinHouse2 from "@images/projects/twin-house/2.jpg";
import twinHouse3 from "@images/projects/twin-house/3.jpg";
import twinHouse4 from "@images/projects/twin-house/4.jpg";

interface ProjectData {
  title: string;
  description: string;
  images: ProjectImage[];
}

const perryAvenue: ProjectData = {
  title: "Perry Avenue",
  description:
    "This larch extension features dark, textured cladding, complemented by a prominent garden-facing kitchen window. This timber-framed design emphasizes thermal efficiency. Inside, polished concrete floors pair with a modern black kitchen. Plywood shelving, filled with books and ceramics, harmonizes with the theme of natural materials and texture.",
  images: [
    {
      file: perryAvenue1,
      alt: "House extension with dark wooden cladding under a blue sky, surrounded by lush greenery.",
    },
    {
      file: perryAvenue2,
      alt: "Secluded house extension with dark larch cladding, patio sliding door, and a raised patio with delicate patterned tiles.",
    },
    {
      file: perryAvenue3,
      alt: "Kitchen view to a sunlit green garden through a large window, with bowls, herbs, and cutting boards on the counter.",
    },
    {
      file: perryAvenue4,
      alt: "Raised patio with patterned tiles, two grey outdoor sofas, facing green trees in the background.",
    },
  ],
};

const brackenBank: ProjectData = {
  title: "Bracken Bank",
  description:
    "The house refurbishment and extension design features corner pocket sliding doors, enhancing the flow, openness and a blurring the line between the indoor and outdoor. The light ceramic flooring bridges both areas, complemented by dark wooden cabinets and dark island worktops. Dark wooden panelling contrasts with a light wooden table, highlighting the importance of balance in design. Soft terracotta-coloured chairs offer a tactile, haptic invitation, enhanced by a soft rug’s fluid, natural pattern.",
  images: [
    {
      file: brackenBank1,
      alt: "Kitchen with wide open patio door, warm wooden cabinets, green stone island, and an outdoor sofa in white and blue stripes.",
    },
    {
      file: brackenBank2,
      alt: "Stylish kitchen with wooden doors, green marble island, terracotta back, and textured glass block wall.",
    },
    {
      file: brackenBank3,
      alt: "Open dining and living room with orange chairs, a light wooden table, and a modern fireplace with green marble.",
    },
    {
      file: brackenBank4,
      alt: "Green marble kitchen island, warm wooden cabinets, and white pendant lights in a kitchen cabinet interior.",
    },
  ],
};

const graftonRoad: ProjectData = {
  title: "Grafton Road",
  description:
    "Vivid blue staircase, adorned with light-penetrating circular holes, and an eye-catching yellow railing invigorates and uplifts mood, while the strategic contrast of black and white lends depth. The kitchen’s industrial vibe, featuring a brick wall and expansive island with black cabinets, enhances the atmosphere. Varied textures stimulate the mind, promoting calm, focus, and positive emotional engagement.",
  images: [
    {
      file: graftonRoad1,
      alt: "Living room with bottle green velvet sofa, modern fireplace, and a Crittall patio door opening to a large indoor plant.",
    },
    {
      file: graftonRoad2,
      alt: "A vibrant yellow stair railing against a minimalist blue and white background.",
    },
    {
      file: graftonRoad3,
      alt: "Modern bathroom vanity with a vessel sink, brass faucet, and black wall tiles.",
    },
    {
      file: graftonRoad4,
      alt: "Black timber house extension surrounded by trees with a diverse leaf colour palette under a pale blue sky.",
    },
  ],
};

const apartment01: ProjectData = {
  title: "Apartment no.01",
  description:
    "This compact apartment beautifully integrates natural materials and wood tones. Emphasizing adaptability, flexible furniture arrangements accommodate diverse uses, maximizing the space’s potential and ensuring a harmonious, organic living experience.",
  images: [
    {
      file: apartment1,
      alt: "Open plan apartment with small sofa, light wooden wardrobe doors, black French double door, and old brick ceiling.",
    },
    {
      file: apartment2,
      alt: "Kitchen with carved stone peninsula, dark wooden bar stools, 'Girl with a Pearl Earring' painting, and an old brick ceiling.",
    },
    {
      file: apartment3,
      alt: "Living room with an arched old brick ceiling, projector screen showing 'Pulp Fiction,' and a small comfortable sofa.",
    },
    {
      file: apartment4,
      alt: "Flexible open plan living and dining room with a foldable table, dark wooden chairs, and table setting for four.",
    },
  ],
};

const twinHouse: ProjectData = {
  title: "Twin House",
  description:
    "This two-storey twin home design incorporates natural tones and textures to create a calming atmosphere. Its kitchen-dining-living area is a blend of functionality and wooden tones and textures. Fitted cabinetry ensures efficient storage, while the spacious master bedroom and relaxing marbled bathroom completes the luxurious feel. Incorporating natural timber and textures not only elevates the design but also promotes mental well-being.",
  images: [
    {
      file: twinHouse1,
      alt: "Open plan kitchen, living, and dining room with a light stone peninsula, dark wood cabinets, and mirrors on the wall.",
    },
    {
      file: twinHouse2,
      alt: "Stylish kitchen and dining room with light stone peninsula, dark wood cabinets, and mirrors across the wall.",
    },
    {
      file: twinHouse3,
      alt: "Interior view through a sliding patio door with a dark wood dining table, white sphere lighting, and a comfortable sofa.",
    },
    {
      file: twinHouse4,
      alt: "Open plan living and dining room with dark wood table, white sphere lighting, a comfortable sofa, and built-in cabinetry.",
    },
  ],
};

export const PROJECTS: ProjectData[] = [
  perryAvenue,
  brackenBank,
  graftonRoad,
  apartment01,
  twinHouse,
];
