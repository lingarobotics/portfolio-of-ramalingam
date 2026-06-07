const learningPlatforms = [
  {
    id: 'infosys-springboard',

    slug: 'infosys-springboard',

    name: 'Infosys Springboard',

    logo:
      '/images/platforms/infosys-springboard.webp',

    type:
      'Learning Platform',

    description:
      'A structured learning platform that enabled my preparation across engineering foundations, agile methodologies, and system thinking. The platform became the foundation for my internship preparation journey.',

    highlight:
      'Journey Behind an Infosys Springboard Internship Shortlist',

    domainsCount: 1,

    journeysCount: 1,

    certificatesCount: 9,

    tags: [
      'Engineering Foundations',
      'Java & OOP',
      'Data & Databases',
      'Software Engineering & Agile',
      'System Thinking'
    ],

    domainsFile:
      'infosys-springboard/domains',

    featuredJourney:
      'internship-shortlist',

    status:
      'active'
  }
];

const visiblePlatforms = learningPlatforms.filter(
  (platform) => platform.status === 'active'
);

export default visiblePlatforms;
