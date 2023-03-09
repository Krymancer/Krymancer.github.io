import {Component, createSignal, createEffect} from 'solid-js';

import Resume from 'layouts/Resume';
import Content from '@components/Content';
import Header from '@components/Header';
import Separator from '@components/Separator';
import Intro from '@components/Intro';
import Education from '@components/Education';
import WorkExperience from '@components/WorkExperience';
import Panel from '@components/Panel';
import Footer from '@components/Footer';

import {skills, tools, technologies, languages} from '../../data/index';

import themeManager from '../../utils/themeManager';

const Main: Component = () => {
  const [theme, setTheme] = createSignal('light');

  function loadTheme() {
    const theme = themeManager.getTheme();
    setTheme(theme);
  }


  function toggleTheme() {
    setTheme(theme() === 'light' ? 'dark' : 'light');
    themeManager.saveTheme(theme());
  }

  createEffect(loadTheme);

  return <div class={`${theme()} w-screen`}>
    <Resume>
      <Header toggleTheme={toggleTheme} theme={theme()} />
      <Separator />
      <Content>
        <div class="lg:w-[620px] w-full flex flex-col gap-[12px]">
          <Intro />
          <WorkExperience />
          <Education />
        </div>
        <div class="lg:hidden h-[10px]"></div>
        <div class="flex flex-col gap-[10px]">
          <Panel data={skills} title="Skills" />
          <Panel data={tools} title="Tools" />
          <Panel data={technologies} title="Technologies" />
          <Panel data={languages} title="Languages" />
        </div>
      </Content>
      <Separator />
      <Footer />
    </Resume>
  </div>;
};

export default Main;
