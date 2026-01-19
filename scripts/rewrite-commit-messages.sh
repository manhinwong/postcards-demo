#!/bin/bash

# Script to rewrite commit messages containing sensitive names
# WARNING: This rewrites git history. Only use on a branch you're comfortable modifying.

set -e

echo "⚠️  WARNING: This will rewrite git history!"
echo "   Make sure you're on the correct branch and have backups"
echo ""
read -p "Continue? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    exit 1
fi

# Find commits with sensitive names and rewrite them
echo "🔍 Finding commits with sensitive names..."

# Create a backup branch first
BACKUP_BRANCH="backup-$(date +%Y%m%d-%H%M%S)"
git branch "$BACKUP_BRANCH"
echo "✅ Created backup branch: $BACKUP_BRANCH"

# Find the first commit we want to keep (before sensitive commits)
FIRST_CLEAN_COMMIT=$(git log --oneline --grep="Ashley" --invert-grep | head -1 | cut -d' ' -f1)

if [ -z "$FIRST_CLEAN_COMMIT" ]; then
    echo "❌ Could not find a clean commit to rebase from"
    exit 1
fi

echo "📝 Rewriting commit messages..."
echo "   Starting from: $FIRST_CLEAN_COMMIT"

# Use interactive rebase to edit commit messages
# This is a manual process, but here's the command:
echo ""
echo "To rewrite commit messages, run:"
echo "  git rebase -i $FIRST_CLEAN_COMMIT"
echo ""
echo "In the editor, change 'pick' to 'reword' for commits you want to edit"
echo "Then edit the commit messages to remove sensitive names"
