# Workshop Configuration Notes

I kept the local configuration small because I only
needed a few values while working through the workshop.

## RPC URL

The RPC URL is the endpoint used to communicate with
the chain.

I keep it outside the contract logic so changing the
network does not require changing application code.

## Chain ID

The chain ID is useful when checking that I am connected
to the network I actually intended to use.

This is especially useful when switching between a local
node and a test network.

## Contract Address

The contract address identifies the deployed contract.

I treat it as configuration rather than hard-coding it
inside helper functions.

## A small check

Before doing anything else, I can check that all three
values are present.

This does not prove that the contract is working. It just
helps catch obvious configuration mistakes earlier.

## What I learned

The configuration itself is simple, but keeping it separate
made the rest of the code easier to read.
