import { useState } from 'react'

interface FAQ {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs: FAQ[]
  title?: string
}

export default function FAQAccordion({ faqs, title = "Frequently Asked Questions" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="faq-section">
        <h2 className="faq-title">{title}</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${openIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <div className="faq-answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <style jsx>{`
        .faq-section {
          margin: 3rem 0;
          padding: 2rem;
          background: #f9f9f9;
          border-radius: 12px;
        }
        .faq-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1a237e;
          margin-bottom: 2rem;
          text-align: center;
        }
        .faq-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .faq-item {
          background: #ffffff;
          border-radius: 8px;
          border: 1px solid #e5e5e5;
          overflow: hidden;
          transition: box-shadow 0.3s;
        }
        .faq-item:hover {
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .faq-question {
          width: 100%;
          padding: 1.25rem 1.5rem;
          background: #ffffff;
          border: none;
          text-align: left;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a237e;
          transition: background-color 0.3s;
        }
        .faq-question:hover {
          background: #f5f5f5;
        }
        .faq-question.active {
          background: #f0f8ff;
        }
        .faq-question span:first-child {
          flex: 1;
        }
        .faq-icon {
          font-size: 1.5rem;
          font-weight: 700;
          color: #425fef;
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f0f8ff;
          border-radius: 50%;
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        .faq-answer.open {
          max-height: 1000px;
        }
        .faq-answer-content {
          padding: 0 1.5rem 1.25rem 1.5rem;
        }
        .faq-answer-content p {
          font-size: 1rem;
          line-height: 1.8;
          color: #333;
          margin: 0;
        }
        @media (max-width: 768px) {
          .faq-section {
            padding: 1.5rem;
            margin: 2rem 0;
          }
          .faq-title {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
          }
          .faq-question {
            padding: 1rem;
            font-size: 1rem;
          }
          .faq-answer-content {
            padding: 0 1rem 1rem 1rem;
          }
          .faq-answer-content p {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </>
  )
}

