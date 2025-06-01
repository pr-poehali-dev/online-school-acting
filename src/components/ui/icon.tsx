import * as React from "react";
import { icons, LucideIcon } from "lucide-react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof icons;
  size?: number;
  fallback?: keyof typeof icons;
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 24, fallback = "CircleAlert", ...props }, ref) => {
    const LucideIcon = icons[name] as LucideIcon;
    const FallbackIcon = icons[fallback] as LucideIcon;

    if (!LucideIcon) {
      return <FallbackIcon ref={ref} size={size} {...props} />;
    }

    return <LucideIcon ref={ref} size={size} {...props} />;
  },
);
Icon.displayName = "Icon";

export default Icon;
