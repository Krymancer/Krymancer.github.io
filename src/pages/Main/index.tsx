import {Component, createSignal} from 'solid-js';

import MobileWarning from '@components/MobileWarning';
import Resume from 'layouts/Resume';
import Content from '@components/Content';
import Header from '@components/Header';
import Separator from '@components/Separator';
import Intro from '@components/Intro';
import Education from '@components/Education';
import WorkExperience from '@components/WorkExperience';
import Panel from '@components/Panel';
import Footer from '@components/Footer';

import {skills, tools, thecnologies} from '../../data/index';

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

  loadTheme();

  if (screen.width < 990) {
    return <MobileWarning />;
  }

  return <div class={`${theme()} w-screen`}>
    <Resume>
      <Header toggleTheme={toggleTheme} theme={theme()} />
      <Separator />
      <Content>
        <div class="w-[620px] flex flex-col gap-[12px]">
          <Intro />
          <Education />
          <WorkExperience />
        </div>
        <div class="flex flex-col gap-[10px]">
          <Panel data={skills} title="Skills" />
          <Panel data={tools} title="Tools" />
          <Panel data={thecnologies} title="Technologies" />
        </div>
      </Content>
      <Separator />
      <Footer />
    </Resume>
  </div>;
};

export default Main;
