const Block = require ("./block");

//onst block = new Block("time","hash1","hash2","mydata");


//console.log(block.genesis().toString());

const testBlock = Block.mineBlock(Block.genesis(),"test");
console.log(testBlock.toString());