import React from 'react';

const ClosingPage = ({ data }) => {
  const closingData = data?.closing || {};
  const emailAddress = data?.email || "noreply@postcards.com";
  const phoneNumber = data?.phone || "4153195361";
  const heading = closingData.heading || "lets keep in touch ❤";
  const buttonText = closingData.buttonText || "Send me your reply";

  const subject = "Re: Postcard";
  const body = "Hey! I just read your postcard and wanted to reach out...\n\n";

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const smsLink = `sms:${phoneNumber}?body=${encodeURIComponent("Hey! I just read your postcard!")}`;

  return (
    <div className="h-full flex flex-col items-center justify-center p-6 md:p-12 fade-in">
      <div className="max-w-2xl w-full text-center space-y-8 md:space-y-12">
        {/* Main message */}
        <h1 className="text-4xl md:text-6xl font-bold text-sepia-dark font-handwritten leading-relaxed">
          {heading}
        </h1>

        {/* Decorative stars */}
        <div className="flex justify-center space-x-4 md:space-x-6 my-4 md:my-8">
          {[...Array(3)].map((_, i) => (
            <svg
              key={i}
              className="w-6 md:w-8 h-6 md:h-8 text-warm-orange opacity-60"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>

        {/* Contact buttons - Email and Text */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center">
          {/* Email button */}
          <a
            href={mailtoLink}
            className="inline-block group flex-1 md:flex-none"
          >
            <div className="bg-parchment border-2 border-sepia/30 rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-sepia/50">
              {/* Envelope icon */}
              <div className="flex justify-center mb-3 md:mb-4">
                <svg
                  className="w-12 md:w-16 h-12 md:h-16 text-sepia-dark group-hover:text-sepia transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              {/* Button text */}
              <p className="text-lg md:text-2xl text-sepia-dark font-handwritten group-hover:text-sepia transition-colors">
                email me
              </p>
            </div>
          </a>

          {/* Text button */}
          <a
            href={smsLink}
            className="inline-block group flex-1 md:flex-none"
          >
            <div className="bg-parchment border-2 border-sepia/30 rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-sepia/50">
              {/* Speech bubble icon */}
              <div className="flex justify-center mb-3 md:mb-4">
                <svg
                  className="w-12 md:w-16 h-12 md:h-16 text-sepia-dark group-hover:text-sepia transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>

              {/* Button text */}
              <p className="text-lg md:text-2xl text-sepia-dark font-handwritten group-hover:text-sepia transition-colors">
                text me
              </p>
            </div>
          </a>
        </div>

        {/* Bottom decoration */}
        <div className="pt-4 md:pt-8">
          <div className="flex justify-center items-center space-x-4">
            <div className="w-12 h-0.5 bg-sepia-dark opacity-20"></div>
            <svg className="w-5 h-5 text-warm-orange opacity-40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <div className="w-12 h-0.5 bg-sepia-dark opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClosingPage;
