import {Component} from 'solid-js';
import {VsCircleSmallFilled} from 'solid-icons/vs';

import Profile from '@components/Profile';
import ThemeToggle from '@components/ThemeToggle';

const Header : Component = () => {
  return <div class="flex justify-between p-5 pt-1 pb-1 lg:w-full">
    <div class="gap-5 items-center hidden lg:visible lg:flex">
      <div class="flex h-full items-center text-text-light dark:text-text-dark">
        +55 (88) 9 9630-2439
        <VsCircleSmallFilled/>
        <a href="mailto:junior.nascm@gmail.com" class="underline">
        junior.nascm@gmail.com
        </a>
      </div>
    </div>
    <div class="flex gap-1">
      <ThemeToggle/>
      <Profile/>
    </div>
  </div>;
};

export default Header;
