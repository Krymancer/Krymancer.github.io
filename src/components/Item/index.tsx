import {Component, For} from 'solid-js';
import {VsCircleSmallFilled} from 'solid-icons/vs';

interface ItemProps {
    type: string;
    title: string;
    company: string;
    description: string[];
    location: string;
    startDate: string;
    endDate: string;
};

const Item : Component<ItemProps> = (props: ItemProps) => {
  return <div class="pb-5">
    <div class="text-xl font-bold text-text-light dark:text-text-dark">{`${props.title} - ${props.title}`}</div>
    <div class="flex flex-col text-md font-thin text-lightText-light dark:text-lightText-dark">
      <span>{props.company}</span>
      <div class="flex flex-row gap-2">
        <span class="flex flex-row gap-1 items-center">
          {props.location}
        </span>
        <span class="flex flex-row gap-1 items-center">
          <VsCircleSmallFilled />
          {`${props.startDate} - ${props.endDate}`}
        </span>
      </div>
    </div>
    <div class="flex flex-col pt-3">
      <For each={props.description}>
        {(item, i) => <p class="text-text-light dark:text-text-dark text-md pb-2 font-normal">{item}</p>}
      </For>
    </div>
  </div>;
};

export default Item;
