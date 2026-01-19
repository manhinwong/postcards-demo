import React from 'react';

const SoundToggle = ({ enabled, onToggle }) => {
  return (
    <div className="fixed top-4 md:top-6 right-16 md:right-24 z-50">
      <button
        onClick={onToggle}
        className="bg-parchment/80 hover:bg-parchment backdrop-blur-sm p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border-2 border-sepia/20"
        aria-label={enabled ? "Disable sound effects" : "Enable sound effects"}
      >
        {enabled ? (
          <svg
            className="w-5 md:w-6 h-5 md:h-6 text-sepia-dark"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
        ) : (
          <svg
            className="w-5 md:w-6 h-5 md:h-6 text-sepia-dark"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" opacity="0.3" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2v-2zm0-10h2v6h-2V6z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default SoundToggle;
