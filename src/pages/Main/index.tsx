import {Component, createSignal, For} from 'solid-js';

import Header from '@components/Header';
import Separator from '@components/Separator';
import Intro from '@components/Intro';
import Section from '@components/Section';
import Item from '@components/Item';
import Footer from '@components/Footer';

import {skills, tools, thecnologies, workExperience, education} from '../../data/index';

const Main: Component = () => {
  const [theme, setTheme] = createSignal('light');

  function getPreferredTheme() {
    const theme = localStorage.getItem('theme');

    if (!theme) {
      const getCurrentTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDarkMode = getCurrentTheme();
      setTheme(isDarkMode ? 'dark' : 'light');
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

      return;
    }

    setTheme(theme);
  }

  getPreferredTheme();

  function changeTheme() {
    setTheme(theme() === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', theme());
  };

  return <div class={`${theme()} w-screen`}>
    <div class="bg-background-light dark:bg-background-dark ">
      <div class="items-center justify-center h-full w-[1000px] m-auto">
        <Header changeTheme={changeTheme} theme={theme()}/>
        <Separator/>
        <div class="my-10 px-[20px] flex flex-row justify-between  ">
          <div class="w-[620px] flex flex-col gap-[12px]">
            <Intro />
            <Section title="Education">
              <For each={education} fallback={null}>
                {({type, title, institution, location, description, startDate, endDate}) => <Item type={type} title={title} company={institution} location={location} descripton={description} startDate={startDate} endDate={endDate} />}
              </For>
            </Section>
            <Section title="Work Experience" >
              <For each={workExperience} fallback={null}>
                {({type, title, company, location, description, startDate, endDate}) => <Item type={type} title={title} company={company} location={location} descripton={description} startDate={startDate} endDate={endDate} />}
              </For>
            </Section>
          </div>
          <div class="flex flex-col gap-[10px]">
            <Section title="Skills">
              <ul class="list-disc list-inside">
                <For each={skills} fallback={null}>
                  {(skill) => <li class="text-text-light dark:text-text-dark">{skill}</li>}
                </For>
              </ul>
            </Section>
            <Section title="Tools">
              <ul class="list-disc list-inside">
                <For each={tools} fallback={null}>
                  {(tool) => <li class="text-text-light dark:text-text-dark">{tool}</li>}
                </For>
              </ul>
            </Section>
            <Section title="Technologies">
              <ul class="list-disc list-inside">
                <For each={thecnologies} fallback={null}>
                  {(technology) => <li class="text-text-light dark:text-text-dark">{technology}</li>}
                </For>
              </ul>
            </Section>
          </div>
        </div>
        <Separator/>
        <Footer />
      </div>
    </div>
  </div>;
};

export default Main;
