import {Component} from 'solid-js';

const MobileWarning: Component = () => {
  return <div class="flex items-center justify-center h-screen">
    <div class="text-center">
      Sorry, but this site is not optimized for mobile devices. Please, use a desktop computer.
      <br/>
      Mobile version Comming really soon :)
    </div>
  </div>;
};

export default MobileWarning;
