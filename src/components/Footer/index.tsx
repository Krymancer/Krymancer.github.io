import {Component} from 'solid-js';

const Footer : Component = () => {
  return <div class=" text-text-light dark:text-text-dark w-full mt-2 mb-2">
    <div class="flex justify-between w-[96%] m-auto">
      <div>
    © {new Date().getFullYear()} - Present / Júnior Nascimento
      </div>
      <div>
    Digital résumé. Print only if necessary. 🌱
      </div>
    </div>
  </div>;
};

export default Footer;
