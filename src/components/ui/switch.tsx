"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch@1.1.3";
import { Sun, Moon } from "lucide-react";

import { cn } from "./utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <>
      <style>{`
        [data-slot="switch"][data-state="checked"] .sun { opacity: 1; }
        [data-slot="switch"][data-state="checked"] .moon { opacity: 0; }
        [data-slot="switch"][data-state="unchecked"] .sun { opacity: 0; }
        [data-slot="switch"][data-state="unchecked"] .moon { opacity: 1; }
      `}</style>

      <SwitchPrimitive.Root
        data-slot="switch"
        className={cn(
          "peer inline-flex h-8 w-14 items-center rounded-full p-1 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 transition-colors duration-300 relative",
          className,
        )}
        {...props}
      >
        <SwitchPrimitive.Thumb
          data-slot="switch-thumb"
          className={cn(
            "pointer-events-none block w-6 h-6 rounded-full bg-white/95 dark:bg-black/80 shadow-md transform transition-all duration-200 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0 data-[state=checked]:scale-105 flex items-center justify-center",
          )}
        >
          <span className="sun absolute opacity-0 transition-opacity duration-200 text-amber-500">
            <Sun size={14} />
          </span>
          <span className="moon absolute opacity-100 transition-opacity duration-200 text-slate-500">
            <Moon size={14} />
          </span>
        </SwitchPrimitive.Thumb>
      </SwitchPrimitive.Root>
    </>
  );
}

export { Switch };
