import {Component, JSX} from 'solid-js';

interface ContentProps {
  children: JSX.Element | JSX.Element[];
}

const Content: Component<ContentProps> = (props) => {
  return <div class="my-10 px-[20px] flex flex-row justify-between ">
    {props.children}
  </div>;
};

export default Content;
