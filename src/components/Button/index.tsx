import {Component, Match, Switch} from 'solid-js';

interface ButtonProps {
  onClick?: () => void;
  github?: boolean;
  linkedin?: boolean;
  default?: boolean | true;
  text?: string;
}

const Button : Component<ButtonProps> = (props: ButtonProps) => {
  const cssClass = 'p-[10px] rounded-[12px] h-[54px] font-bold';
  return <Switch fallback={null}>
    <Match when={props.github}>
      <button class={`bg-green-default hover:bg-green-hover shadow-githubButton ${cssClass}`} onClick={props.onClick}>
        {props.text}
      </button>
    </Match>
    <Match when={props.linkedin}>
      <button class={`bg-blue-default hover:bg-blue-hover shadow-linkedinButton ${cssClass}`} onClick={props.onClick}>
        {props.text}
      </button>
    </Match>
    <Match when={props.default}>
      <button class={`bg-purple-default hover:bg-purple-hover shadow-defaultButton  text-text-dark dark:text-text-dark ${cssClass}`} onClick={props.onClick}>
        {props.text}
      </button>
    </Match>
  </Switch>;
};

export default Button;
