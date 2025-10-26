#!/bin/bash

# This script initializes the project environment and installs necessary dependencies.

set -e

echo "Bootstrapping the OPstack L2 chain project..."

# Install necessary packages
echo "Installing required packages..."
apt update
apt install -y nodejs npm

# Install project dependencies
echo "Installing project dependencies..."
npm install

# Additional setup can be added here

echo "Bootstrap completed successfully!"