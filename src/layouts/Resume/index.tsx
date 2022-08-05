import {Component, JSX} from 'solid-js';

interface ResumeProps {
  children: JSX.Element | JSX.Element[];
}

const Resume: Component<ResumeProps> = (props) => {
  return <div class="bg-background-light dark:bg-background-dark ">
    <div class="items-center justify-center h-full w-[1000px] m-auto">
      {props.children}
    </div>
  </div>; ;
};

export default Resume;
