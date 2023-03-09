import {Component, For} from 'solid-js';

import Section from '@components/Section';
import Item from '@components/Item';

import {workExperience} from '../../data/index';

const WorkExperience: Component = () => {
  return <Section title="Work Experience" >
    <For each={workExperience} fallback={null}>
      {({type, title, company, location, description, startDate, endDate}) =>
        (
          <Item type={type}
            title={title}
            company={company}
            location={location}
            description={description}
            startDate={startDate}
            endDate={endDate} />
        )}
    </For>
  </Section>;
};

export default WorkExperience;
