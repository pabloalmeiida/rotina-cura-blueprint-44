import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "text-white font-semibold border-0 bg-gradient-cta shadow-elegant hover:shadow-glow hover:scale-[1.02] transition-all duration-300 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-button-hover before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        cta: "text-white font-semibold border-0 bg-gradient-cta shadow-elegant hover:shadow-glow hover:scale-[1.02] transition-all duration-300 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-button-hover before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
        hero: "text-white font-bold border-0 bg-gradient-banner shadow-elegant hover:shadow-glow hover:scale-[1.02] transition-all duration-300 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-button-hover before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
        medical: "text-white border-0 bg-gradient-cta shadow-elegant hover:shadow-glow hover:scale-[1.02] transition-all duration-300 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-button-hover before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp 
        className={cn(buttonVariants({ variant, size, className }))} 
        ref={ref} 
        {...props} 
      >
        <span className="relative z-10">{children}</span>
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
