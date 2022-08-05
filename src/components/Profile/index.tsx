import {Component} from 'solid-js';

import profileImageUrl from '@images/profile.png';

const Profile: Component = () => {
  return <div class="flex items-center gap-[10px] p-2">
    <div class="flex flex-col gap-[1px] justify-end">
      <div class="text-text-light dark:text-text-dark font-bold leading-[14px]" >Júnior Nascimento, 22</div>
      <div class="text-text-light dark:text-text-dark leading-[14px] self-end">FullStack Developer</div>
    </div>
    <img class="w-[50px] h-[50px] bg-background-dark dark:bg-background-light rounded-full" src={profileImageUrl} alt="Profile" />
  </div>;
};

export default Profile;
