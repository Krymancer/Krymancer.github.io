import {Component, JSX} from 'solid-js';

interface SectionProps {
  title?: string;
  children?: JSX.Element[] | JSX.Element;
}

const Section : Component<SectionProps> = (props : SectionProps) => {
  return <div class="border-border-light dark:border-border-dark border-2 rounded-[12px] p-[10px]">
    <div class="text-[20px] font-bold text-text-light dark:text-text-dark uppercase mb-[20px]">
      {props.title}
    </div>
    <div class="">
      {props.children}
    </div>
  </div>;
};

export default Section;
