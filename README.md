# Digital Postcards

A beautiful, interactive storybook-style web app inspired by Rosalina's storybook from Super Mario Galaxy. Share warm, personal messages with smooth page-turning animations, gentle background music, and charming visual effects.

## ✨ Features

- 🎨 **Warm Storybook Aesthetic**: Sepia tones, cream parchment, and handwritten fonts
- 📖 **5 Beautiful Pages**: Cover, 3 content pages, and a closing page with contact option
- 🎵 **Background Music**: Auto-playing ambient music with mute/unmute toggle
- 🔊 **Page Turn Sounds**: Optional gentle sound effects when flipping pages
- 📱 **Mobile Optimized**: Touch-friendly with swipe gestures for page navigation
- ✨ **Decorative Elements**: Hand-drawn style SVG icons (coffee, hearts, stars)
- 🖼️ **Polaroid Photo Frame**: Easy-to-customize photo display on memory page
- 💌 **mailto Integration**: Direct email link on closing page
- 🌟 **Loading Animation**: Gentle fade-in effect when app loads
- 📐 **Responsive Design**: Optimized for desktop, tablet, and mobile

## 🚀 Getting Started

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Add your background music** (optional):
   - Place your music file in the `public` folder
   - Name it `music.mp3` (or `music.ogg`)
   - Recommended: Gentle, instrumental track that loops well
   - Suggested length: 30 seconds to 2 minutes (loops automatically)
   - See `MUSIC_PLACEHOLDER.txt` for free music sources

3. **Add page turn sound** (optional):
   - Place sound file in the `public` folder
   - Name it `page-turn.mp3` (or `page-turn.ogg`)
   - Recommended: Short (0.5-1 second) paper rustling sound
   - See `SOUND_PLACEHOLDER.txt` for free sound sources

4. **Start the development server:**
```bash
npm run dev
```

5. **Open your browser** to the URL shown (usually `http://localhost:5173`)

### Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder that you can deploy to any static hosting service.

## 📝 Customizing Content

### Cover Page

Edit [src/components/CoverPage.jsx](src/components/CoverPage.jsx):

```jsx
<h1>For Ashley</h1>  {/* Change recipient name */}
<p>thinking of you</p>  {/* Change subtitle */}
```

### Page 1 - "What I've Been Up To"

Edit [src/components/Page1.jsx](src/components/Page1.jsx):

```jsx
// Update date stamp
<div>November 2025</div>  {/* Line 11-13 */}

// Update content paragraphs
<p>Your update here...</p>  {/* Lines 21-29 */}
```

### Page 2 - "Questions for You"

Edit [src/components/Page2.jsx](src/components/Page2.jsx):

```jsx
// Change recipient name
<h1>Questions for You, Ashley</h1>  {/* Line 18 */}

// Update questions array
const questions = [
  "your question 1?",
  "your question 2?",
  "your question 3?",
  "your question 4?"
];  {/* Lines 5-9 */}
```

### Page 3 - "A Memory" with Polaroid Photo

Edit [src/components/Page3.jsx](src/components/Page3.jsx):

```jsx
// Add your photo URL or local path
const photoUrl = "/photos/memory.jpg";  {/* Line 11 */}
// or use a URL: "https://example.com/photo.jpg"
// Leave empty "" to show placeholder

// Add photo caption
const photoCaption = "Summer 2024 - Best day ever!";  {/* Line 14 */}
```

**To add a local photo:**
1. Create a `photos` folder in the `public` directory
2. Add your image (e.g., `memory.jpg`)
3. Reference it as `/photos/memory.jpg`

### Closing Page

Edit [src/components/ClosingPage.jsx](src/components/ClosingPage.jsx):

```jsx
// Update email address
const emailAddress = "your.email@example.com";  {/* Line 5 */}

// Optional: Customize email subject and body
const subject = "My Reply to Your Postcard";  {/* Line 6 */}
const body = "Hey! I just read your postcard...";  {/* Line 7 */}
```

## 🎨 Styling Customization

### Color Palette

Edit [tailwind.config.js](tailwind.config.js):

```js
colors: {
  'parchment': '#F5F1E8',    // Background paper color
  'sepia-light': '#E8DCC4',   // Light accent
  'sepia': '#C9A961',         // Medium accent
  'sepia-dark': '#8B7355',    // Dark text color
  'warm-orange': '#D4A574',   // Highlight color
}
```

### Fonts

The app uses Google Fonts (already included):
- **Caveat** - Main handwritten font
- **Indie Flower** - Alternative storybook font

To change fonts:
1. Update the Google Fonts link in [index.html](index.html)
2. Update font families in [tailwind.config.js](tailwind.config.js)

### Background Gradient

Edit [src/index.css](src/index.css):

```css
body {
  background: linear-gradient(135deg, #8B7355 0%, #C9A961 100%);
}
```

## 🎵 Audio Setup

### Background Music

