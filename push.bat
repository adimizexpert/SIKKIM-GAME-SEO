@echo off
cd /d "%~dp0"
git add .
git commit -m "Home page: move login and gift code buttons above intro; deploy updates" 2>nul || git commit -m "Updates"
git push origin main
echo Done.
pause
