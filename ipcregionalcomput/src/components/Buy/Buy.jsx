// BuyStoragePage.jsx
import React, { useState } from 'react';
import { ethers } from 'ethers';
import ipcregional from '../../abis/ipcregional.json';

const contractAddress ='0x35504B981aEa840C72dBAe9037eC5D6Fc0cbF3f9'; // Update with your contract address

const BuyStoragePage = () => {
    const [region, setRegion] = useState('');
    const [amount, setAmount] = useState('');

    const handleBuyStorage = async (e) => {
        e.preventDefault();
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, ipcregional, signer);

            // Call the buyStorage function
            const tx = await contract.buyStorage(region, { value: ethers.utils.parseEther(amount) });
            console.log('Transaction sent: ' + tx.hash);
            await tx.wait();
            console.log('Transaction mined');
        } catch (err) {
            console.error('Error with buyStorage: ', err);
            // Handle error appropriately
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <div className="grid place-items-center mx-2 my-20 sm:my-auto">
                <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
                    px-6 py-10 sm:px-10 sm:py-6 
                    bg-white rounded-lg shadow-md lg:shadow-lg">
                    <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                        Buy Storage
                    </h2>
                    <form className="mt-10" onSubmit={handleBuyStorage}>
                        <label htmlFor="region" className="block text-xs font-semibold text-gray-600 uppercase">Region</label>
                        <input 
                            id="region" 
                            type="text" 
                            value={region} 
                            onChange={(e) => setRegion(e.target.value)} 
                            placeholder="Region" 
                            className="block w-full py-3 px-1 mt-2 
                            text-gray-800 appearance-none 
                            border-b-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required 
                        />

                        <label htmlFor="amount" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Amount (FIL)</label>
                        <input 
                            id="amount" 
                            type="number" 
                            step="any"
                            min="0"
                            value={amount} 
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Amount" 
                            className="block w-full py-3 px-1 mt-2 
                            text-gray-800 appearance-none 
                            border-b-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required 
                        />

                        <button 
                            type="submit"
                            className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                            font-medium text-white uppercase
                            focus:outline-none hover:bg-gray-700 hover:shadow-none"
                        >
                            Buy Storage
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default BuyStoragePage;
