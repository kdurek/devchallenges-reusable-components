import React from "react"

import { Input } from "../components/Input/Input"

export default {
  title: "Main/Input",
  component: Input,
  argTypes: {
    row: {
      control: { type: "number", min: 1, step: 1 },
    },
  },
}

const Template = (args) => <Input {...args} />

export const Default = Template.bind({})

export const Error = Template.bind({})
Error.args = { error: true }

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }

export const HelperText = Template.bind({})
HelperText.args = { helperText: "Some interesting text" }

export const HelperTextError = Template.bind({})
HelperTextError.args = { helperText: "Some interesting text", error: true }

export const StartIcon = Template.bind({})
StartIcon.args = { startIcon: "phone" }

export const EndIcon = Template.bind({})
EndIcon.args = { endIcon: "lock" }

export const Value = Template.bind({})
Value.args = { value: "Text" }

export const Small = Template.bind({})
Small.args = { smallSize: true }

export const FullWidth = Template.bind({})
FullWidth.args = { fullWidth: true }

export const Multiline = Template.bind({})
Multiline.args = { multiline: true, row: 4 }
