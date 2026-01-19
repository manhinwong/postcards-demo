# Hiding Sensitive Commits Before Making Repo Public

This guide helps you hide sensitive names (like "Ashley") from commit history before making your repo public.

## The Problem

Your git history contains commits with sensitive names in commit messages:
- "Initial postcard project - Ashley's version"
- Other commits mentioning personal names

## Solutions (Choose One)

### Option 1: Bury Commits with Trivial Commits ⭐ Easiest

Create many trivial commits to push sensitive commits further back in history.

**Pros:**
- Safe, doesn't rewrite history
- Easy to do
- Sensitive commits become less visible

**Cons:**
- Old commits still exist in history
- Anyone can still see them if they dig deep

**Usage:**
```bash
bash scripts/bury-sensitive-commits.sh
```

This creates 50 trivial commits to bury the old ones.

### Option 2: Rewrite Commit Messages ⚠️ Moderate Risk

Use interactive rebase to edit commit messages containing sensitive names.

**Pros:**
- Actually removes sensitive names from messages
- More thorough

**Cons:**
- Rewrites git history
- Requires manual work
- Can be complex

**Usage:**
```bash
bash scripts/rewrite-commit-messages.sh
# Then follow the interactive rebase instructions
```

### Option 3: Create Clean Branch (Fresh Start) ⭐⭐ Recommended

Create a new branch with no history, keeping all current files.

**Pros:**
- Completely clean history
- No sensitive commits at all
- Easiest for public sharing

**Cons:**
- Loses all commit history
- Can't see development progression

**Usage:**
```bash
bash scripts/create-clean-branch.sh
# This creates a "clean-public" branch with fresh history
```

Then push this branch to your public repo:
```bash
git push public clean-public:main --force
```

## Recommended Approach

For making a repo public, **Option 3 (Clean Branch)** is recommended:

1. Create the clean branch
2. Verify it has no sensitive commits: `git log --all`
3. Push to public repo
4. Keep your original branch private

## Quick Commands

```bash
# Check for sensitive commits
git log --all --grep="Ashley" --oneline

# See commit authors
git log --format="%an %s" --all | grep -i "ashley"

# Create clean branch
bash scripts/create-clean-branch.sh

# Verify clean branch
git checkout clean-public
git log --oneline  # Should show only 1 commit
```

## After Creating Clean Branch

1. Switch to clean branch: `git checkout clean-public`
2. Verify it's clean: `git log --all`
3. Push to public repo: `git push public clean-public:main --force`
4. Update your public branch: `git branch -m public old-public && git branch -m clean-public public`

## Important Notes

⚠️ **Always backup first:**
```bash
git branch backup-$(date +%Y%m%d)
```

⚠️ **Force pushing rewrites remote history** - only do this on a repo you control

⚠️ **Clean branch loses all history** - keep your original branch for reference
