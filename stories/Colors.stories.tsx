import type { Meta, StoryObj } from "@storybook/react-vite";

type ColorToken = {
  name: string;
  variable: string;
  hex: string;
  textColor?: string;
};

const mainColors: ColorToken[] = [
  {
    name: "Emerald Deep",
    variable: "--color-emerald-deep",
    hex: "#0F4C3A",
    textColor: "#FAF7F2",
  },
  {
    name: "Terracotta",
    variable: "--color-terracotta",
    hex: "#C97B4A",
    textColor: "#FFFFFF",
  },
  {
    name: "Sand",
    variable: "--color-sand",
    hex: "#F3E9DE",
    textColor: "#8A5636",
  },
  {
    name: "Sand Text",
    variable: "--color-sand-text",
    hex: "#8A5636",
    textColor: "#FFFFFF",
  },
  {
    name: "Background",
    variable: "--color-bg",
    hex: "#FAF7F2",
    textColor: "#1A2E28",
  },
];

const textColors: ColorToken[] = [
  {
    name: "Text Primary",
    variable: "--color-text-primary",
    hex: "#1A2E28",
    textColor: "#FAF7F2",
  },
  {
    name: "Text Secondary",
    variable: "--color-text-secondary",
    hex: "#555555",
    textColor: "#FFFFFF",
  },
  {
    name: "Text Muted",
    variable: "--color-text-muted",
    hex: "#7A877E",
    textColor: "#FFFFFF",
  },
  {
    name: "Border",
    variable: "--color-border",
    hex: "#ECE7DC",
    textColor: "#1A2E28",
  },
];

const phaseColors: ColorToken[] = [
  {
    name: "Menstrual",
    variable: "--color-phase-menstrual",
    hex: "#7A3B3B",
    textColor: "#FFFFFF",
  },
  {
    name: "Follicular",
    variable: "--color-phase-follicular",
    hex: "#4A7A5C",
    textColor: "#FFFFFF",
  },
  {
    name: "Ovulatory",
    variable: "--color-phase-ovulatory",
    hex: "#C97B4A",
    textColor: "#FFFFFF",
  },
  {
    name: "Luteal",
    variable: "--color-phase-luteal",
    hex: "#5C4A6B",
    textColor: "#FFFFFF",
  },
];

function ColorSwatch({ color }: { color: ColorToken }) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden border border-[#ECE7DC] shadow-sm w-full">
      <div
        className="h-24 flex items-end p-3"
        style={{ backgroundColor: color.hex, color: color.textColor ?? "#000" }}
      >
        <span className="text-sm font-semibold">{color.name}</span>
      </div>
      <div className="bg-white p-3 text-xs space-y-1">
        <div className="font-mono text-[#1A2E28]">{color.hex}</div>
        <div className="font-mono text-[#7A877E]">{color.variable}</div>
      </div>
    </div>
  );
}

function ColorSection({
  title,
  colors,
}: {
  title: string;
  colors: ColorToken[];
}) {
  return (
    <div className="mb-10">
      <h3 className="text-base font-semibold text-[#1A2E28] mb-4">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {colors.map((color) => (
          <ColorSwatch key={color.variable} color={color} />
        ))}
      </div>
    </div>
  );
}

function ColorPalettePage() {
  return (
    <div className="p-8 bg-[#FAF7F2] min-h-screen">
      <h1 className="text-2xl font-bold text-[#1A2E28] mb-2">Color Palette</h1>
      <p className="text-sm text-[#555] mb-8">
        Full list of design tokens used in the application. Source:
        theme-colors.css
      </p>

      <ColorSection title="Main" colors={mainColors} />
      <ColorSection title="Text and Borders" colors={textColors} />
      <ColorSection title="Cycle Phases" colors={phaseColors} />
    </div>
  );
}

const meta: Meta<typeof ColorPalettePage> = {
  title: "Design System/Colors",
  component: ColorPalettePage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ColorPalettePage>;

export const AllColors: Story = {};
