import React, { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export const Title = React.forwardRef<
  HTMLHeadingElement,
  PropsWithChildren<Props>
>(({ className = "", children }, ref) => {
  return (
    <h1 ref={ref} className={`${className} font-[Aliseo] font-bold text-5xl`}>
      {children}
    </h1>
  );
});
