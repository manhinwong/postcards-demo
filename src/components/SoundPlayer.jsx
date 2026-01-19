import React, { useRef, useEffect, useCallback } from 'react';

const SoundPlayer = ({ enabled, onPlaySound }) => {
  const audioRef = useRef(null);

  const playSound = useCallback(() => {
    if (enabled && audioRef.current) {
      // Reset to beginning and play
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(err => {
        console.log('Sound playback prevented:', err);
      });
    }
  }, [enabled]);

  // Expose the playSound function to parent
  useEffect(() => {
    if (onPlaySound) {
      onPlaySound(playSound);
    }
  }, [playSound, onPlaySound]);

  return (
    <audio
      ref={audioRef}
      preload="auto"
    >
      {/* Add your page turn sound file here */}
      <source src="/page-turn.mp3" type="audio/mpeg" />
      <source src="/page-turn.ogg" type="audio/ogg" />
    </audio>
  );
};

export default SoundPlayer;
