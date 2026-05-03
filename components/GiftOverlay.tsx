"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GiftOverlayProps {
  show: boolean;
  gift: string;
  emoji: string;
  sender: string;
  vc: number;
  combo?: boolean;
  queen?: boolean;
  onComplete?: () => void;
}

export default function GiftOverlay({ show, gift, emoji, sender, vc, combo = false, queen = false, onComplete }: GiftOverlayProps) {
  if (!show) return null;

  const duration = queen ? 5000 : combo ? 4000 : 3000;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[1000] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onAnimationComplete={onComplete}
        >
          {queen && (
            // Kult Queen full screen takeover
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-pink-900/90 to-black flex flex-col items-center justify-center"
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                backgroundColor: [
                  '#3B1E66',
                  '#6B21A8',
                  '#EC4899',
                  '#F59E0B',
                  '#3B1E66'
                ]
              }}
              transition={{ duration: 3, repeat: 1, repeatType: "reverse" }}
            >
              <motion.div
                className="text-9xl mb-8 drop-shadow-2xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2.5 }}
              >
                {emoji}
              </motion.div>
              <motion.div 
                className="text-4xl md:text-6xl font-black text-white text-center drop-shadow-2xl tracking-wider"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                KULT QUEEN by {sender}
              </motion.div>
            </motion.div>
          )}

          {!queen && (
            // Standard gift animation
            <motion.div
              className="flex flex-col items-center gap-4 p-8 max-w-md mx-auto bg-black/50 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl"
              initial={{ y: '100vh', opacity: 0, scale: 0.8 }}
              animate={{ 
                y: '20vh', 
                opacity: 1, 
                scale: 1 
              }}
              transition={{ type: "spring", bounce: 0.4 }}
            >
              <motion.div
                className="text-6xl md:text-8xl drop-shadow-2xl"
                animate={{ y: [-20, 0], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: 2, repeatType: "reverse" }}
              >
                {emoji}
              </motion.div>
              <motion.div 
                className="text-2xl md:text-3xl font-black bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-xl text-center"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.3 }}
              >
                {gift}
              </motion.div>
              <motion.div 
                className="text-lg font-bold text-[#F59E0B] drop-shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {vc.toLocaleString()} VC
              </motion.div>
              <div className="text-xl font-semibold text-white/90 drop-shadow-lg">
                {sender} sent a gift!
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
