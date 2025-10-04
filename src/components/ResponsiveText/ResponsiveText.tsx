import cn from "classnames";
import React from "react";

import styles from "./responsiveText.module.less";
import { useResponsiveText } from "./useResponsiveText";

type ResponsiveTextProps = {
  items: string[];
  align?: "left" | "center" | "right";
} & Omit<React.ComponentProps<"div">, "children">;

export const ResponsiveText = ({
  items,
  className,
  align = "left",
  ...divProps
}: ResponsiveTextProps) => {
  const { containerRef, itemRefs, visibleIndex } = useResponsiveText({ items });

  return (
    <div ref={containerRef}
      className={cn(styles.responsiveTextContainer,
        {
          [styles.alignLeft]: align === "left",
          [styles.alignCenter]: align === "center",
          [styles.alignRight]: align === "right",
        },
        className,
      )}
      {...divProps}
    >
      {items.map((item, index) => {
        return (
          <span
            key={item}
            ref={(el) => {
              if (el) {
                itemRefs.current[index] = el;
              }
            }}
            className={cn(styles.responsiveTextItem, {
              [styles.isVisible]: index === visibleIndex,
            })}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
};
