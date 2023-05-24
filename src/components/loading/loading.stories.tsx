import type { Meta, StoryFn } from '@storybook/react';

import { Loading } from './loading';

const meta: Meta = {
  title: 'Components/Loading',
  component: Loading,
};

export default meta;

const Template: StoryFn = (props) => (
  <Loading {...props} />
);

export const Default = Template.bind({});
