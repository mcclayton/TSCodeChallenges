#!/bin/bash

########################
# Generates the README #
########################
GITHUB_ROOT="https://github.com/mcclayton/TSCodeChallenges/tree/master"
PROBLEM_FILENAME="problem.md"
INFO_FILENAME="info.md"

cat ./readme_gen/README_TITLE.md > README.md   # Add README_TITLE to README

echo "| Code | Description | Links |" >> README.md
echo "|:----:|:-----------:|:-----:|" >> README.md
find ./src -type f -name "index.ts" | while read path; do
  SOLUTION_PATH="$GITHUB_ROOT/$path"
  DIRECTORY_PATH="$(dirname $path)"
  DIRECTORY_NAME="$(basename "$DIRECTORY_PATH")"

  CODE_SOL_LINK="[$DIRECTORY_NAME]($SOLUTION_PATH)"
  PROBLEM_MD="$(cat $DIRECTORY_PATH/$PROBLEM_FILENAME 2>/dev/null)"
  INFO_MD="$(cat $DIRECTORY_PATH/$INFO_FILENAME 2>/dev/null)"

  echo "| $CODE_SOL_LINK | $PROBLEM_MD | $INFO_MD |" >> README.md
done

# Print Out Resulting README
echo "GENERATED NEW README:"
echo -e "---------------------\n\n"
cat README.md | while read line; do
  echo "> $line"
done
