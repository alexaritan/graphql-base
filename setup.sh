#!/bin/zsh

echo "Removing association with Github repo"
rm -rf ./.git

echo "Adding up-to-date dependencies"
yarn add graphql-yoga nodemon eslint

echo
echo "HEADS UP: Don't forget to change the URL of the git repo in your package.json"
echo "Have a nice day!"