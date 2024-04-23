// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract IpcRegional {
    address public parentRoot;
    string public parentSubnetId;
    mapping(string => address) regionData;
    mapping(string => bool) createdRegions;
    mapping(string => bool) createdContinents;
    string[] public regionKeys;
    string[] public continentKeys;

    struct StorageListing {
        uint256 size; // Size in bytes
        uint256 amount;
        string location;
        uint256 time;
        address seller;
        bool available;
    }

    mapping(string => StorageListing[]) public storageListings;

    event DataUpdated(string region, address userAddress);
    event RegionCreated(string region);
    event StorageListed(
        string region,
        uint256 size,
        uint256 amount,
        string location,
        uint256 time,
        address seller
    );
    event StorageBought(string region, uint256 index, address buyer);

    modifier onlyParent() {
        require(msg.sender == parentRoot, "Only parent can perform this action");
        _;
    }

    constructor(address _parentRoot, string memory _parentSubnetId) {
        parentRoot = _parentRoot;
        parentSubnetId = _parentSubnetId;
    }

    function createRegion(string memory region, address userAddress) external onlyParent {
        require(!createdRegions[region], "Region already exists");
        regionData[region] = userAddress;
        createdRegions[region] = true;
        regionKeys.push(region);
        emit DataUpdated(region, userAddress);
    }

    function createContinent(string memory region) external {
        require(!createdContinents[region], "Continent already exists");
        regionData[region] = msg.sender;
        createdContinents[region] = true;
        continentKeys.push(region);
        emit RegionCreated(region);
    }

    function listStorage(
        string memory region,
        uint256 size, // Size in bytes
        uint256 amount,
        string memory location,
        uint256 time
    ) external {
        require(createdRegions[region], "Region does not exist");
        storageListings[region].push(
            StorageListing(size, amount, location, time, msg.sender, true)
        );
        emit StorageListed(region, size, amount, location, time, msg.sender);
    }

    function findAvailableStorage(
        StorageListing[] storage listings
    ) private view returns (uint256) {
        for (uint256 i = 0; i < listings.length; i++) {
            if (listings[i].available) {
                return i;
            }
        }
        // If no available storage is found, return a value that cannot be a valid index
        return listings.length; // This assumes no storage will have an index equal to the length of the list
    }

    function buyStorage(string memory region) external payable {
        require(createdRegions[region], "Region does not exist");

        // Find the first available storage item in the specified region
        StorageListing[] storage listings = storageListings[region];
        uint256 index = findAvailableStorage(listings);
        require(index < listings.length, "No available storage found");

        StorageListing storage storageToBuy = listings[index];
        require(msg.value >= storageToBuy.amount, "Insufficient funds");

        storageToBuy.available = false;
        payable(storageToBuy.seller).transfer(storageToBuy.amount);
        emit StorageBought(region, index, msg.sender);
    }

    function getData(string memory region) external view returns (address) {
        return regionData[region];
    }

    function getCreatedRegions() external view returns (string[] memory) {
        return regionKeys;
    }

    function getCreatedContinents() external view returns (string[] memory) {
        return continentKeys;
    }
}
