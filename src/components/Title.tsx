import React, { PropsWithChildren } from "react";

interface Props {
  id?: string;
  className?: string;
}

export const Title = React.forwardRef<
  HTMLHeadingElement,
  PropsWithChildren<Props>
>(({ id, className = "", children }, ref) => {
  return (
    <h1 ref={ref} id={id} className={`${className} font-[Aliseo] font-bold text-5xl`}>
      {children}
    </h1>
  );
});
