import type { Meta, StoryObj } from "@storybook/react-vite";

import { TextField } from "./TextField";

const meta = {
  title: "Shared/UI/TextField",
  component: TextField,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Name", placeholder: "Your name" },
  render: (args) => (
    <div className="w-72">
      <TextField {...args} />
    </div>
  ),
};

export const Email: Story = {
  args: { label: "Email", type: "email", placeholder: "you@example.com" },
  render: (args) => (
    <div className="w-72">
      <TextField {...args} />
    </div>
  ),
};
