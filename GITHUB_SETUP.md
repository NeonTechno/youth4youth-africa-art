# GitHub Token Issue - Setup Instructions

## Problem
The Personal Access Token you provided doesn't have the required `repo` scope for pushing code.

## Solution Options

### Option 1: Update Token Permissions (Recommended)

1. **Go to GitHub Token Settings:**
   - Visit: https://github.com/settings/tokens
   - Find your token (or create a new one)
   - Click "Edit" or "Generate new token (classic)"

2. **Set Required Permissions:**
   - ✅ Check **`repo`** (Full control of private repositories)
     - This includes: `repo:status`, `repo_deployment`, `public_repo`, `repo:invite`, `security_events`
   - ✅ Check **`workflow`** (if you plan to use GitHub Actions)

3. **Generate/Update Token:**
   - Click "Generate token"
   - Copy the new token

4. **Update Remote and Push:**
   ```bash
   cd /Users/user/Youth4Youth
   git remote set-url origin https://NeonTechno:YOUR_NEW_TOKEN@github.com/NeonTechno/youth4youth-africa-art.git
   git push -u origin main
   ```

### Option 2: Use SSH (Alternative)

1. **Check if you have SSH key:**
   ```bash
   ls -la ~/.ssh/id_*.pub
   ```

2. **If no SSH key, generate one:**
   ```bash
   ssh-keygen -t ed25519 -C "neontechnox@gmail.com"
   # Press Enter to accept default location
   # Optionally set a passphrase
   ```

3. **Add SSH key to GitHub:**
   ```bash
   cat ~/.ssh/id_ed25519.pub
   # Copy the output
   ```
   - Go to: https://github.com/settings/keys
   - Click "New SSH key"
   - Paste your public key
   - Save

4. **Update Remote to SSH:**
   ```bash
   cd /Users/user/Youth4Youth
   git remote set-url origin git@github.com:NeonTechno/youth4youth-africa-art.git
   git push -u origin main
   ```

### Option 3: Use GitHub CLI

If you have GitHub CLI installed:
```bash
gh auth login
# Follow prompts to authenticate
git push -u origin main
```

## Current Status

✅ Repository exists: `NeonTechno/youth4youth-africa-art`  
✅ Code is committed locally  
✅ Remote is configured  
❌ Token lacks `repo` scope for pushing

## Quick Fix Command

Once you have a token with `repo` scope, run:

```bash
cd /Users/user/Youth4Youth
git remote set-url origin https://NeonTechno:YOUR_TOKEN_WITH_REPO_SCOPE@github.com/NeonTechno/youth4youth-africa-art.git
git push -u origin main
```

---

**Note:** For security, after pushing, you may want to remove the token from the remote URL and use credential helper instead.

