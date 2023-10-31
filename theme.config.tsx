import { DocsThemeConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import { StormyLinuxLogo } from './components/Icons';
import stormyLinuxLogo from "../assets/stormylinux-logo.png"


const config: DocsThemeConfig = {
  
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s - StormyLinux',
        description: 'Docs | %s',
      };
    }
    return {
      titleTemplate: 'StormyLinux',
      description: 'StormyLinux is a Debian based distribution focused on minimalism, speed and productivity.',
    };
  },
  logo: (
    <>
      <StormyLinuxLogo />
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Stormy Linux
      </span>
    </>),
  project: {
    link: 'https://github.com/stormylinux',
  },
  // chat: {
  //   link: 'https://discord.gg/stormylinux',
  // },
  docsRepositoryBase: 'https://github.com/stormylinux',
  gitTimestamp: <></>,
  main: ({ children }) => <div style={{ maxWidth: 1024, margin: '0 auto' }}>{children}</div>,

  themeSwitch: {
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'system',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  editLink: {
    text: '',
  },
  head: (
    <>
      <link rel="icon" type="image/svg+xml" href="https://avatars.githubusercontent.com/u/146060039?s=200&v=4" />
    </>
  ),
  footer: {
    component: () => <div />,
  },

};

export default config;