import { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    layout: 'centered', // 컴포넌트를 화면 중앙에 배치합니다
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
