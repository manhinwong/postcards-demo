import React, { useState } from 'react';

const PasswordPrompt = ({ recipient, onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get password from environment variable or use a default
  // In production, set VITE_POSTCARD_PASSWORD in Vercel environment variables
  const correctPassword = import.meta.env.VITE_POSTCARD_PASSWORD || 'postcard2024';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // Simple password check
    if (password === correctPassword) {
      // Store in sessionStorage so user doesn't need to re-enter during this session
      sessionStorage.setItem(`postcard_${recipient}_auth`, 'true');
      onSuccess();
    } else {
      setError('Incorrect password. Please try again.');
      setIsSubmitting(false);
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-3 md:p-8 vignette bg-gradient-to-br from-sepia-dark to-sepia">
      <div className="bg-parchment rounded-lg shadow-2xl p-8 md:p-12 max-w-md w-full paper-texture">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-handwritten text-sepia-dark">
              This postcard is private
            </h1>
            <p className="text-sepia-dark/70 font-handwritten text-lg">
              Please enter the password to view {recipient}'s postcard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded-lg border-2 border-sepia/30 focus:border-sepia-dark focus:outline-none text-sepia-dark font-handwritten text-lg bg-white/50 transition-colors"
                autoFocus
                disabled={isSubmitting}
              />
              {error && (
                <p className="mt-2 text-red-600 text-sm font-handwritten">{error}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !password}
              className="w-full py-3 bg-sepia-dark text-parchment rounded-lg font-handwritten text-lg hover:bg-sepia transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
            >
              {isSubmitting ? 'Checking...' : 'View Postcard'}
            </button>
          </form>

          <p className="text-xs text-sepia-dark/50 font-handwritten">
            This postcard is password-protected for privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordPrompt;
