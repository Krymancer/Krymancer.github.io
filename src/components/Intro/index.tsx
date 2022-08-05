import {Component} from 'solid-js';

import Button from '@components/Button';

const Intro : Component = () => {
  function openGithub() {
    window.open('https://github.com/krymancer', '_blank');
  };

  function openLinkedin() {
    window.open('https://linkedin.com/in/junior-nascm', '_blank');
  };
  return <div class="flex flex-col">
    <div class="text-[32px] text-text-light dark:text-text-dark">Hi, I'm Júnior!</div>
    <div class="mb-[10px] text-text-light dark:text-text-dark">A programmer & engineer from Sobral, CE. Passionate about artificial intelligence and science.</div>
    <div class="flex gap-[10px]">
      <Button github text="Github" onClick={openGithub}/>
      <Button linkedin text="Linkedin" onClick={openLinkedin} />
    </div>
  </div>;
};

export default Intro;
