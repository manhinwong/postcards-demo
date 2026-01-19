# Setting Up Public Repository from Public Branch

## The Challenge

GitHub doesn't allow individual branches to be public while the repo is private. **Repo visibility applies to all branches.** However, you can achieve this with a separate public repository.

## Solution: Separate Public Repository

Create a **separate public GitHub repository** that syncs from your private repo's `public` branch.

### Step 1: Keep Main Repo Private

1. Go to your repository on GitHub
2. Settings → Danger Zone → Change repository visibility
3. Make sure it's set to **Private**

### Step 2: Create Public Branch (if not done)

```bash
# On your local machine
git checkout -b public

# Remove personal postcards (keep only Claude)
git rm src/data/ashley.js src/data/mia.js src/data/janine.js src/data/angelina.js src/data/neil.js
git rm -r public/photos/ashley public/photos/mia public/photos/janine public/photos/angelina public/photos/neil

# Update postcards.js to only have Claude
cp src/data/postcards.public.js src/data/postcards.js

# Commit
git add .
git commit -m "Create public demo branch with Claude only"
git push origin public
```

### Step 3: Create Separate Public Repository

1. **On GitHub**, create a NEW repository:
   - Name: `postcards-demo` (or similar)
   - Set to **Public**
   - **Don't** initialize with README/license

2. **Add the public repo as a remote:**
   ```bash
   # Still on the public branch
   git remote add public https://github.com/YOUR_USERNAME/postcards-demo.git
   
   # Push public branch to public repo
   git push public public:main
   ```

### Step 4: Keep Public Repo in Sync

When you update code (but not personal data), sync to public repo:

```bash
# Make code changes on main branch (private)
git checkout main
# ... make changes to components, etc. ...

# Switch to public branch and merge code changes
git checkout public
git merge main --no-ff -m "Sync code updates" --no-commit

# Remove any personal data that got merged
git reset HEAD src/data/ashley.js src/data/mia.js  # etc.
git checkout --ours src/data/postcards.js  # Keep Claude-only version
git rm src/data/ashley.js src/data/mia.js  # Remove personal files

# Commit and push to both repos
git commit -m "Sync code updates to public branch"
git push origin public          # Push to private repo's public branch
git push public public:main    # Push to public repo
```

### Alternative: Automated Sync Script

Create a script to automate syncing:

```bash
#!/bin/bash
# sync-to-public.sh

echo "🔄 Syncing public branch to public repository..."

# Make sure we're on public branch
git checkout public

# Pull latest from private repo
git pull origin public

# Push to public repo
git push public public:main

echo "✅ Sync complete!"
```

## Result

- **Private Repo (main branch)**: Contains all personal postcards, stays private
- **Public Repo**: Contains only Claude demo, fully public and shareable
- **Friends access**: Use private repo URLs (main branch) - they work normally
- **Portfolio/Sharing**: Use public repo URL - safe to share

## Quick Reference

```bash
# Work on personal postcards (private)
git checkout main
# ... work on postcards ...

# Update public demo
git checkout public
# ... sync code changes ...
git push origin public          # Private repo
git push public public:main     # Public repo
```

## Vercel Deployment

You can deploy both:
- **Private repo main branch** → Personal postcards (private deployment)
- **Public repo main branch** → Claude demo (public deployment, shareable URL)

This gives you separate URLs for personal vs. public content.
