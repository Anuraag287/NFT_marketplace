import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

function NFTTile (data) {
    const newTo = {
        pathname:"/nftPage/"+data.data.tokenId
    }
    return (
        <Link to={newTo}>
        <div className="max-w-2xl mx-auto py-8  sm:px-6 lg:max-w-7xl">
            <img src={data.data.image} alt="" className="w-72 h-80 rounded-full" />
            <div className= "text-white bg-black">
                <strong className="text-xl">{data.data.name}</strong>
                <p className="display-inline">
                    {data.data.description}
                </p>
            </div>
        </div>
        </Link>
    )
}

export default NFTTile;
