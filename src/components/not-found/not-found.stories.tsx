import type { Meta, StoryFn } from '@storybook/react';

import { NotFound } from './not-found';

const meta: Meta = {
  title: 'Component/NotFound',
  component: NotFound,
};

export default meta;

const Template: StoryFn = (props) => (
  <NotFound {...props} />
);

export const Default = Template.bind({});
