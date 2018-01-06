#!/bin/bash

# Config
source deploy/config.env

# Silent fetch
git remote update > /dev/null

# Conditions
if [[ $(git rev-parse --abbrev-ref HEAD) != $DEPLOY_BRANCH ]]; then >&2 echo "🚫  You are not on deployment branch (${DEPLOY_BRANCH})."; exit 1; fi
if [[ $(git status -s) ]]; then >&2 echo "🚫  There cannot be uncommitted changes before deployment process."; exit 1; fi

# Build app locally, as alpine-node has many issues with lacking modules support, binaries, etc
yarn build

# Deploy
rsync -azP --delete --filter=":- .dockerignore" . $DEPLOY_HOST:$DEPLOY_SOURCE_DIR
ssh $DEPLOY_HOST "cd $DEPLOY_SOURCE_DIR; ./deploy/docker.sh local"
