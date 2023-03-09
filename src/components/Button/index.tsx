import {Component, Match, Switch} from 'solid-js';
import {AiOutlineGithub, AiFillLinkedin} from 'solid-icons/ai';
interface ButtonProps {
  onClick?: () => void;
  github?: boolean;
  linkedin?: boolean;
  default?: boolean | true;
  text?: string;
}

const Button : Component<ButtonProps> = (props: ButtonProps) => {
  const cssClass = 'p-5 rounded-[12px] h-[54px] font-bold flex flex-row items-center gap-2';
  return <Switch fallback={null}>
    <Match when={props.github}>
      <button class={`bg-green-default hover:bg-green-hover shadow-githubButton ${cssClass}`} onClick={props.onClick}>
        <AiOutlineGithub />
        {props.text}
      </button>
    </Match>
    <Match when={props.linkedin}>
      <button class={`bg-blue-default hover:bg-blue-hover shadow-linkedinButton ${cssClass}`} onClick={props.onClick}>
        <AiFillLinkedin />
        {props.text}
      </button>
    </Match>
    <Match when={props.default}>
      <button class={`bg-purple-default hover:bg-purple-hover shadow-defaultButton text-text-light dark:text-text-light ${cssClass}`} onClick={props.onClick}>
        {props.text}
      </button>
    </Match>
  </Switch>;
};

export default Button;
