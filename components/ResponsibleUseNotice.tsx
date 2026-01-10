export default function ResponsibleUseNotice() {
  return (
    <section className="responsible-use-notice">
      <h3 className="notice-title">Responsible Use Notice</h3>
      <div className="notice-content">
        <p>This page is informational and created to help users understand login, download, registration, and support processes.</p>
        <p>Always follow your local rules and play responsibly.</p>
        <p>Avoid sharing OTP/password with anyone.</p>
      </div>
      <style jsx>{`
        .responsible-use-notice {
          margin: 3rem 0;
          padding: 1.5rem;
          background: #f0f8ff;
          border-left: 4px solid #425fef;
          border-radius: 8px;
        }
        .notice-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1a237e;
          margin-bottom: 1rem;
        }
        .notice-content {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .notice-content p {
          font-size: 1rem;
          line-height: 1.6;
          color: #333;
          margin: 0;
        }
        @media (max-width: 768px) {
          .responsible-use-notice {
            margin: 2rem 0;
            padding: 1.25rem;
          }
          .notice-title {
            font-size: 1.1rem;
          }
          .notice-content p {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  )
}

