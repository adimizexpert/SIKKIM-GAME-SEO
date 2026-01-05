# PowerShell script to push code to GitHub
# Run this script: .\push-to-github.ps1

Set-Location -Path $PSScriptRoot

Write-Host "Initializing git repository..." -ForegroundColor Green
git init

Write-Host "Checking remote..." -ForegroundColor Green
$remoteExists = git remote get-url origin 2>$null
if ($remoteExists) {
    git remote remove origin
}
git remote add origin https://github.com/adimizexpert/SIKKIM-GAME-SEO.git

Write-Host "Adding all files..." -ForegroundColor Green
git add .

Write-Host "Committing changes..." -ForegroundColor Green
git commit -m "Initial commit: Complete Sikkim Game SEO website with all pages and optimizations"

Write-Host "Setting main branch..." -ForegroundColor Green
git branch -M main

Write-Host "Pulling remote changes (if any)..." -ForegroundColor Yellow
git pull origin main --allow-unrelated-histories --no-edit

Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push -u origin main

Write-Host "Done!" -ForegroundColor Green

