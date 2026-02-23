# Deploy to GitHub

Run these in a terminal (PowerShell or Git Bash) from the project folder.

## 1. Go to the project folder

```powershell
cd "c:\Work\SEO\ADIMIZEXPERT SEO's\FEB SEOs\sikkim\SIKKIM-GAME-SEO"
```

Or in Git Bash / CMD:

```bash
cd "c:\Work\SEO\ADIMIZEXPERT SEO's\FEB SEOs\sikkim\SIKKIM-GAME-SEO"
```

## 2. Stage and commit

```bash
git add .
git commit -m "SEO fixes: sitemap, robots, redirects, canonicals, thin content audit"
```

(Use `-m "Your message"` if you want a different commit message.)

## 3. Push to GitHub

```bash
git push origin main
```

If the branch isn’t set up yet:

```bash
git branch -M main
git push -u origin main
```

---

**Remote:** `https://github.com/adimizexpert/SIKKIM-GAME-SEO.git` (already set as `origin`)

**If push asks for login:** use a [Personal Access Token](https://github.com/settings/tokens) as the password, or sign in with GitHub CLI (`gh auth login`).

**From VS Code / Cursor:** open Source Control (Ctrl+Shift+G), stage changes, commit, then click **Push**.
