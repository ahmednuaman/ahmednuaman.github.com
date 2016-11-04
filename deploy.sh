#!/bin/bash

cd build
git init
git remote add origin git@github.com:ahmednuaman/ahmednuaman.github.io.git
git add .
git commit -a -m 'deploy, yo'
git branch master
git checkout master
git branch -D master
git push origin master -f

echo 'Deployed, yo'
