# EIP-1559 Ethereum Gas Fee Estimator

A simple JavaScript-based gas fee estimator for Ethereum transactions using the EIP-1559 model. This tool calculates the estimated gas fees based on user inputs for the base fee, priority fee (tip), and gas limit.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [How EIP-1559 Works](#how-eip-1559-works)
4. [Prerequisites](#prerequisites)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Example](#example)

## Introduction

EIP-1559 introduced a new fee structure for Ethereum, making gas fee estimation more predictable. This tool helps users estimate the total gas fees for their transactions by allowing them to input the base fee, priority fee (tip), and gas limit.

## Features

- Calculate gas fees using the EIP-1559 model
- Accepts user inputs for base fee, priority fee, and gas limit
- Outputs gas fees in both gwei and ETH

## How EIP-1559 Works

EIP-1559 includes three main components that affect gas fees:

- **Base Fee**: The minimum fee required to include a transaction in a block, which adjusts based on network demand.
- **Priority Fee (Tip)**: An optional fee to incentivize miners to prioritize your transaction.
- **Gas Limit**: The maximum amount of gas units a transaction can consume.

For more details, refer to the official [EIP-1559 documentation](https://eips.ethereum.org/EIPS/eip-1559).

### Prerequisites

- A basic understanding of JavaScript
- A code editor like Visual Studio Code

### Installation

No installation is required for this project. Simply copy the code and run it in your browser’s developer console, or integrate it into your web application.

## Usage

1. **Open the Script:**
   - Copy the provided JavaScript code from the `script.js` file.

2. **Run the Script:**
   - Paste the code into your browser's developer console, or integrate it into your HTML file.

3. **Enter Inputs:**
   - When prompted, enter the base fee (in gwei), priority fee (in gwei), and gas limit.

4. **View Results:**
   - The total gas fee will be displayed in both gwei and ETH.

### Example

Example input:
```text
Base Fee: 30 gwei
Priority Fee: 2 gwei
Gas Limit: 21000
