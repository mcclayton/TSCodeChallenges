#!/bin/bash

########################
# Generates the README #
########################
GITHUB_ROOT="https://github.com/mcclayton/TSCodeChallenges/tree/master"
DESCRIPTION_FILENAME="description.md"

cat ./readme_gen/README_TITLE.md > README.md   # Add README_TITLE to README

echo "| Solution | Description |" >> README.md
echo "|:---------:|:---------:|" >> README.md
find ./src -type f -name "index.ts" | while read path; do
  SOLUTION_PATH="$GITHUB_ROOT/$path"
  DIRECTORY_PATH="$(dirname $path)"
  DIRECTORY_NAME="$(basename "$DIRECTORY_PATH")"
  DESCRIPTION="$(cat $DIRECTORY_PATH/$DESCRIPTION_FILENAME 2>/dev/null)"
  echo "| [$DIRECTORY_NAME]($SOLUTION_PATH) | $DESCRIPTION |" >> README.md
done

# Print Out Resulting README
echo "GENERATED NEW README:"
echo -e "---------------------\n\n"
cat README.md | while read line; do
  echo "> $line"
done
