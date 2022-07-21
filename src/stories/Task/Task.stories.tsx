import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Task from "./Task";

export default {
  title: 'Example/Task',
  component: Task
} as ComponentMeta<typeof Task>

const Template: ComponentStory<typeof Task> = args => <Task {...args} />

export const Default = Template.bind({})

Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
  }
}
