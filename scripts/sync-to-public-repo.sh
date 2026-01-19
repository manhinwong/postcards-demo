#!/bin/bash

# Script to sync public branch to separate public repository
# Usage: bash scripts/sync-to-public-repo.sh
# 
# Prerequisites:
# 1. Create a public GitHub repo (e.g., postcards-demo)
# 2. Add it as a remote: git remote add public https://github.com/YOUR_USERNAME/postcards-demo.git

set -e

echo "🔄 Syncing public branch to public repository..."

# Check if we're in a git repo
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Check if public remote exists
if ! git remote | grep -q "^public$"; then
    echo "❌ Error: 'public' remote not found"
    echo ""
    echo "To add the public remote, run:"
    echo "  git remote add public https://github.com/YOUR_USERNAME/postcards-demo.git"
    exit 1
fi

# Check current branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "public" ]; then
    echo "⚠️  Currently on '$CURRENT_BRANCH' branch"
    read -p "Switch to 'public' branch? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git checkout public
    else
        echo "❌ Aborted. Please switch to 'public' branch first."
        exit 1
    fi
fi

# Pull latest from private repo
echo "📥 Pulling latest from private repo..."
git pull origin public

# Push to public repo
echo "📤 Pushing to public repository..."
git push public public:main

echo ""
echo "✅ Sync complete!"
echo "   Private repo (public branch): $(git remote get-url origin)"
echo "   Public repo (main branch): $(git remote get-url public)"
