import {Component} from 'solid-js';
import {VsCircleSmallFilled} from 'solid-icons/vs';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
};

import Profile from '@components/Profile';
import ThemeToggle from '@components/ThemeToggle';

const Header : Component<HeaderProps> = (props:HeaderProps) => {
  return <div class="flex justify-between p-5 pt-1 pb-1 lg:w-full">
    <div class="gap-5 items-center hidden lg:visible lg:flex">
      <div class="flex items-center text-text-light dark:text-text-dark">
      (88) 9 9630-2439
        <VsCircleSmallFilled/>
        <a href="mailto:junior.nascm@gmail.com" class="underline">
        junior.nascm@gmail.com
        </a>
      </div>
    </div>
    <div class="flex gap-1">
      <ThemeToggle theme={props.theme} onClick={props.toggleTheme}/>
      <Profile/>
    </div>
  </div>;
};

export default Header;
