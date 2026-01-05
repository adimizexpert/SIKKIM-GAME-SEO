# Git Push Instructions

Due to PowerShell path issues, please run these commands manually in your terminal:

## Step 1: Navigate to the project directory
```bash
cd "c:\Work\SEO\ADIMIZEXPERT SEO's\Sikkim Game"
```

## Step 2: Initialize Git (if not already initialized)
```bash
git init
```

## Step 3: Add the remote repository
```bash
git remote remove origin
git remote add origin https://github.com/adimizexpert/SIKKIM-GAME-SEO.git
```

## Step 4: Add all files
```bash
git add .
```

## Step 5: Commit the changes
```bash
git commit -m "Initial commit: Complete Sikkim Game SEO website with all pages and optimizations"
```

## Step 6: Set the main branch
```bash
git branch -M main
```

## Step 7: Push to GitHub
```bash
git push -u origin main
```

**Note:** If you encounter authentication issues, you may need to:
- Use a Personal Access Token instead of password
- Configure Git credentials: `git config --global user.name "Your Name"` and `git config --global user.email "your.email@example.com"`

## Alternative: Using GitHub Desktop or VS Code

You can also:
1. Open the project in VS Code
2. Use the Source Control panel (Ctrl+Shift+G)
3. Stage all changes
4. Commit with message
5. Push to the remote repository

