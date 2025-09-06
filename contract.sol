pragma solidity ^0.8.0;

contract WaterResource {
    struct WaterUsage {
        address user;
        uint256 amount;
        uint256 timestamp;
    }

    WaterUsage[] public usages;

    function recordUsage(uint256 _amount) public {
        usages.push(WaterUsage(msg.sender, _amount, block.timestamp));
    }

    function getUsages() public view returns (WaterUsage[] memory) {
        return usages;
    }
}