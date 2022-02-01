import React from 'react';
import "./kingdomHeader.css"
function KingdomHeader() {
    return (
        <div className='kh'>
            <div className="kh-leftside">
                <p id="navDesc"></p>
                <img id="kh-icon" src='https://previews.dropbox.com/p/thumb/ABbhrwIIxUHhXXH5wgWRHRYtawxssIiIFGmkDiD5yyLJIFThz1UAyHESntMZfaOSBOQsYnRzeV3AHnJ7QWvBL5F0lC7gXtoijKjybbals7OQpfjAxrcP08wNDzEwb8XG84l3dwXSypKPTcaV448UnbFMZ3ML6mB3CRz5dg4Od5ORDjVoKxRIC-kzlvGaPod08eHLjIPGRVzLG2ej71CIAzJ66fsXx-pbZJdvnGWJoSia_L0C3um6w66QxY0U9cQoy22eA_5URbj1s9XbTYa7ROkyFYYK2iz256vn2Vy-MY0cs7kfxO0mO6UwLB2zzvaAz7IFNh4e1a1sm7gsQ7v6eX9XqxcTvzHx0T5ws7EEt4XKDA/p.png'></img>
            </div>
            <div className="kh-rightside">
                <h1 className='kh-beyond'>&Beyond</h1>
            </div>
            <div className='kh-mobile'>
                <img id="kh-icon-mobile"  src='https://previews.dropbox.com/p/thumb/ABbhrwIIxUHhXXH5wgWRHRYtawxssIiIFGmkDiD5yyLJIFThz1UAyHESntMZfaOSBOQsYnRzeV3AHnJ7QWvBL5F0lC7gXtoijKjybbals7OQpfjAxrcP08wNDzEwb8XG84l3dwXSypKPTcaV448UnbFMZ3ML6mB3CRz5dg4Od5ORDjVoKxRIC-kzlvGaPod08eHLjIPGRVzLG2ej71CIAzJ66fsXx-pbZJdvnGWJoSia_L0C3um6w66QxY0U9cQoy22eA_5URbj1s9XbTYa7ROkyFYYK2iz256vn2Vy-MY0cs7kfxO0mO6UwLB2zzvaAz7IFNh4e1a1sm7gsQ7v6eX9XqxcTvzHx0T5ws7EEt4XKDA/p.png'></img>
                <h1 className='kh-beyond-mobile'>&Beyond</h1>
            </div>
        </div>
    );
}

export default KingdomHeader;
