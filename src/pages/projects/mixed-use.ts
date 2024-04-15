import type { ProjectImage } from "@components/pages/projects/Project.models";

import grangePark1 from "@images/projects/opera/1.jpg";
import grangePark2 from "@images/projects/opera/2.jpg";
import grangePark3 from "@images/projects/opera/3.jpg";
import grangePark4 from "@images/projects/opera/4.jpg";

import cibobistro1 from "@images/projects/cibo-bistro/1.jpg";
import cibobistro2 from "@images/projects/cibo-bistro/2.jpg";
import cibobistro3 from "@images/projects/cibo-bistro/3.jpg";
import cibobistro4 from "@images/projects/cibo-bistro/4.jpg";

import kindergarten1 from "@images/projects/kindergarten/1.jpg";
import kindergarten2 from "@images/projects/kindergarten/2.jpg";
import kindergarten3 from "@images/projects/kindergarten/3.jpg";
import kindergarten4 from "@images/projects/kindergarten/4.jpg";

import mph1 from "@images/projects/mph/1.jpg";
import mph2 from "@images/projects/mph/2.jpg";
import mph3 from "@images/projects/mph/3.jpg";
import mph4 from "@images/projects/mph/4.jpg";

interface ProjectData {
  title: string;
  description: string;
  images: ProjectImage[];
}

const grangePark: ProjectData = {
  title: "Grange Park Opera",
  description:
    "The Grange Park Opera extension project seamlessly adds two floors of essential backstage space totaling 500.60 m², cleverly positioned to maintain the integrity of the existing building’s footprint. Despite its modest scale, the design effectively enhances functionality for artists and staff without impacting the iconic views from the opera house’s main public areas. This thoughtful addition ensures that operational needs are met while preserving the venue’s architectural harmony and the quality of visitor experiences. This project was done in collaboration with David Lloyd Jones.",
  images: [
    {
      file: grangePark1,
      alt: "Watercolour visualisaiton of the read extension to the opera house where the cladding panels coloured in the hues of green and blues blend with the surroudning.",
    },
    {
      file: grangePark2,
      alt: "Watercolour visualisation of the entracne to the opera house from the eye-level perspective showing the extension barely visible in the background.",
    },
    {
      file: grangePark3,
      alt: "Real coloured elevation of the rear extension to the Grange Park Summer Opera House. Shadows of trees are cast on the elevation.",
    },
    {
      file: grangePark4,
      alt: "Physical model of the rear extension to the opera house. It is made by lasercutting thin wooden boards.",
    },
  ],
};

const cibobistro: ProjectData = {
  title: "Cibo Bistro",
  description:
    "The Italian Bistro in Brighton offers an elegant and intimate dining experience, with deep blue tones and brass geometric patterns complemented by industrial metal features. Brass pendant lighting and lush greenery against dark wood create an atmospheric setting, while a kitchen window adds an intriguing visual connection.",
  images: [
    {
      file: cibobistro1,
      alt: "Bar area of the bistro showing the shelves with many bootles and glasses to the sides and a window into the kitchen at the centre. Deep blue tones and colours with brass geometrical patterns.",
    },
    {
      file: cibobistro2,
      alt: "Brass pendant light with the background of blue walls, and railing. The walls have geometrical pattern.",
    },
    {
      file: cibobistro3,
      alt: "Interior space of a restaurant bistro showing grey/blue walls followed by a natural brick wall element. There are golden elements that lighten the atmospher ein the space and make it seem more luxurious.",
    },
    {
      file: cibobistro4,
      alt: "The window into the kitchen from a bar area. You can see the cooks engaged in cooking. Around the window we can see shelves with bottles and a couple of pendant lights framing the view.",
    },
  ],
};

const kindergarten: ProjectData = {
  title: "Kindergarten",
  description:
    "This kindergarten design expertly caters to 180 pupils, emphasizing flexibility in learning styles and play. Each of the six spacious classrooms not only opens to its own dedicated outdoor space but also connects to a large, zoned indoor play corridor visible through internal windows, fostering a seamless flow between indoor and outdoor learning environments. This layout supports diverse learning experiences and encourages constant engagement and interaction among children. This project was led by CREATE Design, with our team providing essential support in architectural development and design execution.",
  images: [
    {
      file: kindergarten1,
      alt: "Exterior view 3D visualisation of the kindergarten with a shaded with canopies pathway in front of it and a outdoor playground to the side.",
    },
    {
      file: kindergarten2,
      alt: "3D Visualisation showing a part of the playground area for teh kindergarten alongside the light cream walls of the kindergarten building. In fron of it a small child reads a newspaper.",
    },
    {
      file: kindergarten3,
      alt: "3D Visualisation of the upper part of the kindergarten building alnogside the canopies placed alonside the pathway.",
    },
    {
      file: kindergarten4,
      alt: "Part of the floor plan of the kindergarten showing classroom distribution, private outdoor playground for the students, group study rooms and indoor playground inside the wide corridor space.",
    },
  ],
};

const mph: ProjectData = {
  title: "Multi-Purpose Sports Hall",
  description:
    "This multi-purpose sports hall is designed to serve students from primary through high school, offering a versatile venue that accommodates basketball, handball, and other sports. Additionally, the space is equipped with a stage for theater performances, seamlessly transitioning from athletic competitions to cultural events. The facility supports a wide range of activities, fostering an environment where students can engage in both physical education and the arts. This project was led by CREATE Design, with our team providing essential support in architectural development and design execution.",
  images: [
    {
      file: mph1,
      alt: "3D Visualisation showing the Primary school alongside the Multi Purpose Hall with some outdoor sports fields and a athway towards it with large canopies for shade.",
    },
    {
      file: mph2,
      alt: "3D Visualisation showing a part of the Multi-Purpose Hall in the background and a pathway with shaded canopies in the foreground.",
    },
    {
      file: mph3,
      alt: "3D Visualisation showing sportfields with the Sports Hall Multi Purpose Hall in the background.",
    },
    {
      file: mph4,
      alt: "Floor Plan of the Sports Hall - Multi-purpose Hall showing the range of sports that can be played inside inclusibe of stage for theatre performances.",
    },
  ],
};

export const PROJECTS: ProjectData[] = [
  grangePark,
  cibobistro,
  kindergarten,
  mph,
];
