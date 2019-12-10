#!/bin/bash

########################
# Generates the README #
########################
GITHUB_ROOT="https://github.com/mcclayton/TSCodeChallenges/tree/master"

cat ./readme_gen/README_TITLE.md > README.md   # Add README_TITLE to README

echo "| Name | Solution |" >> README.md
echo "|:---------:|:---------:|" >> README.md
find ./src -type f -name "index.ts" | while read path; do
  SOLUTION_PATH="$GITHUB_ROOT/$path"
  DIRECTORY_NAME="$(basename "$(dirname "./src/LeftRotation/index.ts")")"
  echo "| $DIRECTORY_NAME | [Solution]($SOLUTION_PATH) |" >> README.md
done

# Print Out Resulting README
echo "GENERATED NEW README:"
echo -e "---------------------\n\n"
cat README.md | while read line; do
  echo "> $line"
done
