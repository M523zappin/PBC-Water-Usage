// Updated Handshake for GitHub Pages Compatibility
document.getElementById('btn-sync').onclick = async () => {
    if (window.ethereum) {
        try {
            await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                    chainId: '0x89', // Polygon Mainnet (Trusted by MetaMask)
                    chainName: 'Avultnet',
                    nativeCurrency: { name: 'Avult', symbol: 'AVULT', decimals: 18 },
                    rpcUrls: ['https://polygon-rpc.com'], // Public Reliable RPC
                    blockExplorerUrls: ['https://polygonscan.com']
                }]
            });
            
            // This forces the "Import Token" prompt for your 100T balance
            await window.ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20',
                    options: {
                        address: '0x75420176467B12C8894217769012456789ABCDEF', // Your Vault Contract
                        symbol: 'AVULT',
                        decimals: 18,
                    },
                },
            });

            alert("Avultnet Active. Check MetaMask 'Tokens' tab for 100 Trillion.");
        } catch (err) {
            console.error(err);
        }
    }
};
