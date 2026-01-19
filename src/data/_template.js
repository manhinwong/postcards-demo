// TEMPLATE for creating new postcards
// Copy this file and rename it to [recipient-name].js
// Then customize all the fields below

export const RECIPIENT_NAME_Postcard = {
  recipient: "RECIPIENT_NAME", // Their name (capitalized)
  coverMessage: "For RECIPIENT_NAME", // Cover page message
  email: "marcusmhwong@gmail.com", // Your email for replies
  phone: "4153195361", // Your phone number for SMS

  page1: {
    greeting: "Hi RECIPIENT_NAME,",
    messages: [
      // First paragraph - why you're sending this postcard
      "Customize this first paragraph to explain why you're sending them this postcard...",

      // Second paragraph - specific things you're thankful for
      "I'm thankful for [specific memory], thankful for [another memory], and thankful for [more specific moments you shared].",
    ]
  },

  page2: {
    heading: "I'd love to hear from you,",
    questions: [
      // Customize 4-5 questions you'd like to ask them
      "how are you doing?",
      "what's something new in your life since we last spoke?",
      "what's one spot we should go to if we met again?",
      "what are you excited about right now?",
      "what's something you're thankful for this thanksgiving?"
    ]
  },

  page3: {
    title: "Remember when...",
    memories: [
      // Add 5-7 photos/videos
      // Make sure to place actual files in /public/photos/RECIPIENT_NAME/ folder
      {
        url: "/photos/RECIPIENT_NAME/RECIPIENT_NAME-video.MOV", // or .mp4, .mov, etc.
        caption: "describe this video!",
        type: "video"
      },
      {
        url: "/photos/RECIPIENT_NAME/RECIPIENT_NAME-memory-1.JPG",
        caption: "describe this photo!",
        type: "image"
      },
      {
        url: "/photos/RECIPIENT_NAME/RECIPIENT_NAME-memory-2.JPG",
        caption: "another memory caption",
        type: "image"
      },
      {
        url: "/photos/RECIPIENT_NAME/RECIPIENT_NAME-memory-3.JPG",
        caption: "fun times!",
        type: "image"
      },
      {
        url: "/photos/RECIPIENT_NAME/RECIPIENT_NAME-memory-4.JPG",
        caption: "remember this?",
        type: "image"
      },
      {
        url: "/photos/RECIPIENT_NAME/RECIPIENT_NAME-memory-5.JPG",
        caption: "good memories 😊",
        type: "image"
      }
    ]
  },

  closing: {
    heading: "lets keep in touch ❤",
    buttonText: "Send me your reply"
  }
};
