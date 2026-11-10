import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Provider } from "@/data/providers";
import { bookingSchema } from "@/lib/validation";
import { FormSuccess } from "./FormSuccess";

const PET_TYPES = ["Dog", "Cat", "Bird", "Rabbit", "Other"];

export function BookingDialog({
  provider,
  trigger,
  mode = "book",
}: {
  provider: Provider;
  trigger: ReactNode;
  mode?: "book" | "contact";
}) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState<{ petName: string; date: string } | null>(null);

  const form = useForm({
    resolver: zodResolver(bookingSchema),
    defaultValues: { ownerName: "", phone: "", petName: "", petType: "", date: "", reason: "" },
    mode: "onTouched",
  });

  const today = new Date().toISOString().slice(0, 10);
  const isBook = mode === "book";

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) {
      setTimeout(() => {
        setSubmitted(null);
        form.reset();
      }, 200);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[92vh] max-w-lg overflow-y-auto rounded-2xl">
        {submitted ? (
          <FormSuccess
            title={isBook ? "Appointment request noted" : "Message noted"}
            action={<Button onClick={() => handleOpenChange(false)}>Done</Button>}
          >
            Your demo request for <strong>{submitted.petName}</strong> at{" "}
            <strong>{provider.name}</strong>
            {isBook && (
              <>
                {" "}on{" "}
                <strong>
                  {new Date(submitted.date + "T00:00:00").toLocaleDateString("en-IN", {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                  })}
                </strong>
              </>
            )}{" "}
            was validated successfully.
          </FormSuccess>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-xl">
                {isBook ? "Book an appointment" : "Contact provider"}
              </DialogTitle>
              <DialogDescription>
                {provider.name} · {provider.area}, {provider.city}
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form
                noValidate
                onSubmit={form.handleSubmit((v) => setSubmitted({ petName: v.petName, date: v.date }))}
                className="grid gap-4 sm:grid-cols-2"
              >
                <FormField
                  control={form.control}
                  name="ownerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your name</FormLabel>
                      <FormControl><Input placeholder="e.g. Asha Menon" autoComplete="name" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile number</FormLabel>
                      <FormControl><Input type="tel" inputMode="tel" placeholder="98450 12345" autoComplete="tel" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="petName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pet's name</FormLabel>
                      <FormControl><Input placeholder="e.g. Bruno" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="petType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pet type</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {PET_TYPES.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel>{isBook ? "Preferred date" : "Best day to reach you"}</FormLabel>
                      <FormControl><Input type="date" min={today} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="reason"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel>{isBook ? "Reason for visit" : "Your message"}</FormLabel>
                      <FormControl>
                        <Textarea rows={3} placeholder={isBook ? "e.g. Annual vaccination, skin rash…" : "How can the provider help?"} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="sm:col-span-2">
                  <Button type="submit" size="lg" className="w-full">
                    <CalendarCheck /> {isBook ? "Request appointment" : "Send message"}
                  </Button>
                  <p className="mt-2 text-center text-xs text-muted-foreground">
                    Demo only — your details are not stored or sent anywhere.
                  </p>
                </div>
              </form>
            </Form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
