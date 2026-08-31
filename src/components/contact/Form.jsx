import { useForm, ValidationError } from "@formspree/react";

const fieldClass =
  "w-full rounded-[3px] border border-line-strong bg-raised px-3.5 py-3 text-[15px] text-ink outline-none transition-colors duration-150 ease-snap placeholder:text-ink-muted focus:border-accent";
const labelClass =
  "mb-2 block font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-muted";

const Form = () => {
  const [state, handleSubmit] = useForm("xojagqol");

  if (state.succeeded) {
    return (
      <p className="font-mono text-sm text-ink">
        Thanks — your message has been sent. I&rsquo;ll be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl">
      <div className="mb-5">
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          placeholder="Your name"
          className={fieldClass}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="you@company.com"
          className={fieldClass}
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="mt-1 font-mono text-xs text-accent"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          placeholder="A few lines about what you need"
          className={fieldClass}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-1 font-mono text-xs text-accent"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-[3px] border border-transparent bg-ink px-6 font-mono text-[12.5px] font-medium uppercase tracking-[0.04em] text-surface transition-[transform,background-color,color] duration-150 ease-snap hover:-translate-y-px hover:bg-accent hover:text-white disabled:pointer-events-none disabled:opacity-60"
      >
        {state.submitting ? "Sending…" : "Send message →"}
      </button>
    </form>
  );
};

export default Form;
