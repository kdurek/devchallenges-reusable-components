module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "storybook-dark-mode/register",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
}
