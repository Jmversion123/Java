const TKNS = []

function mintNFT (nickname, nicknameOfCat, color, birthday) {
    const NFT = { 
        "nickname":  nickname,
        "nicknameOfCat": nicknameOfCat,
        "color": color,
        "birthday": birthday,
    }
    TKNS.push (NFT);
    console.log ("Minted: " + nickname);
}


function listTKNS() {
    for (let i = 0; i < TKNS.length; i++) {
        console.log("\nID \t\t\t\t" + (i + i));
        console.log("\nnickname: \t\t\t" + TKNS[i].nickname);
        console.log("Cat's nickname: \t" + TKNS[i].nicknameOfCat);
        console.log("color: \t\t\t" + TKNS[i].color);
        console.log("Birthday: \t\t" + TKNS[i].birthday);
    }

}


function getTotalSupply () {
    console.log("\nTotal Number Of NFTs Minted: " + TKNS.length)

}

mintNFT ("Jay", "Shu", "Blue", "10/14/2018");
mintNFT ("Mar", "Gar", "Brown", "02/14/2020");
mintNFT ("Mac", "Dad", "Brown", "05/22/2021");
mintNFT ("Alalad", "Dyy", "Yellow", "10/28/2017");
mintNFT ("Julia", "Bius", "Blacl", "01/01/2023");
listTKNS ();
getTotalSupply
