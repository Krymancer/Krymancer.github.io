import {Component, JSX} from 'solid-js';

interface ContentProps {
  children: JSX.Element | JSX.Element[];
}

const Content: Component<ContentProps> = (props) => {
  return <div class="my-5 px-5 flex flex-col justify-between lg:flex-row ">
    {props.children}
  </div>;
};

export default Content;
