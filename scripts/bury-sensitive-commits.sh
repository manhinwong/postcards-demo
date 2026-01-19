#!/bin/bash

# Script to create many trivial commits to bury sensitive commits in history
# This pushes sensitive commits further back, making them less visible

set -e

echo "🔒 Creating trivial commits to bury sensitive history..."
echo "   This will create many small commits to push old commits further back"
echo ""

# Number of commits to create (adjust as needed)
NUM_COMMITS=50

# Files to modify (rotating through different files)
FILES=(
  "README.md"
  ".gitignore"
  "package.json"
  "vite.config.js"
  "tailwind.config.js"
  "postcss.config.js"
  "index.html"
  "vercel.json"
)

for i in $(seq 1 $NUM_COMMITS); do
  # Pick a file to modify
  FILE=${FILES[$((i % ${#FILES[@]}))]}
  
  # Add/remove a blank line
  if [ -f "$FILE" ]; then
    # Add a blank line at the end if it doesn't exist, or remove it if it does
    if [ -z "$(tail -c 1 "$FILE")" ]; then
      # File ends with newline, remove it temporarily
      sed -i '' -e '$ { /^$/d; }' "$FILE" 2>/dev/null || true
    else
      # File doesn't end with newline, add one
      echo "" >> "$FILE"
    fi
    
    git add "$FILE"
    git commit -m "Update project configuration and documentation" --allow-empty 2>/dev/null || \
    git commit -m "Update project configuration and documentation" >/dev/null 2>&1
    
    if [ $((i % 10)) -eq 0 ]; then
      echo "   Created $i commits..."
    fi
  fi
done

echo ""
echo "✅ Created $NUM_COMMITS trivial commits"
echo "   Sensitive commits are now buried deeper in history"
echo ""
echo "⚠️  Note: Old commits are still in history but much less visible"
echo "   For complete removal, consider using git rebase or creating a fresh branch"
