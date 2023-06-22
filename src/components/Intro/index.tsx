import {Component} from 'solid-js';

import Button from '@components/Button';

const Intro: Component = () => {
  function openGithub() {
    window.open('https://github.com/krymancer', '_blank');
  }

  function openLinkedin() {
    window.open('https://linkedin.com/in/junior-nascm', '_blank');
  }
  return (
    <div class="flex flex-col pb-3">
      <div class="text-4xl text-text-light dark:text-text-dark">
        Hi, I'm Júnior!
      </div>
      <div class="mb-5 mt-3 text-text-light dark:text-text-dark gap-3 flex flex-col">
        <p>
          +3 years of professional experience, developing front-end and back-end
          applications.
        </p>
        <p>+10 years of studying and developing software.</p>
        <p>
          Skills: C#, C++, JavaScript, TypeScript, ASP.NET, .NET Core, Angular,
          React, Vue.js, Node.js, Express.js, Django, Flask, Ruby on Rails,
          Laravel, MySQL, PostgreSQL, MongoDB, Redis, GraphQL, RESTful API, Git,
          Docker, AWS, Azure, Heroku, Jenkins, Travis CI, CircleCI, Git, Rust,
          Go, Python, Django, RabbitMQ, Web API, Entity Framework, EF Core, SQL
          Server, Redis, Azure Cosmos DB, SQLite, Dapper, Unit Testing, Signal
          R.
        </p>
        <p>
          As a Full Stack Developer with experience in C#, APS.NET, .NET, .NET
          Core, SQL Server, Azure, APS.NET MVC, .NET Web API, REST API, Razor
          pages, and Git, I have developed solutions for companies such as
          Stefanini Brasil, Jackson Dawson, Alvarez & Marsal, and Raízen. In the
          past, I worked as a Developer for Dell using .NET Core to create
          internal systems. My academic background includes a Bachelor's degree
          in Computer Engineering from the Universidade Federal do Ceará, where
          I was a CNPq Scholar. My personal interests include Artificial
          Intelligence, Games, Sports, Chess, and Neuroscience.
        </p>
      </div>
      <div class="flex gap-5">
        <Button github text="Github" onClick={openGithub} />
        <Button linkedin text="Linkedin" onClick={openLinkedin} />
      </div>
    </div>
  );
};

export default Intro;
