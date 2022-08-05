import Section from '@components/Section';
import {Component, For} from 'solid-js';

interface PanelProps {
  data: string[];
  title: string;
}

const Panel: Component<PanelProps> = (props: PanelProps) => {
  return <Section title={props.title}>
    <ul class="list-disc list-inside">
      <For each={props.data} fallback={null}>
        {(item) => <li class="text-text-light dark:text-text-dark">{item}</li>}
      </For>
    </ul>
  </Section>;
};

export default Panel;
