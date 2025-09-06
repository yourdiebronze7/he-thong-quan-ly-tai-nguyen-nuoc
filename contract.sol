pragma solidity ^0.8.20;

contract WaterResource {
    struct WaterUsage {
        address user;
        uint256 waterAmount;
        uint256 timestamp;
    }

    WaterUsage[] public usages;
    event WaterUsageRecorded(address indexed user, uint256 waterAmount, uint256 timestamp);

    function recordUsage(uint256 _waterAmount) public {
        usages.push(WaterUsage(msg.sender, _waterAmount, block.timestamp));
        emit WaterUsageRecorded(msg.sender, _waterAmount, block.timestamp);
    }

    function getUsages() public view returns (WaterUsage[] memory) {
        return usages;
    }
}