import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ethers } from 'ethers';
import ipcregional from '../../abis/ipcregional.json';
import SubRegions from "../subregions/Subregions"

const contractAddress ='0x35504B981aEa840C72dBAe9037eC5D6Fc0cbF3f9'; // Update with your contract address

const Create = () => {
  const [region, setRegion] = useState('');
  const [userAddress, setUserAddress] = useState('');

  const handleCreateContinent = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, ipcregional, signer);
      const tx = await contract.createContinent(region);
      console.log('Transaction sent: ' + tx.hash);
      await tx.wait();
      console.log('Transaction mined');
    } catch (err) {
      console.error('Error with createContinent: ', err);
      // Handle error appropriately
    }
  };

  const handleCreateRegion = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, ipcregional, signer);
      const tx = await contract.createRegion(region, userAddress);
      console.log('Transaction sent: ' + tx.hash);
      await tx.wait();
      console.log('Transaction mined');
    } catch (err) {
      console.error('Error with createRegion: ', err);
      // Handle error appropriately
    }
  };

  return (
    <div className='flex justify-center mt-[12rem]'>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Continent</TabsTrigger>
          <TabsTrigger value="password">Region</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Continent</CardTitle>
              <CardDescription>Create a parent continent to ease Distributed Computation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name of Continent</Label>
                <Input id="name" onChange={e => setRegion(e.target.value)} />
              </div>
              <div className="space-y-1"></div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleCreateContinent}>Create</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Create Region</CardTitle>
              <CardDescription>Create a regional subnet to ease Distributed Computation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Subnet Region</Label>
                <Input id="region" onChange={e => setRegion(e.target.value)} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Regional Validator</Label>
                <Input id="new" onChange={e => setUserAddress(e.target.value)} />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleCreateRegion}>Create</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      
    </div>
    
  );
};

export default Create;
