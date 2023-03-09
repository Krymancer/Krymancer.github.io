import {Component} from 'solid-js';

import Button from '@components/Button';

const Intro : Component = () => {
  function openGithub() {
    window.open('https://github.com/krymancer', '_blank');
  };

  function openLinkedin() {
    window.open('https://linkedin.com/in/junior-nascm', '_blank');
  };
  return <div class="flex flex-col pb-3">
    <div class="text-4xl text-text-light dark:text-text-dark">Hi, I'm Júnior!</div>
    <div class="mb-5 mt-3 text-text-light dark:text-text-dark">Passionate developer fascinated by science and technology, combining both to create innovative solutions that positively impact the world. Experienced in programming and up-to-date with latest advancements in science and technology. Constantly pushing boundaries, exploring new ideas and opportunities. Excited about the future and eager to be part of upcoming advancements.</div>
    <div class="flex gap-5">
      <Button github text="Github" onClick={openGithub}/>
      <Button linkedin text="Linkedin" onClick={openLinkedin} />
    </div>
  </div>;
};

export default Intro;
