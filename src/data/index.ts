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
  'Javascript/Typescript',
  'C#',
  'C/C++',
  'Rust',
  'Python',
  'Java',
  'Kotlin',
  'Elixir',
  'Haskell',
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
    company: 'Alvarez & Marsal (Outsourced from Stefanini)',
    location: 'Remote',
    description: [
      'As a software developer at Alvarez & Marsal, I am responsible for designing, developing, and maintaining web applications and APIs using C# ASP.NET, SQL Server, and .NET Core.',
      'My day-to-day tasks include collaborating with other developers, designers, and stakeholders to gather requirements, design software solutions, and write server-side code for web applications and RESTful APIs. I also use SQL Server to design and develop database schemas, write queries and stored procedures to retrieve and manipulate data, and work with third-party services to integrate data into our applications.',
      'Additionally, I have experience implementing security features to protect sensitive data and testing software to ensure quality and reliability.',
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
      'As a full stack developer at Raizen, I was responsible for developing and maintaining web applications and APIs using Angular for the frontend, .NET Core for the backend, SQL Server as the database, and Azure for DevOps. In addition, I have experience developing serverless applications using Azure Functions.',
      'My day-to-day tasks include collaborating with cross-functional teams to gather requirements, design solutions, and implement software features. I work closely with designers to create responsive and user-friendly interfaces using Angular, and I write server-side code using .NET Core to create RESTful APIs and integrate with SQL Server. Additionally, I use Azure DevOps to manage our development pipeline, automate deployments, and implement continuous integration and delivery practices.',
      'I have experience developing serverless applications using Azure Functions to implement background processing and handle asynchronous tasks. I also perform regular maintenance tasks such as monitoring application performance, debugging issues, and optimizing code to ensure optimal performance.',
      'Overall, my role at Raizen requires strong technical skills in Angular, .NET Core, SQL Server, and Azure, as well as the ability to work collaboratively and manage projects using agile development methodologies',
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
      'As a backend lead developer at Dell, I was responsible for developing RESTful APIs using C# and SQL Server. My day-to-day tasks include collaborating with other developers and stakeholders to gather requirements, design software solutions, and write server-side code using C# to create scalable and robust RESTful APIs. I also use SQL Server to design and develop database schemas, write queries and stored procedures to retrieve and manipulate data, and ensure data consistency and integrity.',
      'In addition to writing code, I also have experience leading a team of developers, managing project timelines, and implementing software development best practices. I work closely with other leads and project managers to ensure that our backend APIs are integrated effectively with frontend technologies and that our development processes are optimized for efficiency and quality.',
      'Throughout my time at Dell, I have consistently delivered high-quality software solutions that meet or exceed stakeholder expectations. I am committed to staying up-to-date with the latest industry trends and technologies, and I am always looking for ways to improve our backend development processes and drive innovation.',
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
      'As a frontend developer at XYZ Company, I am responsible for designing, developing, and maintaining web applications using React and consuming RESTful APIs. My day-to-day tasks include collaborating with designers and other developers to gather requirements, design software solutions, and create responsive and user-friendly interfaces using React. I also have experience working with Redux to manage application state and implement complex data flows.',,
      'In addition to frontend development, I have experience consuming RESTful APIs to integrate with backend systems and retrieve and display data in our applications. I work closely with backend developers to ensure that our APIs are designed effectively and that our applications are optimized for performance and scalability.',
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
    description: ['Bachelor Degree in Computer Engineering, at one of the most renowned colleges in the country, focusing on embedded systems, computer science, internet of things and telecommunications'],
    startDate: '2019',
    endDate: 'Present',
  },
  {
    type: 'Bachelor',
    title: 'Computer Engineering',
    institution: 'Federal University of Ceará',
    location: 'Quixadá-CE',
    description: ['Bachelor Degree in Computer Engineering, at one of the most renowned colleges in the country, focusing on embedded systems and computer science'],
    startDate: '2017',
    endDate: '2018',
  },
  {
    type: 'Technician',
    title: 'Computer networks',
    institution: 'EEEP Marta Maria Giffoni de Souza',
    location: 'Acaraú-CE',
    description: ['Technician in Computer networks, in a vocational education school that seeks to train professionals'],
    startDate: '2014',
    endDate: '2016',
  },
];
