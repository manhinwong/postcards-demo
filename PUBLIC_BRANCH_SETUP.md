# Public Branch Setup Guide

This guide shows how to create a public GitHub branch with only Claude's postcard (demo), while keeping all personal postcards private on the main branch.

## Strategy

- **`main` branch`** → Private, contains all personal postcards
- **`public` branch** → Public, contains only Claude demo postcard

## Step-by-Step Setup

### Step 1: Restore Claude Postcard (if needed)

If you deleted Claude, restore it from git history:

```bash
# Check if Claude exists in history
git log --all --full-history --oneline -- "src/data/claude.js"

# Restore from last commit that had it
git checkout HEAD~1 -- src/data/claude.js
```

Or recreate it using the template.

### Step 2: Create Public Branch

```bash
# Create and switch to new public branch
git checkout -b public

# Or if branch already exists:
git checkout public
```

### Step 3: Remove Personal Postcards from Public Branch

On the `public` branch, remove all personal postcard data files:

```bash
# Remove personal postcard data files
git rm src/data/ashley.js
git rm src/data/mia.js
git rm src/data/janine.js
git rm src/data/angelina.js
git rm src/data/neil.js

# Remove personal photos (keep only Claude's)
git rm -r public/photos/ashley
git rm -r public/photos/mia
git rm -r public/photos/janine
git rm -r public/photos/angelina
git rm -r public/photos/neil
```

### Step 4: Update postcards.js for Public Branch

Edit `src/data/postcards.js` to only include Claude:

```javascript
import { claudePostcard } from './claude';

export const postcards = {
  claude: claudePostcard,
};

export const getPostcard = (slug) => {
  const normalized = slug?.toLowerCase().trim() || 'claude';
  return postcards[normalized] || postcards.claude;
};
```

### Step 5: Remove Password Protection (if present)

If you have password protection, remove it from the public branch since Claude is public.

### Step 6: Commit and Push Public Branch

```bash
git add .
git commit -m "Create public demo branch with Claude postcard only"
git push origin public
```

### Step 7: Make Public Branch Public on GitHub

1. Go to GitHub repository settings
2. Under "Danger Zone" → "Change repository visibility"
3. Or keep repo private but make `public` branch the default for forks

### Step 8: Configure Vercel (Optional)

If you want the public branch to deploy separately:

1. Go to Vercel dashboard
2. Add a new project or branch deployment
3. Point it to the `public` branch
4. This gives you a separate demo URL

## Maintaining Both Branches

### When Adding New Personal Postcards

1. Work on `main` branch (private)
2. Don't merge to `public` branch
3. Personal postcards stay private

### When Updating Code/Components

1. Make changes on `main` branch
2. Test thoroughly
3. Cherry-pick or merge code changes to `public` branch:
   ```bash
   git checkout public
   git cherry-pick <commit-hash>  # for specific commits
   # OR
   git merge main --no-ff  # but be careful not to include personal data
   ```

### Quick Script to Sync Code (Not Data)

Create a script to sync only code files:

```bash
#!/bin/bash
# sync-code-to-public.sh

git checkout public
git checkout main -- src/components/
git checkout main -- src/App.jsx
git checkout main -- package.json
git checkout main -- vite.config.js
# Add other code files as needed
git add .
git commit -m "Sync code updates from main (excluding personal data)"
git push origin public
```

## Branch Structure

```
main (private)
├── All personal postcards (ashley, mia, janine, etc.)
├── All personal photos
└── Full codebase

public (public)
├── Only Claude postcard
├── Only Claude photos
└── Same codebase structure
```

## Benefits

✅ Share code publicly without exposing personal content
✅ Friends can still access their personalized postcards (on main branch)
✅ Demo available for portfolio/showcase
✅ Easy to maintain - separate concerns

## Important Notes

⚠️ **Never merge `main` → `public`** without carefully excluding personal data
⚠️ **Always review changes** before pushing to public branch
⚠️ **Keep main branch private** to protect personal postcards
⚠️ **Test public branch** before making it public
