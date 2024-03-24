// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract IpcRegional {
    address public parentRoot;
    string public parentSubnetId;
    mapping(string => address) regionData; // Change mapping value type to address

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

    function setData(string memory region, address userAddress) external onlyParent {
        regionData[region] = userAddress;
        emit DataUpdated(region, userAddress);
    }

    function createRegion(string memory region) external {
        require(regionData[region] == address(0), "Region already exists");
        regionData[region] = msg.sender;
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
}
