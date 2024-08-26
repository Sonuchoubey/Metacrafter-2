
const NFTS = []

function mintNFT( linkedinUsername, connections, articles, posts, endorsements , profileViews, searchAppearances ){
    const NFT = {
        linkedinUser: linkedinUsername,
        connections: connections,
        articles: articles,
        posts: posts,
        endorsements: endorsements,
        profileViews: profileViews,
        searchAppearances: searchAppearances,
       
        
    }
    console.log("Minted: " + linkedinUsername)
    NFTS.push(NFT);
}


function listNFTS(){
    for(let i = 0; i < NFTS.length; i++){
        console.table(NFTS[i])
    }
}

function getTotalSupply(){
    console.log("Total NFT's: " + NFTS.length)
}

mintNFT("SonuChoubey", 936, 54, 26, 25,23 ,29);
mintNFT("Pramodkumar", 625, 59, 33, 42, 56 ,58);
mintNFT("dharamsahaaran", 923, 89, 66, 17, 56 ,89 );
mintNFT("neelanshi", 1936, 54, 56, 35 ,58 ,25);
mintNFT("ravinakaif", 895, 89, 63, 22, 56 ,14);
mintNFT("priyakumari", 2563, 79, 86, 47 ,89 ,56);

listNFTS();
getTotalSupply()
