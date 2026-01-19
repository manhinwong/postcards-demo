import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import CoverPage from './components/CoverPage';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import ClosingPage from './components/ClosingPage';
import MusicPlayer from './components/MusicPlayer';
import SoundToggle from './components/SoundToggle';
import SoundPlayer from './components/SoundPlayer';
import { getPostcard } from './data/postcards';

function PostcardViewer() {
  const { recipient } = useParams();
  const postcardData = getPostcard(recipient);

  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const playSoundRef = useRef(null);

  // Pages array - now includes Cover and Closing pages
  const pages = [
    <CoverPage key="cover" data={postcardData} />,
    <Page1 key="page1" data={postcardData} />,
    <Page2 key="page2" data={postcardData} />,
    <Page3 key="page3" data={postcardData} />,
    <ClosingPage key="closing" data={postcardData} />
  ];

  const totalPages = pages.length;

  // Loading animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Touch gesture handling for mobile swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextPage();
    } else if (isRightSwipe) {
      prevPage();
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1 && !isTransitioning) {
      // Play sound effect
      if (playSoundRef.current) {
        playSoundRef.current();
      }

      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsTransitioning(false);
      }, 400);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isTransitioning) {
      // Play sound effect
      if (playSoundRef.current) {
        playSoundRef.current();
      }

      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsTransitioning(false);
      }, 400);
    }
  };

  const goToPage = (index) => {
    if (!isTransitioning && index !== currentPage && index >= 0 && index < totalPages) {
      // Play sound effect
      if (playSoundRef.current) {
        playSoundRef.current();
      }

      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(index);
        setIsTransitioning(false);
      }, 400);
    }
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  const handlePlaySound = (playFn) => {
    playSoundRef.current = playFn;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sepia-dark to-sepia">
        <div className="text-center">
          <div className="text-6xl font-handwritten text-parchment animate-pulse">
            Loading...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-3 md:p-8 vignette app-fade-in">
      <MusicPlayer currentPage={currentPage} />
      <SoundToggle enabled={soundEnabled} onToggle={toggleSound} />
      <SoundPlayer enabled={soundEnabled} onPlaySound={handlePlaySound} />

      {/* Main Book Container */}
      <div
        className="relative w-full h-[calc(100vh-24px)] md:h-auto md:max-w-5xl md:aspect-[16/10] perspective-1000"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Decorative tape on book corners - hidden on mobile */}
        <div className="hidden md:block absolute -top-4 -left-4 w-14 h-10 bg-yellow-100/60 transform -rotate-12 rounded shadow-lg pointer-events-none z-30"></div>
        <div className="hidden md:block absolute -top-3 -right-5 w-14 h-10 bg-yellow-100/60 transform rotate-12 rounded shadow-lg pointer-events-none z-30"></div>
        <div className="hidden md:block absolute -bottom-4 -left-5 w-14 h-10 bg-yellow-100/60 transform rotate-12 rounded shadow-lg pointer-events-none z-30"></div>
        <div className="hidden md:block absolute -bottom-3 -right-4 w-14 h-10 bg-yellow-100/60 transform -rotate-12 rounded shadow-lg pointer-events-none z-30"></div>

        {/* Book */}
        <div className="relative w-full h-full bg-parchment md:rounded-lg shadow-2xl paper-texture overflow-hidden">
          {/* Page Content */}
          <div className="relative w-full h-full overflow-y-auto custom-scrollbar">
            {pages[currentPage]}
          </div>

          {/* Navigation Arrows */}
          {currentPage > 0 && (
            <button
              onClick={prevPage}
              disabled={isTransitioning}
              className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 bg-sepia/20 hover:bg-sepia/40 backdrop-blur-sm p-1.5 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-10"
              aria-label="Previous page"
            >
              <svg
                className="w-5 h-5 md:w-8 md:h-8 text-sepia-dark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {currentPage < totalPages - 1 && (
            <button
              onClick={nextPage}
              disabled={isTransitioning}
              className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 bg-sepia/20 hover:bg-sepia/40 backdrop-blur-sm p-1.5 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-10"
              aria-label="Next page"
            >
              <svg
                className="w-5 h-5 md:w-8 md:h-8 text-sepia-dark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {/* Page Indicator */}
          <div className="absolute bottom-2 md:bottom-6 left-1/2 -translate-x-1/2 flex space-x-1.5 md:space-x-2 z-10">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentPage
                    ? 'bg-sepia-dark scale-125'
                    : 'bg-sepia/30 hover:bg-sepia/50'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          {/* Book Binding Shadow */}
          <div className="absolute left-0 top-0 bottom-0 w-4 md:w-8 bg-gradient-to-r from-sepia-dark/10 to-transparent pointer-events-none"></div>
        </div>

        {/* Book Shadow */}
        <div className="absolute inset-0 rounded-lg shadow-2xl pointer-events-none -z-10 blur-xl opacity-50 bg-sepia-dark/50"></div>
      </div>

      {/* Instructions hint - only shows on cover page */}
      {currentPage === 0 && (
        <div className="absolute bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 text-parchment/80 text-xs md:text-lg font-handwritten animate-pulse">
          <span className="hidden md:inline">Click the arrow to turn the page →</span>
          <span className="md:hidden">Swipe to turn pages →</span>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostcardViewer />} />
        <Route path="/:recipient" element={<PostcardViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
