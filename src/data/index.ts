export const skills : string[] = [
  'FullStack development',
  'Cloud computing',
  'DevOps',
  'IT automation',
];

export const tools : string[] = [
  'Git',
  'Docker',
  'Linux',
  'AWX/Azure Cloud',
  'Database managmentd',
];

export const thecnologies: string[] = [
  'Javascript/Typescript',
  'C#',
  'C/C++',
  'Python',
  'Java',
  'Kotlin',
  'Elixir',
  'Rust',
  'Haskell',
];

interface WorkExperienceItem {
  type: string;
  title: string;
  company: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
}

export const workExperience : WorkExperienceItem[]= [
  {
    type: 'Fulltime',
    title: 'Fullstack Developer',
    company: 'Stefanini Brasil',
    location: 'Remote',
    description: 'I work on several consulting projects for third-party companies, developing solutions and maintaining projects already completed. Focusing Angular, .NET Core and Cloud Computing',
    startDate: 'Mar 2022',
    endDate: 'Present',
  },
  {
    type: 'Internship',
    title: 'Backend Developer',
    company: 'Dell Lead',
    location: 'Remote',
    description: 'Worked as a backend developer using mainly .NET core to create systems for internal use at Dell',
    startDate: 'Nov 2021',
    endDate: 'Mar 2022',
  },
  {
    type: 'Fulltime',
    title: 'Frontend Developer',
    company: 'Dell Lead',
    location: 'Remote',
    description: 'Worked as a front developer using mainly ReactJS to create systems for internal use at Dell',
    startDate: 'Mar 2021',
    endDate: 'Nov 2021',
  },
];

interface EducationItem {
  type: string;
  title: string;
  institution: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
}

export const education : EducationItem[] = [
  {
    type: 'Bachelor',
    title: 'Computer Engineering',
    institution: 'Federal University of Ceará',
    location: 'Sobral-CE',
    description: 'Bachelor Degree in Computer Engineering, at one of the most renowned colleges in the country, focusing on embedded systems, computer science, internet of things and telecommunications',
    startDate: '2019',
    endDate: 'Present',
  },
  {
    type: 'Bachelor',
    title: 'Computer Engineering',
    institution: 'Federal University of Ceará',
    location: 'Quixadá-CE',
    description: 'Bachelor Degree in Computer Engineering, at one of the most renowned colleges in the country, focusing on embedded systems and computer science',
    startDate: '2017',
    endDate: '2018',
  },
  {
    type: 'Technician',
    title: 'Computer networks',
    institution: 'EEEP Marta Maria Giffoni de Souza',
    location: 'Acaraú-CE',
    description: 'Technician in Computer networks, in a vocational education school that seeks to train professionals',
    startDate: '2014',
    endDate: '2016',
  },
];
