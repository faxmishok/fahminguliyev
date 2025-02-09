export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    description: `Here are things`,
    title: `I've worked on`,
    image: {
      src: '/static/images/projects.png',
      width: 600,
      height: 770,
    },
  },
  {
    description: 'I built',
    title: 'O-Sci-Lator',
    image: {
      src: '/static/images/project/o-sci-lator.png',
      width: 600,
      height: 554,
    },
  },
  {
    description: `I maintained`,
    title: 'Shattered Silence',
    image: {
      src: '/static/images/project/shattered_silence.png',
      width: 600,
      height: 717,
    },
  },
  {
    description: `I built`,
    title: 'GIS Web Platform',
    image: {
      src: '/static/images/project/gis.png',
      width: 600,
      height: 717,
    },
  },
];
