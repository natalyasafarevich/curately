import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./button";

const meta = {
  title: "Shared/UI/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: { children: "Sign Up" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: "primary" },
  render: (args) => (
    <div className="w-64">
      <Button {...args} />
    </div>
  ),
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Continue with Google" },
  render: (args) => (
    <div className="w-64">
      <Button {...args} />
    </div>
  ),
};
