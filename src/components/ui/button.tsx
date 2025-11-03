import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded font-semibold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[hsl(var(--navy-primary))] text-white hover:bg-[hsl(var(--navy-dark))] hover:opacity-90 shadow-md",
        outline:
          "border-2 border-[hsl(var(--navy-primary))] text-[hsl(var(--navy-primary))] bg-transparent hover:bg-[hsl(var(--navy-primary))] hover:text-white",
        secondary:
          "bg-[hsl(var(--bg-light))] text-[hsl(var(--navy-dark))] hover:bg-[hsl(var(--gray-border))]",
        ghost: "hover:bg-[hsl(var(--bg-light))] hover:text-[hsl(var(--navy-dark))]",
        link: "text-[hsl(var(--blue-accent))] underline-offset-4 hover:underline normal-case tracking-normal font-normal",
      },
      size: {
        default: "h-auto px-10 py-3.5 text-sm",
        sm: "h-auto px-8 py-2.5 text-xs",
        lg: "h-auto px-12 py-4 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
