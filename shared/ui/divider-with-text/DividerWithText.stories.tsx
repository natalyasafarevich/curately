import type { Meta, StoryObj } from "@storybook/react-vite";

import { DividerWithText } from "./DividerWithText";

const meta = {
  title: "Shared/UI/DividerWithText",
  component: DividerWithText,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: { children: "or" },
} satisfies Meta<typeof DividerWithText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-72">
      <DividerWithText {...args} />
    </div>
  ),
};
