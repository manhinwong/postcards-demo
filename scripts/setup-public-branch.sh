#!/bin/bash

# Script to set up public branch with only Claude postcard
# Run from project root: bash scripts/setup-public-branch.sh

set -e  # Exit on error

echo "🔧 Setting up public branch..."

# Check if we're in a git repo
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Check if public branch exists
if git show-ref --verify --quiet refs/heads/public; then
    echo "⚠️  Public branch already exists. Switching to it..."
    git checkout public
else
    echo "📦 Creating new public branch..."
    git checkout -b public
fi

# Restore Claude if it doesn't exist
if [ ! -f "src/data/claude.js" ]; then
    echo "📝 Restoring Claude postcard..."
    if git log --all --full-history --oneline -- "src/data/claude.js" | head -1 > /dev/null; then
        git checkout HEAD~1 -- src/data/claude.js 2>/dev/null || echo "⚠️  Could not restore from history. You may need to recreate claude.js"
    else
        echo "⚠️  Claude postcard not found in history. You'll need to create it."
    fi
fi

echo ""
echo "🗑️  Removing personal postcards from public branch..."
echo "   (This only affects the public branch, not main)"

# Remove personal postcard data files (if they exist)
for file in ashley mia janine angelina neil; do
    if [ -f "src/data/${file}.js" ]; then
        git rm "src/data/${file}.js" 2>/dev/null || echo "   ${file}.js already removed or not tracked"
    fi
done

# Remove personal photos (keep only Claude's)
echo ""
echo "📸 Removing personal photos (keeping Claude's)..."
for dir in ashley mia janine angelina neil; do
    if [ -d "public/photos/${dir}" ]; then
        git rm -r "public/photos/${dir}" 2>/dev/null || echo "   ${dir}/ already removed or not tracked"
    fi
done

echo ""
echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "   1. Edit src/data/postcards.js to only include Claude"
echo "   2. Review changes: git status"
echo "   3. Commit: git commit -m 'Create public demo branch'"
echo "   4. Push: git push origin public"
echo ""
echo "💡 To switch back to main: git checkout main"
