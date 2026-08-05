import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoonIllustration } from "./MoonIllustration";

const meta = {
  title: "Shared/UI/MoonIllustration",
  component: MoonIllustration,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center bg-emerald-deep p-10">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MoonIllustration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
