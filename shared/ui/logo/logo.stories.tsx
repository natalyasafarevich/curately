import type { Meta, StoryObj } from "@storybook/react-vite";

import { Logo } from "./logo";

const meta = {
  title: "Shared/UI/Logo",
  component: Logo,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: { tone: "dark" },
};

export const Light: Story = {
  args: { tone: "light" },
  decorators: [
    (Story) => (
      <div className="bg-emerald-deep p-6">
        <Story />
      </div>
    ),
  ],
};
