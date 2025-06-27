// src/components/Contact.jsx
import { useState } from 'react'
import emailjs from 'emailjs-com'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    website: '',
    message: '',
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .send(
        'service_gqf7cgj', // Replace with your EmailJS Service ID
        'kolg_102020', // Replace with your EmailJS Template ID
        formData,
        'QMxZeFYO_DLRP9WR3' // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log('Submission sent:', result.text)
          setFormData({ name: '', email: '', phone: '', service: '', website: '', message: '' })
          setSubmissionStatus('success')
          setIsModalOpen(true)
        },
        (error) => {
          console.error('Submission failed:', error.text)
          setSubmissionStatus('error')
          setIsModalOpen(true)
        }
      )
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSubmissionStatus('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  }

  const services = [
    'Website Creation',
    'UI/UX Design',
    'SEO Optimization',
    'E-Commerce Solutions',
    'Hosting & Maintenance',
    'Content Management Systems',
  ]

  return (
    <section id="contact" className="py-20 contact-bg">
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="contact-heading text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
        <p className="contact-subtitle text-xl md:text-2xl text-secondary mb-8 max-w-md mx-auto">
          Reach out to start your web design journey with KOLG.
        </p>
        <form className="contact-form space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="contact-input"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="contact-input"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="contact-input"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{10}"
              title="Phone number (e.g., 123-456-7890 or 1234567890)"
              required
            />
          </div>
          <div>
            <label htmlFor="service" className="sr-only">Service</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="contact-select"
              required
            >
              <option value="" disabled>Select a Service</option>
              {services.map((service, idx) => (
                <option key={idx} value={service}>{service}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="website" className="sr-only">Current Website</label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Your Current Website (optional)"
              className="contact-input"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="contact-textarea"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="contact-button inline-block bg-accent text-dark px-4 py-3 rounded-full text-lg font-medium glow transform hover:scale-110 transition-all duration-300 w-full"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="contact-modal-overlay" onKeyDown={handleKeyDown}>
          <div className="contact-modal contact-modal-content">
            {submissionStatus === 'success' ? (
              <>
                <h3 className="contact-modal-heading">Thank You!</h3>
                <p className="contact-modal-text">
                  Your submission was sent successfully. We'll get back to you soon.
                </p>
                <button
                  onClick={closeModal}
                  className="contact-modal-button"
                  aria-label="Close modal"
                >
                  Close
                </button>
              </>
            ) : (
              <>
                <h3 className="contact-modal-heading">Submission Failed</h3>
                <p className="contact-modal-text">
                  An error occurred. Please try again later.
                </p>
                <button
                  onClick={closeModal}
                  className="contact-modal-button"
                  aria-label="Close modal"
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Contact