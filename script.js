// Function to convert gwei to ETH
function gweiToEth(gwei) {
    return gwei / 1e9;
}

// Function to calculate total gas fee
function calculateGasFee(baseFee, priorityFee, gasLimit) {
    // Total fee in gwei
    const totalFeeGwei = (baseFee + priorityFee) * gasLimit;

    // Convert total fee to ETH
    const totalFeeEth = gweiToEth(totalFeeGwei);

    return {
        totalFeeGwei: totalFeeGwei,
        totalFeeEth: totalFeeEth
    };
}

// User inputs
const baseFee = parseFloat(prompt("Enter the base fee (in gwei):"));
const priorityFee = parseFloat(prompt("Enter the priority fee (tip, in gwei):"));
const gasLimit = parseInt(prompt("Enter the gas limit:"));

// Calculate gas fee
const gasFee = calculateGasFee(baseFee, priorityFee, gasLimit);

// Output the results
console.log(`Total Gas Fee: ${gasFee.totalFeeGwei} gwei`);
console.log(`Total Gas Fee: ${gasFee.totalFeeEth} ETH`);
alert(`Total Gas Fee: ${gasFee.totalFeeGwei} gwei\nTotal Gas Fee: ${gasFee.totalFeeEth} ETH`);
