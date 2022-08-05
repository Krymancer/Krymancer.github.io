import {Component} from 'solid-js';

const Separator : Component = () => {
  return <div class="w-full flex justify-center">
    <div class="h-[1px] w-[96%] bg-border-light dark:bg-border-dark"></div>
  </div>;
};
export default Separator;
