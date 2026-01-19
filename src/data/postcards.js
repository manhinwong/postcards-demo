// Central registry of all postcards
// Import postcard data files here and add them to the registry

import { claudePostcard } from './claude';

// Define all available postcards
export const postcards = {
  claude: claudePostcard,
  // Add more postcards here:
  // ashley: ashleyPostcard,
  // mia: miaPostcard,
  // sarah: sarahPostcard,
  // john: johnPostcard,
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
