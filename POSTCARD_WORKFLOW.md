# Postcard Creation & Deployment Workflow

A step-by-step guide for creating personalized postcards and deploying them to Vercel.

## Quick Start: Create a New Postcard

```bash
node scripts/create-postcard.js <recipient-name>
```

Example:
```bash
node scripts/create-postcard.js sarah
```

This will automatically:
- Create `src/data/sarah.js` from the template
- Update `src/data/postcards.js` registry
- Give you next steps to complete

---

## Detailed Workflow

### Step 1: Generate Postcard Files

Run the creation script:
```bash
node scripts/create-postcard.js john
```

### Step 2: Prepare Photos & Videos

1. **Gather media files** - Find 5-7 photos/videos you want to include
2. **Create recipient folder**:
   ```bash
   mkdir -p public/photos/john
   ```
3. **Rename them** consistently:
   ```
   john-memory-1.JPG
   john-memory-2.JPG
   john-memory-3.JPG
   john-video.MOV (optional)
   ```
4. **Add to project**: Place all files in `public/photos/john/` folder

### Step 3: Customize Postcard Content

Edit `src/data/john.js`:

```javascript
export const johnPostcard = {
  recipient: "John",
  coverMessage: "For John",
  email: "marcusmhwong@gmail.com",

  page1: {
    greeting: "Hi John,",
    messages: [
      // ✏️ Write your personal message here
      "Your first paragraph explaining why you're sending this...",

      // ✏️ Share specific things you're thankful for
      "I'm thankful for [memory], thankful for [another memory]...",
    ]
  },

  page2: {
    heading: "I'd love to hear from you,",
    questions: [
      // ✏️ Customize 4-5 questions
      "how are you doing?",
      "what's new in your life?",
      "what's one spot we should visit together?",
      "what are you excited about?",
    ]
  },

  page3: {
    title: "Remember when...",
    memories: [
      // ✏️ Update URLs to match your actual photo filenames
      {
        url: "/photos/john/john-video.MOV",
        caption: "describe this video!",
        type: "video"
      },
      {
        url: "/photos/john/john-memory-1.JPG",
        caption: "update this caption!",
        type: "image"
      },
      // ... add more photos
    ]
  },

  closing: {
    heading: "lets keep in touch ❤",
    buttonText: "Send me your reply"
  }
};
```

### Step 4: Test Locally

Start development server:
```bash
npm run dev
```

Visit in browser:
```
http://localhost:5173/john
```

Check that:
- ✅ All photos/videos load correctly
- ✅ Messages read well
- ✅ Captions are accurate
- ✅ Page navigation works smoothly
- ✅ Mobile responsive design looks good

### Step 5: Deploy to Vercel

Once you're happy with the postcard:

```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Add postcard for John"

# Push to GitHub
git push
```

**Vercel automatically deploys** when you push to your main branch!

### Step 6: Share the Link

After deployment completes (usually 1-2 minutes), share:
```
https://marcus-postcards.vercel.app/john
```

---

## File Structure

```
postcards/
├── public/
│   └── photos/
│       ├── ashley/
│       │   ├── ashley-memory-1.JPG
│       │   ├── ashley-memory-2.JPG
│       │   └── ashley-video.MOV
│       └── john/
│           ├── john-memory-1.JPG
│           ├── john-memory-2.JPG
│           └── john-video.MOV
├── src/
│   ├── data/
│   │   ├── _template.js        ← Template for new postcards
│   │   ├── postcards.js        ← Registry (auto-updated)
│   │   ├── ashley.js
│   │   └── john.js
│   └── components/
├── scripts/
│   └── create-postcard.js      ← Creation script
└── POSTCARD_WORKFLOW.md        ← This file
```

---

## URL Structure

Each postcard is accessible via:
```
https://marcus-postcards.vercel.app/{recipient-slug}
```

Examples:
- `https://marcus-postcards.vercel.app/ashley`
- `https://marcus-postcards.vercel.app/john`
- `https://marcus-postcards.vercel.app/sarah`

The slug is automatically the lowercase version of the name you provide to the script.

---

## Tips & Best Practices

### Photo Tips
- **Format**: JPG, PNG, or HEIC work well
- **Size**: Compress large images (under 2MB each is ideal)
- **Orientation**: Mix of portrait and landscape looks nice
- **Quality**: Medium-high quality is fine for web

### Video Tips
- **Format**: MP4 or MOV
- **Length**: Keep under 30 seconds for best experience
- **Size**: Compress to under 10MB if possible
- **Placement**: Usually best as the first memory item

### Content Tips
- **Be specific**: Reference actual shared memories
- **Be genuine**: Personal touches mean more than perfect prose
- **Ask questions**: Engage them with thoughtful prompts
- **Keep it concise**: 2-3 paragraphs on page 1 is plenty

### Deployment Tips
- **Test first**: Always run `npm run dev` before pushing
- **Batch postcards**: You can create multiple postcards in one commit
- **Check Vercel**: Visit the Vercel dashboard to see deployment status
- **Preview before sharing**: Open the live link yourself first

---

## Troubleshooting

### Photos not loading?
- Check file paths match exactly (case-sensitive!)
- Verify files are in `public/photos/` folder
- Clear browser cache and refresh

### Postcard not appearing at URL?
- Verify the slug in `postcards.js` matches the URL
- Check that import statement was added correctly
- Redeploy if necessary

### Need to edit after deploying?
1. Make changes to the data file
2. Commit and push again
3. Vercel will auto-redeploy with updates

---

## Example: Creating Sarah's Postcard

```bash
# 1. Generate files
node scripts/create-postcard.js sarah

# 2. Create folder and add photos
mkdir -p public/photos/sarah
# Then add photos to public/photos/sarah/:
#    - sarah-memory-1.JPG
#    - sarah-memory-2.JPG
#    - sarah-video.MOV

# 3. Edit src/data/sarah.js with personalized content

# 4. Test locally
npm run dev
# Visit: http://localhost:5173/sarah

# 5. Deploy
git add .
git commit -m "Add postcard for Sarah"
git push

# 6. Share: https://marcus-postcards.vercel.app/sarah
```

---

## Questions?

If you run into issues or have questions, check:
1. This workflow guide
2. The template file: `src/data/_template.js`
3. Ashley's example: `src/data/ashley.js`
