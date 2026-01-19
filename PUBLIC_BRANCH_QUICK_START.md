# Quick Start: Create Public Branch

## Quick Commands

```bash
# 1. Create and switch to public branch
git checkout -b public

# 2. Restore Claude postcard (if needed - already done)
# git checkout f71cf35 -- src/data/claude.js

# 3. Remove personal postcards
git rm src/data/ashley.js src/data/mia.js src/data/janine.js src/data/angelina.js src/data/neil.js

# 4. Remove personal photos (keep Claude's)
git rm -r public/photos/ashley public/photos/mia public/photos/janine public/photos/angelina public/photos/neil

# 5. Update postcards.js to only have Claude
cp src/data/postcards.public.js src/data/postcards.js

# 6. Commit and push
git add .
git commit -m "Create public demo branch with Claude postcard only"
git push origin public
```

## Or Use the Script

```bash
bash scripts/setup-public-branch.sh
# Then manually update postcards.js as shown above
```

## After Setup

1. **Keep main branch private** - Contains all personal postcards
2. **Make public branch public** - Only Claude demo
3. **Friends access their postcards** via main branch (private)
4. **Public can see demo** via public branch

## Switching Between Branches

```bash
# Work on personal postcards (private)
git checkout main

# Work on public demo
git checkout public
```
