import type { Meta, StoryObj } from "@storybook/react-vite";

import { Notice } from "./Notice";

const meta = {
  title: "Shared/UI/Notice",
  component: Notice,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Notice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "Your health data is private and encrypted. This app provides general guidance only and is not a substitute for professional medical advice.",
  },
  render: (args) => (
    <div className="w-96">
      <Notice {...args} />
    </div>
  ),
};
