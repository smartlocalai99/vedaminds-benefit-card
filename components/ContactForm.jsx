import { useState } from "react";
import { Loader2, CircleCheck, CircleAlert } from "lucide-react";
import Container from "./Container";

const ENQUIRY_TYPES = ["Membership Enquiry", "Vendor Partnership", "General Enquiry"];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_PATTERN = /^[0-9+\s-]{7,15}$/;

const INITIAL_FORM = {
  fullName: "",
  mobile: "",
  email: "",
  enquiryType: ENQUIRY_TYPES[0],
  message: "",
};

function validate(values) {
  const errors = {};
  if (!values.fullName.trim()) errors.fullName = "Enter your full name.";
  if (!values.mobile.trim()) {
    errors.mobile = "Enter your mobile number.";
  } else if (!MOBILE_PATTERN.test(values.mobile.trim())) {
    errors.mobile = "Enter a valid mobile number.";
  }
  if (!values.email.trim()) {
    errors.email = "Enter your email address.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Enter a short message.";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      setValues(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-[#F8F7FF] py-16 md:py-24 scroll-mt-20">
      <Container maxWidth="700px">
        <div className="text-center max-w-[560px] mx-auto">
          <p className="uppercase tracking-[3px] text-[13px] font-semibold text-[#5B3FD6]">
            Get In Touch
          </p>
          <h2 className="font-display text-[30px] md:text-[42px] font-semibold text-[#172033] mt-3 leading-tight">
            Have a Question? Reach Out
          </h2>
          <p className="text-[#5B6479] text-[16px] leading-8 mt-4">
            Whether you want to become a member or a partner vendor, send us
            an enquiry and the Veda Minds team will get back to you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-10 bg-white rounded-[28px] border border-[#EAE5F9] shadow-sm p-6 md:p-10 grid sm:grid-cols-2 gap-6"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="fullName" className="text-[14px] font-medium text-[#172033]">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              value={values.fullName}
              onChange={handleChange("fullName")}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              className="rounded-xl border border-[#E3DEF5] px-4 py-3 text-[15px] text-[#172033] focus:border-[#5B3FD6] outline-none transition-colors"
            />
            {errors.fullName && (
              <p id="fullName-error" className="text-[13px] text-red-600">
                {errors.fullName}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="mobile" className="text-[14px] font-medium text-[#172033]">
              Mobile Number
            </label>
            <input
              id="mobile"
              type="tel"
              autoComplete="tel"
              value={values.mobile}
              onChange={handleChange("mobile")}
              aria-invalid={Boolean(errors.mobile)}
              aria-describedby={errors.mobile ? "mobile-error" : undefined}
              className="rounded-xl border border-[#E3DEF5] px-4 py-3 text-[15px] text-[#172033] focus:border-[#5B3FD6] outline-none transition-colors"
            />
            {errors.mobile && (
              <p id="mobile-error" className="text-[13px] text-red-600">
                {errors.mobile}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="email" className="text-[14px] font-medium text-[#172033]">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={handleChange("email")}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="rounded-xl border border-[#E3DEF5] px-4 py-3 text-[15px] text-[#172033] focus:border-[#5B3FD6] outline-none transition-colors"
            />
            {errors.email && (
              <p id="email-error" className="text-[13px] text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="enquiryType" className="text-[14px] font-medium text-[#172033]">
              Enquiry Type
            </label>
            <select
              id="enquiryType"
              value={values.enquiryType}
              onChange={handleChange("enquiryType")}
              className="rounded-xl border border-[#E3DEF5] px-4 py-3 text-[15px] text-[#172033] focus:border-[#5B3FD6] outline-none transition-colors bg-white"
            >
              {ENQUIRY_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="message" className="text-[14px] font-medium text-[#172033]">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={values.message}
              onChange={handleChange("message")}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="rounded-xl border border-[#E3DEF5] px-4 py-3 text-[15px] text-[#172033] focus:border-[#5B3FD6] outline-none transition-colors resize-none"
            />
            {errors.message && (
              <p id="message-error" className="text-[13px] text-red-600">
                {errors.message}
              </p>
            )}
          </div>

          <div className="sm:col-span-2 flex flex-col items-center gap-4 mt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center gap-2 bg-[#5B3FD6] text-white px-9 py-3.5 rounded-full font-semibold shadow-md hover:bg-[#4c33b8] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0 min-w-[180px]"
            >
              {status === "submitting" && (
                <Loader2 size={18} className="animate-spin" aria-hidden="true" />
              )}
              {status === "submitting" ? "Sending..." : "Submit Enquiry"}
            </button>

            <div role="status" aria-live="polite" className="text-center">
              {status === "success" && (
                <p className="flex items-center gap-2 text-[#2EAF73] text-[14.5px] font-medium">
                  <CircleCheck size={18} aria-hidden="true" />
                  Thank you. Your enquiry has been received — we will get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-red-600 text-[14.5px] font-medium">
                  <CircleAlert size={18} aria-hidden="true" />
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </div>
        </form>
      </Container>
    </section>
  );
}
