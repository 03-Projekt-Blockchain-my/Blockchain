const Block = require ("./block");
const Blockchain = require("./blockchain");
//const block = new Block("time","hash1","hash2","mydata");


//console.log(block.genesis().toString());
// const testBlock = Block.mineBlock(Block.genesis(),"test");
// console.log(testBlock.toString());

// 1. + 2. Block

const chain = new Blockchain();


// 2. Block
chain.addBlock("100€ an boo, 50$ von foo");


// +3.Block

chain.addBlock("50€ von boo");

// +4. Block

chain.addBlock("Bank an Kasse");
console.log(chain);