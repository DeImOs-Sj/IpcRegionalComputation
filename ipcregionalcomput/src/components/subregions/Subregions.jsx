import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import ipcregional from '../../abis/ipcregional.json';

const contractAddress ='0x35504B981aEa840C72dBAe9037eC5D6Fc0cbF3f9'; // Update with your contract address

const SubRegion = (props) => {
  const [createdRegions, setCreatedRegions] = useState([]);
  const [createdContinents, setCreatedContinents] = useState([]);
 const { userAddress } = props;

  useEffect(() => {
    const fetchCreatedData = async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(contractAddress, ipcregional, provider);
        const regions = await contract.getCreatedRegions();
        const continents = await contract.getCreatedContinents();
        setCreatedRegions(regions);
        setCreatedContinents(continents);
      } catch (error) {
        console.error('Error fetching created data:', error);
      }
    };

    fetchCreatedData();
  }, []);

  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">#</th>
                    <th scope="col" className="px-6 py-4">Created Continents</th>
                    <th scope="col" className="px-6 py-4">Created Regions</th>
                    <th scope="col" className="px-6 py-4">Address</th>
                  </tr>
                </thead>
                <tbody>
                  {createdRegions.map((region, index) => (
                    <tr
                      key={index}
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                    >
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{createdContinents[index]}</td>
                      <td className="px-6 py-4">{region}</td>
                        <td className="px-6 py-4">{ userAddress }</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubRegion;