**Recommended characteristics:**
- Gentle piano, acoustic guitar, or ambient sounds
- Instrumental (no lyrics)
- Seamless loop (no awkward gaps)
- Medium-low volume

**Free music sources:**
- [FreePD](https://freepd.com/) - Public domain music
- [Incompetech](https://incompetech.com/) - Kevin MacLeod's royalty-free library
- [YouTube Audio Library](https://studio.youtube.com/) - Free for creators

### Page Turn Sound Effects

**Recommended characteristics:**
- Duration: 0.5-1 second
- Gentle paper rustle or soft page flip
- Not too loud or jarring

**Free sound sources:**
- [Freesound.org](https://freesound.org/) - Search "page turn"
- [Zapsplat](https://www.zapsplat.com/) - Free sound effects
- [SoundBible](http://soundbible.com/) - Public domain sounds

## 📱 Mobile Features

### Swipe Gestures
- Swipe **left** to go to next page
- Swipe **right** to go to previous page
- Minimum swipe distance: 50px

### Touch-Optimized
- Larger touch targets on mobile
- Responsive text sizing
- Mobile-specific hints and instructions

## 🎯 Page Structure

1. **Cover Page** - "For [Name]" with subtitle
2. **Page 1** - What I've Been Up To (with date stamp & decorations)
3. **Page 2** - Questions for You (with decorative elements)
4. **Page 3** - A Memory (with Polaroid photo frame)
5. **Closing Page** - Contact/Reply option (mailto link)

## 🎮 Interactive Controls

### Top Right Corner
- **Music Toggle** (speaker icon) - Mute/unmute background music
- **Sound Toggle** (bell icon) - Enable/disable page turn sounds

### Navigation
- **Arrow Buttons** - Previous/Next page
- **Page Indicators** (bottom center) - Click to jump to any page
- **Swipe Gestures** (mobile) - Swipe left/right to navigate

## 🌐 Browser Compatibility

- ✅ Chrome/Edge - Full support
- ✅ Firefox - Full support
- ✅ Safari - Full support (auto-play may require user interaction)
- ✅ Mobile browsers - Full support with touch gestures

**Note:** Some browsers block auto-play. Users can click the music button to start playback manually.

## 📦 Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy!

### Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. "Import Project"
4. Select your repository
5. Deploy!

### GitHub Pages

```bash
npm run build
# Upload the dist folder to your gh-pages branch
```

## 💡 Tips for Best Experience

1. **Test Your Music**: Make sure it loops smoothly without gaps
2. **Keep Text Concise**: Storybook format works best with heartfelt, brief messages
3. **Use Quality Photos**: For the Polaroid frame, use square or near-square images
4. **Test on Mobile**: Check how it looks and feels on different devices
5. **Preview Before Sharing**: Test all pages, sounds, and interactions
6. **Compress Assets**: Optimize images and audio files for faster loading

## 📂 Project Structure

```
postcards/
├── public/
│   ├── music.mp3              # Background music (add yours)
│   ├── page-turn.mp3          # Page turn sound (add yours)
│   ├── photos/                # Your photos go here
│   ├── MUSIC_PLACEHOLDER.txt
│   └── SOUND_PLACEHOLDER.txt
├── src/
│   ├── components/
│   │   ├── CoverPage.jsx      # Cover page
│   │   ├── Page1.jsx          # What I've Been Up To
│   │   ├── Page2.jsx          # Questions for You
│   │   ├── Page3.jsx          # A Memory (with photo)
│   │   ├── ClosingPage.jsx    # Contact page
│   │   ├── MusicPlayer.jsx    # Background music
│   │   ├── SoundPlayer.jsx    # Page turn sounds
│   │   ├── SoundToggle.jsx    # Sound effect toggle
│   │   └── DecorativeIcons.jsx # SVG decorations
│   ├── App.jsx                # Main app with navigation
│   ├── index.css              # Styles and animations
│   └── main.jsx               # Entry point
├── index.html
├── package.json
├── tailwind.config.js
└── README.md
```

## 🔧 Troubleshooting

**Music won't auto-play:**
- This is normal browser behavior. User can click the music toggle.
- Check that the file path is correct: `/music.mp3`

**Page turn sound not working:**
- Make sure the file exists: `/page-turn.mp3`
- Check that sound toggle is enabled (not grayed out)
- Some browsers require user interaction before playing sounds

**Images not showing:**
- Verify the path is correct (e.g., `/photos/memory.jpg`)
- Check that the image file is in the `public` folder
- File names are case-sensitive on some systems

**Swipe gestures not working:**
- Make sure you're on a touch device or using browser dev tools touch emulation
- Swipe distance must be at least 50px

## 📄 License

Free to use for personal projects. Share with friends and loved ones! 💕

## 🙏 Credits

Inspired by Rosalina's storybook from Super Mario Galaxy 🌟

Made with React, Tailwind CSS, and lots of ❤️

