"use client";

import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { CreditCard } from "lucide-react";
import { useId } from "react";
import { usePaymentInputs } from "react-payment-inputs";

export default function Component() {
  const id = useId();
  const { getCardNumberProps } = usePaymentInputs();

  return (
    <div className="space-y-2">
      <Label htmlFor={`number-${id}`}>Card Number</Label>
      <div className="relative">
        <Input
          {...getCardNumberProps()}
          id={`number-${id}`}
          className="peer ps-9 [direction:inherit]"
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <CreditCard size={16} strokeWidth={2} aria-hidden="true" />
        </div>
      </div>
      <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
        Built with{" "}
        <a
          className="underline hover:text-foreground"
          href="https://github.com/medipass/react-payment-inputs"
          target="_blank"
          rel="noopener nofollow"
        >
          React Payment Inputs
        </a>
      </p>
    </div>
  );
}
