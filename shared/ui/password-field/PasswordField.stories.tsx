import type { Meta, StoryObj } from "@storybook/react-vite";

import { PasswordField } from "./PasswordField";

const meta = {
  title: "Shared/UI/PasswordField",
  component: PasswordField,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof PasswordField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Password", placeholder: "Create a password" },
  render: (args) => (
    <div className="w-72">
      <PasswordField {...args} />
    </div>
  ),
};
