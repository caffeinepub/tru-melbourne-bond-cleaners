import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContactForm } from "@/hooks/useQueries";
import { CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";

const SERVICE_OPTIONS = [
  "Bond / Vacate Clean",
  "Carpet Steam Cleaning",
  "Kitchen Deep Clean",
  "Bathroom Clean",
  "Window Cleaning",
  "Full Package",
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const mutation = useSubmitContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Build mailto link with obfuscated email
    const emailParts = ["humptydumpty", "bondcleaning", "@gmail.com"];
    const emailAddress = emailParts.join("");
    const subject = encodeURIComponent(
      `Bond Clean Enquiry - ${name} - ${serviceType}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nService Type: ${serviceType}\nAddress: ${address}\n\nMessage:\n${message}`,
    );
    const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

    // Open customer's email client
    window.location.href = mailtoLink;

    // Also submit to backend
    try {
      await mutation.mutateAsync({
        name,
        phone,
        serviceType,
        address,
        message,
      });
    } catch {
      // Backend submission is secondary — mailto is the primary action
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        data-ocid="contact.success_state"
        className="rounded-2xl bg-accent/10 border border-accent/30 p-8 text-center"
      >
        <CheckCircle className="mx-auto mb-4 h-12 w-12 text-accent" />
        <h3 className="font-display text-xl font-bold text-foreground mb-2">
          Thanks! Your email client should open now with your enquiry
          pre-filled.
        </h3>
        <p className="text-muted-foreground">
          Didn&apos;t open? Try again or{" "}
          <a
            href="https://wa.me/61488841883"
            className="text-accent font-semibold underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            chat with us on WhatsApp
          </a>
          .
        </p>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => {
            setSubmitted(false);
            setName("");
            setPhone("");
            setServiceType("");
            setAddress("");
            setMessage("");
          }}
        >
          Send Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name" className="font-semibold">
            Your Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="contact-name"
            data-ocid="contact.name.input"
            type="text"
            placeholder="Jane Smith"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
            className="h-12"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-phone" className="font-semibold">
            Phone Number <span className="text-destructive">*</span>
          </Label>
          <Input
            id="contact-phone"
            data-ocid="contact.phone.input"
            type="tel"
            placeholder="04XX XXX XXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            autoComplete="tel"
            className="h-12"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-service" className="font-semibold">
          Service Type <span className="text-destructive">*</span>
        </Label>
        <Select value={serviceType} onValueChange={setServiceType} required>
          <SelectTrigger
            id="contact-service"
            data-ocid="contact.service.select"
            className="h-12"
          >
            <SelectValue placeholder="Select a service..." />
          </SelectTrigger>
          <SelectContent>
            {SERVICE_OPTIONS.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-address" className="font-semibold">
          Property Address <span className="text-destructive">*</span>
        </Label>
        <Input
          id="contact-address"
          data-ocid="contact.address.input"
          type="text"
          placeholder="123 Example Street, Suburb VIC 3XXX"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          autoComplete="street-address"
          className="h-12"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message" className="font-semibold">
          Message / Special Requirements
        </Label>
        <Textarea
          id="contact-message"
          data-ocid="contact.message.textarea"
          placeholder="Tell us about your property — number of bedrooms, move-out date, any special requirements..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="resize-none"
        />
      </div>

      <Button
        type="submit"
        data-ocid="contact.submit_button"
        size="lg"
        className="w-full h-14 text-base font-bold bg-primary hover:bg-primary/90 text-primary-foreground"
        disabled={mutation.isPending}
      >
        {mutation.isPending ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
          </>
        ) : (
          "Send My Enquiry →"
        )}
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        We respond within a few hours. For urgent requests,{" "}
        <a
          href="https://wa.me/61488841883"
          className="text-accent font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp us directly
        </a>
        .
      </p>
    </form>
  );
}
