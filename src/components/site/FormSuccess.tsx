import type { ReactNode } from "react";
import { CheckCircle2, Info } from "lucide-react";

export function FormSuccess({
  title,
  children,
  action,
}: {
  title: string;
  children: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div role="status" aria-live="polite" className="animate-rise text-center">
      <div className="mx-auto grid size-14 place-items-center rounded-full bg-secondary text-primary">
        <CheckCircle2 className="size-7" />
      </div>
      <h3 className="mt-4 text-xl font-bold">{title}</h3>
      <div className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
      <p className="mx-auto mt-4 flex max-w-sm items-start gap-2 rounded-lg bg-highlight-soft p-3 text-left text-xs text-highlight-foreground">
        <Info className="mt-0.5 size-4 shrink-0" />
        This is a prototype. Nothing has been sent to any provider and no booking, call or
        registration has actually taken place.
      </p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export function DemoNotice({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-start gap-2 rounded-lg border border-highlight/40 bg-highlight-soft px-3 py-2 text-xs text-highlight-foreground">
      <Info className="mt-0.5 size-3.5 shrink-0" />
      <span>{children}</span>
    </p>
  );
}
