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
  'AWS/Azure Cloud',
  'Database Management',
];

export const technologies: string[] = [
  '.NET Core',
  'Javascript/Typescript',
  '.NET / ASP.NET MVC',
  'Angular',
  'React',
  'Vue.js',
  'C#',
  'Go',
  'Rust',
  'Python',
  'C/C++',
  'Java',
  'Kotlin',
  'Elixir',
  'Haskell',
  'Ruby',
];

export const languages: string[] = [
  'Portuguese - Native',
  'English - Fluent',
];

interface WorkExperienceItem {
  type: string;
  title: string;
  company: string;
  description: string[];
  location: string;
  startDate: string;
  endDate: string;
}

export const workExperience : WorkExperienceItem[]= [
  {
    type: 'Fulltime',
    title: 'Fullstack Developer',
    company: 'Jackson Dawson (Outsourced from Stefanini)',
    location: 'Remote',
    description: [
      'Development of solutions using C#, APS.NET, .NET, .NET Core, SQL Server, Azure, APS.NET MVC, .NET Web API, REST API, Razor pages, Vue.js, and Git.',
    ],
    startDate: 'Jan 2023',
    endDate: 'Present',
  },
  {
    type: 'Fulltime',
    title: 'Fullstack Developer',
    company: 'Alvarez & Marsal (Outsourced from Stefanini)',
    location: 'Remote',
    description: [
      'Development of solutions using C#, ASP.NET, .NET, .NET Core, SQL Server, Azure, ASP.NET MVC, .NET Web API, REST API, and Razor pages.Development',
    ],
    startDate: 'Jan 2023',
    endDate: 'Present',
  },
  {
    type: 'Fulltime',
    title: 'Fullstack Developer',
    company: 'Raizen (Outsourced from Stefanini)',
    location: 'Remote',
    description: [
      'Development of solutions using C#, APS.NET, .NET, .NET Core, SQL Server, Azure, APS.NET MVC, .NET Web API, REST API, Razor pages, Git, AngularJS',
    ],
    startDate: 'Mar 2022',
    endDate: 'Dez 2022',
  },
  {
    type: 'Internship',
    title: 'Backend Developer',
    company: 'Dell Lead',
    location: 'Remote',
    description: [
      'Worked as a backend developer using mainly .NET core to create systems for internal use at Dell',
    ],
    startDate: 'Nov 2021',
    endDate: 'Mar 2022',
  },
  {
    type: 'Fulltime',
    title: 'Frontend Developer',
    company: 'Dell Lead',
    location: 'Remote',
    description: [
      'Worked as a frontend developer using ReactJS to create systems for internal use at Dell',
    ],
    startDate: 'Mar 2021',
    endDate: 'Nov 2021',
  },
];

interface EducationItem {
  type: string;
  title: string;
  institution: string;
  description: string[];
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
    description: ['Bachelor Degree in Computer Engineering'],
    startDate: '2019',
    endDate: 'Present',
  },
  {
    type: 'Bachelor',
    title: 'Computer Engineering',
    institution: 'Federal University of Ceará',
    location: 'Quixadá-CE',
    description: ['Bachelor Degree in Computer Engineering'],
    startDate: '2017',
    endDate: '2018',
  },
  {
    type: 'Technician',
    title: 'Computer networks',
    institution: 'EEEP Marta Maria Giffoni de Souza',
    location: 'Acaraú-CE',
    description: ['Technician in Computer networks'],
    startDate: '2014',
    endDate: '2016',
  },
];
