import type { Meta, StoryObj } from "@storybook/react-vite";

import { Checkbox } from "./checkbox";

const meta = {
  title: "Shared/UI/Checkbox",
  component: Checkbox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "I agree to the Terms of Service and Privacy Policy" },
  render: (args) => (
    <div className="w-80">
      <Checkbox {...args} />
    </div>
  ),
};
