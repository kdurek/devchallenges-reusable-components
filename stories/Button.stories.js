import React from "react"

import { Button } from "./Button"

export default {
  title: "Example/Button",
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {}

export const Outlined = Template.bind({})
Outlined.args = {
  label: "Outlined",
}
