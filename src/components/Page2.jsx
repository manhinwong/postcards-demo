import React from 'react';
import { ScatteredDecorations } from './DecorativeIcons';

const Page2 = ({ data }) => {
  const pageData = data?.page2 || {};
  const { heading = "I'd love to hear from you,", questions = [] } = pageData;

  return (
    <div className="h-full flex flex-col items-center justify-center py-6 px-12 md:p-12 fade-in relative">
      {/* Decorative background elements */}
      <ScatteredDecorations />

      <div className="w-full max-w-2xl mx-auto space-y-6 md:space-y-8 relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sepia-dark text-center font-handwritten">
          {heading}
        </h1>

        <div className="space-y-6 md:space-y-8">
          {questions.map((question, index) => (
            <div key={index} className="flex items-start space-x-3 md:space-x-4">
              <span className="text-2xl md:text-3xl text-warm-orange font-handwritten flex-shrink-0 mt-1">
                ✦
              </span>
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-sepia-dark font-handwritten">
                {question}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-4 md:pt-8 pb-4">
          <div className="w-12 md:w-16 h-0.5 md:h-1 bg-sepia-dark opacity-30 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
