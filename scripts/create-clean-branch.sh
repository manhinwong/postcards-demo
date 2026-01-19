#!/bin/bash

# Script to create a clean branch with no sensitive commit history
# This creates a fresh start while keeping all current files

set -e

echo "🧹 Creating a clean branch with no sensitive history..."
echo ""

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"

# Create a new orphan branch (no history)
CLEAN_BRANCH="clean-public"
echo "Creating clean branch: $CLEAN_BRANCH"

# Check if branch exists
if git show-ref --verify --quiet refs/heads/$CLEAN_BRANCH; then
    read -p "Branch $CLEAN_BRANCH already exists. Overwrite? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git branch -D $CLEAN_BRANCH
    else
        exit 1
    fi
fi

# Create orphan branch
git checkout --orphan $CLEAN_BRANCH

# Add all current files
git add -A

# Create initial commit with clean message
git commit -m "Initial commit: Digital Postcards project

A web app for creating personalized digital postcards with photos, messages, and memories, featuring a book-like interface with page-turning animations."

echo ""
echo "✅ Created clean branch: $CLEAN_BRANCH"
echo "   This branch has no previous commit history"
echo ""
echo "To switch back: git checkout $CURRENT_BRANCH"
echo "To use this as your public branch: git push origin $CLEAN_BRANCH"
