// Create an array to hold the NFTs
const NFTs = [0];

// This function will create an NFT object using the parameters passed
// and store it in the NFTs array.
function createNFT(_carBrand, _carModel, _carYear, _carColor) {
     // Create an NFT object with the given metadata
    const NFT = {
        carBrand: _carBrand,
        carModel: _carModel,
        carYear: _carYear,
        carColor: _carColor,
    };

    // Add the NFT object to the NFTs array
    NFTs.push(NFT);
}

// This function will go through the NFTs array and print each NFT's metadata
function displayNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("\nID: " + (i + 1));
        console.log("car Brand: " + NFTs[i].carBrand);
        console.log("car Model: " + NFTs[i].carModel);
        console.log("car Year: " + NFTs[i].carYear);
        console.log("car Color: " + NFTs[i].carColor);
    }
}

function getTotalSupply() {
    return NFTs.length;
}

// Call our functions to test them
createNFT("Toyata", "Fortuner", "2015", "Black");
createNFT("Mercedes-Benz Maybach", "S-Class", "2022", "Blue");
createNFT("Tesla", "3", "2023", "Red");

displayNFTs();
console.log("\nTotal number of NFTs minted: " + getTotalSupply());
