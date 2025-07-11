@echo off

REM Build the project
npm run build

REM Create a new branch for deployment
git checkout -b gh-pages

REM Remove all files except dist
git rm -rf .
git checkout main -- dist

REM Move dist contents to root
move dist\* .
rmdir dist

REM Add all files
git add .

REM Commit
git commit -m "Deploy to GitHub Pages"

REM Push to gh-pages branch
git push origin gh-pages --force

REM Go back to main branch
git checkout main
git branch -D gh-pages

echo Deployment complete!
pause 