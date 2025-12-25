import { useForm, ValidationError } from "@formspree/react";

const Form = () => {
  const [state, handleSubmit] = useForm("xojagqol");

  if (state.succeeded) {
    return (
      <div className="text-center py-20 animate-fade-in">
        <h3 className="text-3xl font-semibold text-[#001f3f] mb-4">
          Message Sent 🚀
        </h3>
        <p className="text-gray-600">
          Thanks for reaching out. I’ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-2xl p-8 md:p-10 space-y-6"
    >
      <h2 className="text-3xl font-bold text-[#001f3f] text-center mb-6">
        Get in Touch
      </h2>

      {/* Honeypot field (spam protection) */}
      <input type="text" name="_gotcha" className="hidden" />

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3
                     focus:outline-none focus:ring-2 focus:ring-[#001f3f]"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3
                     focus:outline-none focus:ring-2 focus:ring-[#001f3f]"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          name="message"
          rows="5"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3
                     focus:outline-none focus:ring-2 focus:ring-[#001f3f]"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-[#001f3f] text-white font-semibold py-3 rounded-lg
                   hover:bg-[#003366] transition-all duration-300
                   disabled:opacity-60"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default Form;
