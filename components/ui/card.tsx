import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-[#e6dfd2] bg-white shadow-[0_24px_70px_rgba(23,32,27,0.08)]",
        className,
      )}
      {...props}
    />
  );
}
