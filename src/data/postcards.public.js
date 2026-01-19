// Central registry of all postcards - PUBLIC VERSION (Claude only)
// This file is for the public branch - only contains Claude demo postcard

import { claudePostcard } from './claude';

// Define all available postcards (public demo only)
export const postcards = {
  claude: claudePostcard,
};

// Get a postcard by slug/recipient name
export const getPostcard = (slug) => {
  const normalized = slug?.toLowerCase().trim() || 'claude';
  return postcards[normalized] || postcards.claude; // Default to Claude's if not found
};

// Get list of all postcard slugs (for admin or navigation)
export const getPostcardSlugs = () => {
  return Object.keys(postcards);
};
