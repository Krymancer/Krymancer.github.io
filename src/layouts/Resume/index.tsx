import {Component, JSX} from 'solid-js';

interface ResumeProps {
  children: JSX.Element | JSX.Element[];
}

const Resume: Component<ResumeProps> = (props) => {
  return <div class="h-full w-full lg:w-[1000px] mx-auto overflow-x-hidden">
    <div class="flex flex-col items-center justify-center">
      {props.children}
    </div>
  </div>; ;
};

export default Resume;
