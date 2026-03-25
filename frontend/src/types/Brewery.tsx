import React from "react";

export interface Brewery {
    id: string;
    name: string;
    brewery_type?: string;
    address?: string;
    url?: string;
}


// export default function Brewery({
//     name,
//     type,
//     address,
//     url
// }: Brewery) {
    
//     return (
//         <div className="flex p-3 border w-100 badge badge-info">
//             <div className="row text-xl">
//                 Name: {name}
//             </div>
//             <div className="row">
//                 Type: {type}
//             </div>
//             <div className="row">
//                 Address: {address}
//             </div>
//             <div className="row">
//                 Url: {url}
//             </div>
//         </div>
//     );
// }

// export default function Brewery(brewery: Brewery) {
//     return (
//         <div className="p-4 m-3 border border-green">
//             <div className="flex">

//                 <div className="row">
//                     <div>Name:</div>
//                     <div>brewery.name</div>
//                 </div>
                
//                 <div className="row">
//                     <div>Type:</div>
//                     <div>brewery.type</div>
//                 </div>

//             </div>
//         </div>
//     );
// }