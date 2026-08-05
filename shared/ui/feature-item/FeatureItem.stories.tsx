import type { Meta, StoryObj } from "@storybook/react-vite";

import { FeatureItem } from "./FeatureItem";

const meta = {
  title: "Shared/UI/FeatureItem",
  component: FeatureItem,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: { children: "Personalized phase tracking" },
  decorators: [
    (Story) => (
      <div className="bg-emerald-deep p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FeatureItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
