import React from 'react';
import "../homeGallery/homeGallery.css"
import Image from '../image/Image';
import Video from '../video/Video';

function KingdomGallery() {

    const item1 = "https://previews.dropbox.com/p/thumb/ABZCs4ovEh5SrPu2wu9zdmxA3vsY75sD9s6sv40h2Isc5dlwlNzKYcqz-kZUSIZT4WMDBlfaqnSa5eDCNnv6-8MNPxw5csulncgF4eW_SFk8lJMdXxveW5MwPF_tT0L7c0TxsEfxSTiD_25NI4xRFwA9e0kYokiJpzMatzZpJeYIYoGZtxMUsoAenbbxAAFTpffpRbXRvcdG41cdNXy3LR5L4iQWvHcv67hk99HXLF5ILA8wBZpCOlXNxvETV5u75nEa1viWv3keoQ5gsjNXYZIuZ-YxDYrzsH7-Xq7SNJM9SdpUayShl1ejR4RzdMY-o8rDh5wgYKrUBr9ZpLQgFFiKUEdesx3UZw_Ud1yB-R69Jg/p.jpeg"
    const item2 = "https://previews.dropbox.com/p/thumb/ABbOqwKUCIOMX-4MKZ2ShdcMDl0cDdZidjKLiM-YPpuJXy-B8v99Q3-hVxs0Q24-x6HgwBSGjGCAO_8aWcGpEPgo77Li8-Pgbw5QOIcwyUc9qyohZpO07gH48F5ZsMi3qIMCPEEFIdEByQ9mllvubq2uM6KRe31QIEvwocyKAELFht0K84Pg6nwmMi6CFV-44HBJLnoTJEMMK9GI5uQjEjFOf5cgoIGjkrCY0tn8-K6K_h_1MsM7G9xH0NXDDTWeAkiSiYz9V5GZGRrGM_YXIKX4VwSWPBwKQCOfPS4iFywSPQC77u86CpUY592_UEu1gq1rp6M6YRg59uvMghVKy6nXHyCFggyqxdZa74Cu-T5IJQ/p.jpeg"
    const item3 = "https://previews.dropbox.com/p/thumb/ABbx-N217HzJqAlyuaRFXSc3KN26zGjvg2_-UN8-bmF-W7y0ZK-zcxdJ7c1cKB89LZw-nCV39j1Vq3MemGKbapd9vaTo-YHdwqkb4B9pn3jRyMUhTG9Ekv4i2Eqdwu1Bw8VuIeZ0gbl6bpICKDDKdlCwPWbgGVUHE6ro9KpJaLBJAaw1SdBsYMYKCOof_XACeWnDOFDFa9bJeuOLVGoNLkdI4VFLK8TXhRAw-mGYJrO9JDm0XMdVQIwkRnW236Md4Ra0sstI8-wy5FUsCFg1Q_lRq3oBU_-hvKzJX3QnolZXs2PsgYmoZq7gLKLpbukViPkQdpsvI13nFabFaP_ZRKHvZEX_euGplnMEHh8DV9uLUQ/p.jpeg"
    const item4 = "https://previews.dropbox.com/p/thumb/ABbRevbcGa7ZG1yv6vdIAvDrYRfH0qNNQtkOTvQ8C3BhTJG27OMWN7IhF8Hby_p_wTUD-3g6sL6-DqubL356GPb7yoLuv2z4HAnDAoA-Wf8v4CwO2BAVQ3l3xRooShURmqi-4KYfMmrgmnf4hu4vDQuqmKl9CytWK6At1YNsIS6HFRyTdRb_zacsacpcndr2mHyu1Ur3-EpYawiIaoXP2ge4nUxzjyZcsgLPWpg7U9QTLA2OSvjxljkdZuK96GaqV9CewOaNJU0ppmMrtlISHfILhjroEn_KSu-YXNPJLWS7o2VXO-99Z5MpMWfyrg6wyApnlnx71yhBd_JWmnoqPA6Oo0C9JIwMTnEA5_ujl5Jl1g/p.jpeg"
    const item5 = "https://previews.dropbox.com/p/thumb/ABYVxqX02Jc5ljYSIQIMFP6QH2tHuMHH7gBsJ38RMIr0NlPCAjrQI_YWZGn-7Z1svAB4ICtVYoKXwktqQ4ikYX5bwopcV0d_AzdOFqJQQl1_7iiPWw9hISfk_mqIMXgppXdAdNEKrXrrjDTzkZkSdfIK1LiDF4S1U_9h8feQHh8D1ixoFzdmnuEkLPjq3X-JjS92hiuPRvgGUAKZuoeYAG9RbmQctbBA7SmzJ3rI4ivZ_P7_EVQ0Rrdmuq5wkFz_Pf1-ghpLJxY7KEO_QPqr0fFngNtNrY4XsnRpubvG6GCoHprKldueY1G79G7eRkBX-FhDWDv1SJILfnkMmpx-pZSSbtGRvXrIvn3iR4Xe0Wr8kw/p.jpeg"
    const item6 = "https://previews.dropbox.com/p/thumb/ABbSrGu6eirERQA0wwrExkT2ASCH2gIh7xuzaFgp8t2RcNYt3jfmzacGAha82Y0Sbcq98DfvMLLyE53CBVpnKqFTKZg4g2n2NUpMxVgj3M_7a5FuVTunfx2i5dnlIL5Ak7_wRbzlDtffdboX7RjtOFa8ne-B4_0OUQoOI_60O_2Y5aKJMc7OHv9Z0MNs4IqQnLERIWqnEezztDnHYRnKxvLmm8HrVuQIbgq_7qDm9ceqBAdmoS38jJoMkl22XmEnlS7eIkPemeu0sEvnjLA73eh7OB6KqWnHfVaO8Bc8kpmkFMhl5a51Yi4CtpQiD2NtiMlL399_d_INYUheiXyntKv8WfpAiG-llQvq7cR9ItrCTA/p.jpeg"
    const item7 = "https://previews.dropbox.com/p/thumb/ABagq0xsnXL0ixxowM_jfct0Z2yTuwH_SflfaOQh6hvBKvAmW3q6XaRirkcTpJXNsRK8uJaaUXoDRq1e54JK9wakPwzOKcbgJDIDQAknngNx8WpZbvJ5_7jxarJucc_qjuD1-PjJzcz3x2LbnD8xM5WtoBvFqf3GWnGAv3c2CxYCyRtQaj1HS_Fow_ZCcww7Wc5eJGPG4V51zsap6B6YA-hi06naOdfnHTgM3BMqh09a1rrCMa4IRkW0ETKpTgXMpXDhdKoqt1CXDJX8kpyjLb-wJdKXU_-mIdznqRAo-SiPsV2UB6mCUCtSrneakDcAzsxY_s5372RkmC-Xui14Oadu_xVFp2GXjbxTkTWK_aqyNQ/p.jpeg"
    return (
        <div class="container k-container">
            <div className='flex-banner'><Image image={item1} imageWidth="100%"></Image></div>
            <div className='flex-item'><Image image={item2} imageWidth="100%"></Image></div>
            <div className='flex-item quote'>"What Riches Are Worth So Much Misery, And The Deaths Of Honorable Men And Women?"</div>
            <div className='flex-banner'><Image image={item3} imageWidth="100%"></Image></div>
            <div className='flex-item'><Image image={item4} imageWidth="100%"></Image></div>
            <div className='flex-item'><Image image={item5} imageWidth="100%"></Image></div>
            <div className='flex-banner'><Image image={item6} imageWidth="100%"></Image></div>
            <div className='flex-margin quote'>"If Your Hell Is Real, I'm Glad You'll Get To See It"</div>
            <div className='flex-center'><Image image={item7} imageWidth='100%' ></Image></div>
            <div className='flex-margin quote'></div>




        </div>
        );
}

export default KingdomGallery;
