// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract MyToken {
    
    // public variables here
    string public nickname = "JAYMAR";
    string public abbrv = "JM";
    uint public supply = 0;

    // mapping variable here
    mapping(address => uint) public blnc;

    // mint function
    function mint(address add, uint val) public {
        supply += val;
        blnc[add] += val;
    }
        
    // burn function
    function burn(address add, uint val) public {
        if(blnc[add] >= val) {
            supply -= val;
            blnc[add] -= val;
        }
    }
}

let TKNS = [];

function mintNFT(nickname, nicknameOfCat, color, birthday) {
    const NFT = { 
        "nickname": nickname,
        "nicknameOfCat": nicknameOfCat,
        "color": color,
        "birthday": birthday,
    };
    TKNS.push(NFT);
    console.log("Minted: " + nickname);
}

function listTKNS() {
    for (let i = 0; i < TKNS.length; i++) {
        console.log("\nID \t\t\t\t" + (i + 1));
        console.log("nickname: \t\t\t" + TKNS[i].nickname);
        console.log("Cat's nickname: \t" + TKNS[i].nicknameOfCat);
        console.log("color: \t\t\t" + TKNS[i].color);
        console.log("Birthday: \t\t" + TKNS[i].birthday);
    }
}

function getTotalSupply() {
    console.log("\nTotal Number Of NFTs Minted: " + TKNS.length);
}

// Minting NFTs
mintNFT("jayem", "jay", "Blue", "10/13/2015");
mintNFT("beng", "Syke", "Yellow", "02/23/2021");
mintNFT("hadwa", "Hatdog", "White", "07/22/2020");
mintNFT("Mawe", "Sam", "Brown", "16/28/2017");
mintNFT("Julia", "pera", "Red", "01/01/2023");

// Listing NFTs
listTKNS();

// Getting total supply
getTotalSupply();
