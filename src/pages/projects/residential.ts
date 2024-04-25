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

import richmond1 from "@images/projects/richmond/1.jpg";
import richmond2 from "@images/projects/richmond/2.jpg";
import richmond3 from "@images/projects/richmond/3.jpg";
import richmond4 from "@images/projects/richmond/4.jpg";

import greenway1 from "@images/projects/greenway/1.jpg";
import greenway2 from "@images/projects/greenway/2.jpg";
import greenway3 from "@images/projects/greenway/3.jpg";
import greenway4 from "@images/projects/greenway/4.jpg";

interface ProjectData {
  title: string;
  description: string;
  images: ProjectImage[];
}

const greenway: ProjectData = {
  title: "Greenway Estate",
  description:
    "This spacious family home is defined by its striking black and white tile mosaic wave floor, which sets a dynamic tone throughout the space. The interior is balanced with natural light and dark wooden elements, creating a warm and inviting atmosphere. A prominent kitchen island crafted from natural dark stone anchors the culinary space. Externally, the home is enveloped in full light brick cladding, extending to a brick-covered roof that harmonizes with the natural surroundings. A large swimming pool opens directly to the patio, offering a seamless transition from the luxurious interior to the tranquil outdoors.",
  images: [
    {
      file: greenway1,
      alt: "Modern interior design, open space with dining table and chairs in the center of the room, kitchen behind it, staircase to second floor right next to dining area, dark metal spiral stair, warm light, beige furniture, black and white wave mosaic floor tiles.",
    },
    {
      file: greenway2,
      alt: "Full of natural light wooden kitchen with black, white and green marble island, variety of textures, natural tones, black bar kitchen chairs, interior design photography.",
    },
    {
      file: greenway3,
      alt: "A modern white brick house with a gable roof, covered terraces and large trees in the yard, in an English countryside village. Soft light and natural lighting.",
    },
    {
      file: greenway4,
      alt: "A tv wall mounted on an oak panel in the center of room with two large cream colored couches, with a textured grid patterned brown wood panels behind it.",
    },
  ],
};

const richmond: ProjectData = {
  title: "Richmond Home",
  description:
    "This semi-detached home in Richmond features a large, open-plan kitchen-dining-living space that seamlessly connects to the garden. The ceiling mirrors the pitched roof above, enhanced by eight large rooflights that flood the interior with natural light. An L-shaped rear extension includes two levels of windows, both upper and lower, maximizing the view and sunlight. Two expansive corner windows are perfectly positioned for sunset views from the comfort of a sofa. Inside, the living space is complemented by large, light wood bespoke cabinetry that includes a cleverly hidden desk. The entire home has undergone a comprehensive renovation, including a newly designed loft that now houses a stunning master bedroom with bi-fold doors and an edge-free glass balustrade, blending modern luxury with panoramic vistas.",
  images: [
    {
      file: richmond1,
      alt: "photo of ceiling in a modern home, with 8 skylights, two round speakers in the white ceiling.",
    },
    {
      file: richmond2,
      alt: "Photograph of an interior wall with white cabinets and shelves, small plants on the shelves, natural light from a skylight window, light wood grain, interior design photography, interior detail in the style of interior design photography.",
    },
    {
      file: richmond3,
      alt: "The top view of two flat roof windows on the red tile roof. The focus is set to highlight the contrast between the smooth surface of ceramic tiles against the dark metal beams of each skylight frame",
    },
    {
      file: richmond4,
      alt: "Close up of black window frames on the corner of a yellow and red brick house showing off its blend of traditional and modern design features.",
    },
  ],
};

const perryAvenue: ProjectData = {
  title: "Perry Avenue",
  description:
    "This larch extension features dark, textured cladding, complemented by a prominent garden-facing kitchen window. This timber-framed design emphasizes thermal efficiency. Inside, polished concrete floors pair with a modern black kitchen. Plywood shelving, filled with books and ceramics, harmonizes with the theme of natural materials and texture.",
  images: [
    {
      file: perryAvenue1,
      alt: "Photograph depicts a building with a minimalist architectural design, featuring black vertical cladding and rosewood panels on its side profile. Small window details add intricate touches. The building, painted white, is accented by a slanted roof. Captured under daylight, the image includes a clear blue sky. In the background, a leafless tree complements the scene, highlighting the stark beauty of architectural photography.",
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
      alt: "A photo of an industrial style kitchen with a brick wall, black pendant lights and a large yellow clock on the back wall. A white island in front of it with dark blue cabinets and a coffee machine, a paper cup holder, wooden plants on shelves. A white counter top with a red fruit bowl, a glass jar filled with salt and pepper next to the sink, white floor tiles",
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
  greenway,
  richmond,
  brackenBank,
  perryAvenue,
  apartment01,
  graftonRoad,
  twinHouse,
];
