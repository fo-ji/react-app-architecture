import { ArrowBackIcon } from '@chakra-ui/icons';
import type { Meta, StoryFn } from '@storybook/react';

import { Link, type LinkProps } from './link';

const meta: Meta = {
  title: 'Components/Link',
  component: Link,
};

export default meta;

const Template: StoryFn<LinkProps> = (props) => (
  <Link {...props} />
);

export const Default = Template.bind({});

Default.args = {
  href: '/',
  children: 'Click Me',
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  href: '/',
  children: 'With Icon',
  icon: <ArrowBackIcon />,
};
