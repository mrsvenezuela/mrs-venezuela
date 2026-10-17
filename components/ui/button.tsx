import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#247c8f] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-[#0f3d2e] text-white shadow-[0_18px_45px_rgba(15,61,46,0.22)] hover:bg-[#14513d]",
        secondary: "bg-white/86 text-[#17201b] shadow-[0_14px_40px_rgba(23,32,27,0.12)] hover:bg-white",
        ghost: "text-[#17201b] hover:bg-white/70",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { buttonVariants };
