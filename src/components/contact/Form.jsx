import { useForm, ValidationError } from "@formspree/react";

const Form = () => {
  const [state, handleSubmit] = useForm("xojagqol");

  if (state.succeeded) {
    return (
      <p className="text-center text-lg font-semibold text-[#001f3f]">
        Thank you! Your message has been sent.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white"
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold text-[#001f3f] text-center mb-6">
        Contact Me
      </h2>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-[#001f3f] mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg
                     text-[#001f3f] focus:outline-none focus:ring-2
                     focus:ring-[#001f3f]"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-[#001f3f] mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg
                     text-[#001f3f] focus:outline-none focus:ring-2
                     focus:ring-[#001f3f]"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-[#001f3f] mb-2">
          Message
        </label>
        <textarea
          name="message"
          rows="5"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg
                     text-[#001f3f] focus:outline-none focus:ring-2
                     focus:ring-[#001f3f]"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-[#001f3f] text-white font-semibold
                   py-3 rounded-lg hover:bg-[#003366]
                   transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
