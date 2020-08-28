export interface ColorItemProps {
  name: string;
  color: string;
  contrast: string;
  shade?: string;
  tint?: string;
}

export interface ColorAccordionProps {
  colors: ColorItemProps[];
}
