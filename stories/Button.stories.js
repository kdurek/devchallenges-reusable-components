import React from "react"

import { Button } from "../components/Button/Button"

export default {
  title: "Main/Button",
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  label: "Default",
}

export const Primary = Template.bind({})
Primary.args = {
  label: "Primary",
  color: "primary",
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: "Secondary",
  color: "secondary",
}

export const Danger = Template.bind({})
Danger.args = {
  label: "Danger",
  color: "danger",
}

export const Small = Template.bind({})
Small.args = {
  label: "Small",
  size: "sm",
}
export const Large = Template.bind({})
Large.args = {
  label: "Large",
  size: "lg",
}

export const Outline = Template.bind({})
Outline.args = {
  label: "Outline",
  variant: "outline",
  color: "primary",
  disableShadow: true,
}

export const Text = Template.bind({})
Text.args = {
  label: "Text",
  variant: "text",
  color: "primary",
  disableShadow: true,
}

export const DisableShadow = Template.bind({})
DisableShadow.args = {
  label: "Disabled Shadow",
  color: "primary",
  disableShadow: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: "Disabled",
  color: "primary",
  disabled: true,
}

export const StartIcon = Template.bind({})
StartIcon.args = {
  label: "Start Icon",
  color: "primary",
  startIcon: "local_grocery_store",
}

export const EndIcon = Template.bind({})
EndIcon.args = {
  label: "End Icon",
  color: "primary",
  endIcon: "local_grocery_store",
}
