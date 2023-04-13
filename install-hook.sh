#!/bin/bash

# This script installs the pre-commit hook.

# Set the hook file name and path.
hook_name=pre-commit
hook_path=.git/hooks/$hook_name

set -e

# Create the .git/hooks directory if it does not exist.
if [ ! -d .git/hooks ]; then
  mkdir -p .git/hooks
fi

# Check if the hook already exists.
if [ -f $hook_path ]; then
  # If the hook already exists, backup the existing hook.
  mv $hook_path $hook_path.bak
  echo "Backed up existing hook to $hook_path.bak"
fi

# Copy the hook file to the .git/hooks directory.
cp $hook_name $hook_path

# Make the hook file executable.
chmod +x $hook_path

echo "Installed hook to $hook_path"
