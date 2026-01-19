import React from 'react';
import { ScatteredDecorations } from './DecorativeIcons';

const Page1 = ({ data }) => {
  const pageData = data?.page1 || {};
  const { greeting = "Hi there,", messages = [] } = pageData;

  return (
    <div className="h-full flex flex-col items-center justify-center py-6 px-12 md:p-12 fade-in relative">
      {/* Decorative background elements */}
      <ScatteredDecorations />

      <div className="w-full max-w-2xl mx-auto space-y-6 md:space-y-8 relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sepia-dark text-center font-handwritten">
          Thank You!
        </h1>

        <div className="text-xl md:text-xl lg:text-2xl leading-relaxed text-sepia-dark font-handwritten space-y-4 md:space-y-6">
          <p>
            {greeting}
          </p>
          {messages.map((message, index) => (
            <p key={index}>
              {message}
            </p>
          ))}
        </div>

        <div className="flex justify-center pt-4 md:pt-8 pb-4">
          <div className="w-12 md:w-16 h-0.5 md:h-1 bg-sepia-dark opacity-30 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
