import React, { useState, useEffect, useRef } from 'react';

const MusicPlayer = ({ currentPage }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const hasUnmutedRef = useRef(false);

  // Auto-unmute when navigating away from cover page
  useEffect(() => {
    if (currentPage > 0 && audioRef.current && !hasUnmutedRef.current) {
      hasUnmutedRef.current = true;
      console.log('Auto-unmuting audio');

      // If audio is paused, play it first (muted), then unmute
      if (audioRef.current.paused) {
        audioRef.current.play()
          .then(() => {
            audioRef.current.muted = false;
            setIsMuted(false);
            setIsPlaying(true);
            console.log('Audio started playing and unmuted');
          })
          .catch((error) => {
            console.log('Play failed:', error);
          });
      } else {
        // Audio is already playing (muted), just unmute it
        audioRef.current.muted = false;
        setIsMuted(false);
        console.log('Audio unmuted (was already playing)');
      }

      console.log('Audio muted state:', audioRef.current.muted);
      console.log('Audio paused state:', audioRef.current.paused);
    }
  }, [currentPage]);

  useEffect(() => {
    // Autoplay muted first (browser allows this) - only run once on mount
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          console.log('Attempting to start muted audio playback');
          audioRef.current.muted = true;
          await audioRef.current.play();
          setIsPlaying(true);
          console.log('Muted audio playback started successfully');
        }
      } catch (error) {
        // Browser blocked autoplay - user will need to click the button
        console.log('Autoplay was prevented. User interaction required.', error);
        setIsPlaying(false);
      }
    };

    playAudio();
  }, []); // Empty dependency array - only run once on mount

  const toggleMute = () => {
    if (audioRef.current) {
      // Check if audio is actually paused (not our state, the actual audio element)
      if (audioRef.current.paused) {
        // If paused, start playing then unmute
        audioRef.current.play()
          .then(() => {
            audioRef.current.muted = false;
            setIsPlaying(true);
            setIsMuted(false);
            hasUnmutedRef.current = true; // Mark as manually unmuted
            console.log('Manual unmute successful - started playing');
          })
          .catch((error) => {
            console.log('Playback failed:', error);
          });
      } else {
        // Audio is playing, just toggle mute state
        const newMutedState = !audioRef.current.muted;
        audioRef.current.muted = newMutedState;
        setIsMuted(newMutedState);

        // If unmuting, mark that we've manually unmuted
        if (!newMutedState) {
          hasUnmutedRef.current = true;
        }
        console.log('Toggled mute to:', newMutedState);
      }
    }
  };

  return (
    <div className="fixed top-4 md:top-6 right-4 md:right-6 z-50">
      <button
        onClick={toggleMute}
        className="bg-parchment/80 hover:bg-parchment backdrop-blur-sm p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border-2 border-sepia/20"
        aria-label={isMuted || !isPlaying ? "Unmute music" : "Mute music"}
      >
        {isMuted || !isPlaying ? (
          <svg
            className="w-5 md:w-6 h-5 md:h-6 text-sepia-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
            />
          </svg>
        ) : (
          <svg
            className="w-5 md:w-6 h-5 md:h-6 text-sepia-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
          </svg>
        )}
      </button>

      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        {/* Replace this with your actual audio file */}
        <source src="/music.mp3" type="audio/mpeg" />
        <source src="/music.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MusicPlayer;
