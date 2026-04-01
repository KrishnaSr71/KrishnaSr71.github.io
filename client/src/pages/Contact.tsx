import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_n43ebll";
const TEMPLATE_ID = "template_s4696cf";
const PUBLIC_KEY = "VYMU7UAbrjl28Q1uz";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "krishnasripathi06@gmail.com",
        }
      );
      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 md:py-32 bg-white animate-stagger-1">
        <div className="container max-w-3xl">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-foreground leading-relaxed">
              Got a question about my projects, or just want to talk about <em>movies</em>? Feel free to reach out. I'm always open to <em>interesting conversations</em> and new opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-stagger-2">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#b691fe] hover:bg-[#a77bff] text-white font-medium py-3"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
              </div>

              {/* Email */}
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a
                  href="mailto:ksripathi3@gatech.edu"
                  className="text-base text-foreground font-medium hover:text-primary transition-colors"
                >
                  ksripathi3@gatech.edu
                </a>
              </div>

              {/* Phone */}
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <a
                  href="tel:+14708863188"
                  className="text-base text-foreground font-medium hover:text-primary transition-colors"
                >
                  470-886-3188
                </a>
              </div>

              {/* LinkedIn */}
              <div>
                <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/krishna-sripathi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-foreground font-medium hover:text-primary transition-colors"
                >
                  linkedin.com/in/krishna-sripathi/
                </a>
              </div>

              {/* Availability */}
              <div className="bg-secondary/30 p-6 rounded-lg border border-border mt-8">
                <p className="text-sm text-[#3772FF] font-semibold mb-2">Availability</p>
                <p className="text-base text-foreground font-medium">
                  Open to <em>internships</em>, <em>research opportunities</em>, and interesting conversations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
