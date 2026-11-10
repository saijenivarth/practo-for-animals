import { useState, type ReactNode } from "react";
import { Copy, Phone, PhoneOff } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Provider } from "@/data/providers";
import { DemoNotice } from "./FormSuccess";

export function CallDialog({ provider, trigger }: { provider: Provider; trigger: ReactNode }) {
  const [open, setOpen] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(provider.phone);
      toast.success("Sample number copied", { description: "This number is for demonstration only." });
    } catch {
      toast.error("Couldn't copy the number");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-md rounded-2xl">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">Call {provider.name}</DialogTitle>
          <DialogDescription>
            {provider.area}, {provider.city} · {provider.hours}
          </DialogDescription>
        </DialogHeader>

        <div className="rounded-xl bg-secondary p-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Sample contact number
          </p>
          <p className="mt-1 font-display text-2xl font-bold tracking-wide text-primary">
            {provider.phone}
          </p>
        </div>

        <DemoNotice>
          In the live product, this button would dial the provider directly. This prototype does
          not place real calls.
        </DemoNotice>

        <div className="flex flex-col gap-2 sm:flex-row">
          <Button variant="outline" className="flex-1" onClick={copy}>
            <Copy /> Copy number
          </Button>
          <Button
            className="flex-1"
            onClick={() => {
              setOpen(false);
              toast("Calling is disabled in this demo", {
                icon: <PhoneOff className="size-4" />,
                description: "No call was placed.",
              });
            }}
          >
            <Phone /> Call (demo)
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
