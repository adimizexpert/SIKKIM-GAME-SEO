@echo off
cd /d "%~dp0"

echo Initializing git repository...
git init

echo Checking remote...
git remote remove origin 2>nul
git remote add origin https://github.com/adimizexpert/SIKKIM-GAME-SEO.git

echo Adding all files...
git add .

echo Committing changes...
git commit -m "Initial commit: Complete Sikkim Game SEO website with all pages and optimizations"

echo Setting main branch...
git branch -M main

echo Pushing to GitHub...
git push -u origin main

echo Done!
pause

