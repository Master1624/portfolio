import { ContactForm } from "./components/ContactForm";

export function Contact() {
  return (
    <div className="grid grid-cols-2 justify-items-center items-center h-screen p-6 overflow-hidden">
      <ContactForm />
    </div>
  );
}
