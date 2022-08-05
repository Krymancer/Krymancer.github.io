import {Component, For} from 'solid-js';

import Item from '@components/Item';
import Section from '@components/Section';

import {education} from '../../data/index';

const Education: Component = () => {
  return <Section title="Education">
    <For each={education} fallback={null}>
      {({type, title, institution, location, description, startDate, endDate}) =>
        (
          <Item type={type}
            title={title}
            company={institution}
            location={location}
            descripton={description}
            startDate={startDate}
            endDate={endDate} />
        )}
    </For>
  </Section>;
};

export default Education;
