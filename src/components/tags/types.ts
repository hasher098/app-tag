export interface SelectedTagProps {
  id: string;
  name: string;
  power: number;
}

export type DialogType = "tags" | "info" | "messages" | null;

export interface ToolbarIconProps {
  icon: React.ElementType;
  tooltip: string;
  dialogType?: DialogType;
  onClick?: () => void;
}

export interface RatingBarsProps {
  power: number;
}
