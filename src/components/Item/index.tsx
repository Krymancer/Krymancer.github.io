import {Component} from 'solid-js';

interface ItemProps {
    type: string;
    title: string;
    company: string;
    descripton: string;
    location: string;
    startDate: string;
    endDate: string;
};

const Item : Component<ItemProps> = (props: ItemProps) => {
  return <div class="pb-[10px]">
    <div class="text-[18px] font-bold text-text-light dark:text-text-dark">{`${props.title} - ${props.title}`}</div>
    <div class="text-[14px] font-thin text-lightText-light dark:text-lightText-dark">{`${props.company} / ${props.location} / ${props.startDate} - ${props.endDate}`}</div>
    <div class="text-text-light dark:text-text-dark mt-[10px] font-normal">
      {props.descripton}
    </div>
  </div>;
};

export default Item;
