"use client";

import { Loader2, Send } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  message: ""
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};

  if (form.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!emailRegex.test(form.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (form.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    name: false,
    email: false,
    message: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [feedback, setFeedback] = useState<string>("");

  const errors = useMemo(() => validate(form), [form]);
  const hasErrors = Object.keys(errors).length > 0;

  function touchField(field: keyof FormState) {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }

  function updateField(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));

    if (feedback) {
      setFeedback("");
    }

    if (status !== "idle") {
      setStatus("idle");
    }
  }

  const showNameError =
    submitted || (touched.name && form.name.trim().length > 0)
      ? Boolean(errors.name)
      : false;

  const showEmailError =
    submitted || (touched.email && form.email.trim().length > 0)
      ? Boolean(errors.email)
      : false;

  const showMessageError =
    submitted || (touched.message && form.message.trim().length > 0)
      ? Boolean(errors.message)
      : false;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setFeedback("");

    if (hasErrors) {
      setStatus("error");
      setFeedback("Please complete the highlighted fields.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const result = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        setStatus("error");
        setFeedback(result.error ?? "Something went wrong. Try again.");
        return;
      }

      setStatus("success");
      setFeedback(result.message ?? "Message sent successfully.");
      setForm(initialState);
      setTouched({ name: false, email: false, message: false });
      setSubmitted(false);
    } catch {
      setStatus("error");
      setFeedback("Network issue. Please try again in a moment.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-border bg-card p-6">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          minLength={2}
          value={form.name}
          onBlur={() => touchField("name")}
          onChange={(event) => updateField("name", event.target.value)}
          aria-invalid={showNameError}
          className={cn(
            "w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none ring-accent transition focus:ring-2",
            showNameError ? "border-rose-500" : "border-border"
          )}
          placeholder="Your name"
        />
        {showNameError && errors.name ? <p className="text-xs text-rose-500">{errors.name}</p> : null}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onBlur={() => touchField("email")}
          onChange={(event) => updateField("email", event.target.value)}
          aria-invalid={showEmailError}
          className={cn(
            "w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none ring-accent transition focus:ring-2",
            showEmailError ? "border-rose-500" : "border-border"
          )}
          placeholder="you@example.com"
        />
        {showEmailError && errors.email ? (
          <p className="text-xs text-rose-500">{errors.email}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between gap-3">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Message
          </label>
          <span className="text-xs text-muted">{form.message.trim().length}/10 min chars</span>
        </div>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={5}
          value={form.message}
          onBlur={() => touchField("message")}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={showMessageError}
          className={cn(
            "w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none ring-accent transition focus:ring-2",
            showMessageError ? "border-rose-500" : "border-border"
          )}
          placeholder="Tell me what you're building, what's stuck, and what timeline you're targeting..."
        />
        {showMessageError && errors.message ? (
          <p className="text-xs text-rose-500">{errors.message}</p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Send note
          </>
        )}
      </button>

      {feedback ? (
        <p
          className={`text-sm ${
            status === "error" ? "text-rose-500" : "text-emerald-600 dark:text-emerald-400"
          }`}
        >
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
