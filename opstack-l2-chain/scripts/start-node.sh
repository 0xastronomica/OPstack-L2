#!/bin/bash

# Start the OPstack Layer 2 node

# Load environment variables
source .env

# Set the network configuration
NETWORK_CONFIG="./config/chain.spec.json"

# Start the node with stablecoin fee payment
echo "Starting the OPstack Layer 2 node..."
op-node run --config "$NETWORK_CONFIG" --fee-token "StableCoin" --fee-amount "1000000000000000000" # Example fee amount in wei

# Keep the script running to maintain the node
tail -f /dev/null