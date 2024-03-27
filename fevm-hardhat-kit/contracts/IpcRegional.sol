// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract IpcRegional {
    address public parentRoot;
    string public parentSubnetId;
    mapping(string => address) regionData;
    mapping(string => bool) createdRegions; // Change back to string
    mapping(string => bool) createdContinents; // Change back to string
    string[] public regionKeys; // Change to string array
    string[] public continentKeys; // Change to string array

    event DataUpdated(string region, address userAddress);
    event RegionCreated(string region);

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
        regionKeys.push(region); // Store the region directly
        emit DataUpdated(region, userAddress);
    }

    function createContinent(string memory region) external {
        require(!createdContinents[region], "Continent already exists");
        regionData[region] = msg.sender;
        createdContinents[region] = true;
        continentKeys.push(region); // Store the continent directly
        emit RegionCreated(region);
    }

    function signTransaction(
        bytes32 messageHash,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external pure returns (address) {
        return ecrecover(messageHash, v, r, s);
    }

    function getData(string memory region) external view returns (address) {
        return regionData[region];
    }

    function getCreatedRegions() external view returns (string[] memory) {
        return regionKeys; // Return the array of strings
    }

    function getCreatedContinents() external view returns (string[] memory) {
        return continentKeys; // Return the array of strings
    }
}
