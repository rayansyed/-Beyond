import React from 'react';
import "./homeGallery.css"
import Image from '../image/Image';
import Video from '../video/Video';
import { homeImages } from '../../homeImages';

function HomeGallery() {
    const item1 = "https://www.dropbox.com/s/thd1311x9a2nk52/redvsyellow_comp.mp4?dl=0"
    const desc1 = "👺 JIN SAKAI\n🎮 GHOST OF TSUSHIMA"

    const item2="https://previews.dropbox.com/p/thumb/ABagq0xsnXL0ixxowM_jfct0Z2yTuwH_SflfaOQh6hvBKvAmW3q6XaRirkcTpJXNsRK8uJaaUXoDRq1e54JK9wakPwzOKcbgJDIDQAknngNx8WpZbvJ5_7jxarJucc_qjuD1-PjJzcz3x2LbnD8xM5WtoBvFqf3GWnGAv3c2CxYCyRtQaj1HS_Fow_ZCcww7Wc5eJGPG4V51zsap6B6YA-hi06naOdfnHTgM3BMqh09a1rrCMa4IRkW0ETKpTgXMpXDhdKoqt1CXDJX8kpyjLb-wJdKXU_-mIdznqRAo-SiPsV2UB6mCUCtSrneakDcAzsxY_s5372RkmC-Xui14Oadu_xVFp2GXjbxTkTWK_aqyNQ/p.jpeg"
    const desc2="🧔‍♂‍ EIVOR\n🎮 ASSASSIN'S CREED VALHALLA"

    const item3 = "https://previews.dropbox.com/p/thumb/ABYZWZ5AO3fnIdoiw6InCPuTNk5cZMJYDlUchTpgKeGAZVybUQ0Bm2jFQ7paY4FpU7vlitAWdDZXkzOPTpxbNun_brmEkHvdzRtMSWIt364erDKKoqQ7fMFFUbe92muvMRi_EyIyYPx_AG_yY7U1eT22CvAzTPqkP3rzQe4QYTWuYHni1pvqWwWtp8WfDl2ot4B2SBXFgJempzptfeFrGi7jh1Ihxz-8zEus1L3s4sN4dlQ1DS3eGQZ7Uk3rdUsqnb9D5RfSbsbo-szMwGVftR7sIrzqf64SgIfphHXq328FGdR-zxfouTQBY7xyfiPAfr7UkaHGcLk31_QvGtXixPw6OYt0kkwgrk8-zuv3QUgfDg/p.jpeg"
    const desc3="👨 YAGAMI 桐生 一馬\n🎮 JUDEMENT"

    const item4 = "https://previews.dropbox.com/p/thumb/ABaGJ4E8uVUB9yiC3Z6rFxyAog5KzGtNeKAREtJLnKtwkpNX3YmaglOFEw3VodSFu6cKglRPMDYaJmhFhxOveuzjYwgwXTqEz9nxpbu95pybn2nPgreaSbxNmfL71dK9SNeQ4l8r9nTrt12B2i5tfO6iFUBu6u2A_LWbDl7sHPVgUmqotEpfc9adlWHCtdDuZQL1aUf9_eabtZFmG_vrNPeuz6Z-5LLsy-NWD4-PgrwKnFe9ZbRe9WasrYDgDkhCI-E87XjDbh8dOHeg_IkWJXzWj9FHbW1DhaL5ea_Bhw2URNYJddtWKvHHpRnOK9lsJD0OXatqlNReEGqVQ__NmQwYU1pa4d-pZeQUXcZgev8Xvw/p.jpeg"
    const desc4="👺 JIN SAKAI\n🎮 GHOST OF TSUSHIMA"
    
    const item8 = "https://previews.dropbox.com/p/thumb/ABb4Dzao7dVYG9qR-lBLicezNbjoHtxk9L4ajat2teJngzHh9R5JQh0jWm82-WqICjb6u_qnN3hg7hCo9BDrVZMFYaAaFH7qNi3b_BjQFv_dXUlSLCiVtL6IR0Mo-H8fczURPvQOOgJj74u2luEjBsutDIZdtUiNsKa2zOKm57x3HQ0Tzh9CAJX7Fz34RRVa7oHHxLw3ZR7jtn0AHZ_8q2za6NrljKm6h9zd99h-B7x7_VCSl49m0L76uCJBy95nvYitpd4_193NoZ-T18KjM_7SKBxvVAq5cgB2yojUQbcgLBBsB7SGdgvAtSdkrNYnZ10IdFDDY716kX5f8Qzkv_QJn1IXYB0GgR7p-TPvuhGalo6MI3RV8UOj2_W4AfYE7Qm0_uyXui_vDPc84tNWPFe-5M-Nu1lmTXG8wWStjkjUDg/p.png"
    const desc8 = "🤖 TAKEMURA\n🎮 CYBERPUNK 77"
    
    const kingdomIcon = "https://previews.dropbox.com/p/thumb/ABbhrwIIxUHhXXH5wgWRHRYtawxssIiIFGmkDiD5yyLJIFThz1UAyHESntMZfaOSBOQsYnRzeV3AHnJ7QWvBL5F0lC7gXtoijKjybbals7OQpfjAxrcP08wNDzEwb8XG84l3dwXSypKPTcaV448UnbFMZ3ML6mB3CRz5dg4Od5ORDjVoKxRIC-kzlvGaPod08eHLjIPGRVzLG2ej71CIAzJ66fsXx-pbZJdvnGWJoSia_L0C3um6w66QxY0U9cQoy22eA_5URbj1s9XbTYa7ROkyFYYK2iz256vn2Vy-MY0cs7kfxO0mO6UwLB2zzvaAz7IFNh4e1a1sm7gsQ7v6eX9XqxcTvzHx0T5ws7EEt4XKDA/p.png"
    const tsushimaIcon = "https://previews.dropbox.com/p/thumb/ABakBEhEmtWmapU_m6onyF0IbkwXWxAYSRXsikt4rIBk5T6NrDBq33x9cK-isBtsb3fnRryqCWtRQqaRjp2BGG6w44lKJxkG5RoWj0RRm9RuNCOdS1k_dVA0euzOUjviRqguAQmqjY2Dyn9Q4CvnUa2-raARL80eEOHxvq8qshn_Ys-71Tn7oCzPqBjogddO-SSvI2AvgxnZoNpqfxEEBvqGzhIpwT65CXuKg4BCGt1TS0CaFlEoqx99gKMQkEKvf71qJlcU-aTLRoCBWGR9fijRnYiqG9ZJAxf5vgAAhQA2eZOYpfXZccCO6TDaZamC0xniaB_iCDA0Q-5yK09ZZoiW7BZaEUIIhXS-HERlGcjVhw/p.png"
    const cyberpunkIcon = "https://previews.dropbox.com/p/thumb/ABYjvs1HM8bkzgt_ZX_eYxDjtXV7xOPi1ZJ0D5zsaNwm5o5u7UN12wZbC7-k5jS2hgEZbSqzBq0clufopXj_nHU61gJWKPdvG71YdTa2eIjkGZbCVew76peW9h9FnCMx9ntIHOQzsAPTdwCTyfy_ZNCMYoPZz5V_u6eydEo9PeNdydb-j23dSpjY9ybFUsBjUbUhHHUiYc4rveSBDBtTHKXN23mjJlX0bi5qWfA_GVi-33FE9F3at2J7V_u9UjISnFzJnqhz8AFTNDRnofRu_psQSiBbooDLv_BwP27hA13k_-b5KHAZ1hJzCi5Wj3nVcjB9r5rUABS5bTLIsyR4c-w64K-iE4z6JdmUbSRExcxQBg/p.png"
    const yakuzaIcon ="https://previews.dropbox.com/p/thumb/ABY1FIzXjg6Wk74kOUCovJuR59yM1__LMSg8_hYtbpW9AZCiHpyKqmplBmDNnVoF-lTcZeszIwm1jxCWuozrcBmQuhP_vdzFzD0ejgM6mrAr7ZUV8YS9k7Rat634NasyygQiHXRRWcbgQdaP9zdHlrAcul8rzNVciXQYepPf2LXgWrmtMmSpF0o1BldVpMLNPyxNd6sbRAe-Dg-WW5KoEq03UdKmCCfqnFE2trq9fAdgaGcUfkexhPoIACZo_lRzqwRmg6zGnbCaoRNCu47Vvb5kKS3P_IF_81MxNCB27FKCy-IxPe8s_nXe7Om3Tlo8cjNqRWLP0tmkyjcQES7aCHQwoeQXshpBhUQXV8BYxKWPHw/p.png"
    return (
        <div class="container">
            <div className="flex-banner"><Video videoURL={item1} desc={desc1} icon={tsushimaIcon} imageWidth="100%"/></div>
            <div className="flex-item"><Image image={item2} desc={desc2} icon={kingdomIcon} imageWidth="100%"/></div>
            <div className="flex-item"><Image image={item3} desc={desc3} icon={yakuzaIcon} imageWidth="100%"/></div>
            <div className='flex-margin'></div>
            <div className="flex-center"><Image image={item4} desc={desc4} icon={tsushimaIcon} imageWidth="100%"/></div>
            <div className='flex-mragin'></div> 
            <div className="flex-banner"><Image image={item8} desc={desc8} icon={cyberpunkIcon} imageWidth="100%"/></div> 

            {/* {homeImages.map((item) =>(
                <div className={item.type}><Image image={item.img} desc={item.desc} icon={item.icon} iconWidth={item.iconWidth}/></div>
            ))} */}
        </div>
        );
}

export default HomeGallery;
