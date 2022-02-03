import React from 'react';
import "../homeGallery/homeGallery.css"
import Image from '../image/Image';
import Video from '../video/Video';
import Footer from '../footer/Footer';

import midgardLogo from '../../images/kingdom/midgard.png'
import kingdom1 from '../../images/kingdom/kingdom1.jfif'
function KingdomGallery() {

    return (
        <div class="container k-container">
            <div className='flex-banner heading'>From towering ice mountains, to quiet flowing rivers, Kingdom&Beyond explores age-old nations and mythical worlds set in the video game Assassin’s Creed: Valhalla created by Ubisoft Montreal. Valhalla takes place in the Viking Age [793–1066 AD] and chronicles the journey of Eivor, an orphaned Norsemen coming to terms with their own prophetic destiny.</div>
            <div className='flex-item'>PHOTOGRAPHY<br></br>SHUJAAT SYED</div>
            <div className='flex-item'>WORDMARK/LETTERING<br></br>RILEY MCCLIMOND</div>
            <div className='flex-banner'><Image image={midgardLogo} imageWidth="100%"></Image></div>
            <div className='flex-item'>Assassin's Creed Valhalla presents a massive digital recreation of a by-gone 9th-century rendition of England. Three large cities, dozens of smaller (but still impressive counties), and that’s just in the Anglo-Saxon virtual rendition of England. The game also isn’t afraid to go beyond this into more surprising nations. Yet, my biggest take-away from this, is that despite this ludicrous scope, it still feels handcrafted by a large extent. <br></br><br></br> The ancient Anglo-Saxon virtual rendition of England is divided into 4 different kingdoms; East Anglia, Wessex, Mercia, and Northumbria each overseen by its crowned ruler. It’s not always easy to notice when you cross through these invisible borders but the topology, weather, and vegetation will slowly start shifting into something different. Each kingdom is vast — Merica holds anything from foggy swamps to quaint green hillsides. As you control Eivor and follow their story of birthrights and prophecies you become accustomed to landscapes on display, most importantly the traversal isn’t an empty-feeling experience.</div>
            <div className='flex-item'>This intricate, lush world serves as a backdrop for moments of real engagement to take place. The series previous entries, Origins, and Odyssey largely didn’t attempt this. Yet, the world in Valhalla was generated with the act of discovery in mind. Abandoned houses and structures will require you to pay more attention as getting into them isn't as simple as walking through the front door. Locked doors, blocked passageways, and secret entrances are commonplace, you will have to be a little more engaged with how you pick up your special treasures. <br></br><br></br> Valhalla is an enigmatic game. There's a real effort made to keep things hidden, just waiting for the player to come across it. This is where the hand-crafted nature of Valhalla’s world comes into focus. While the total landmass across it’s many locations is roughly 140km², the generous sprinkling of bespoke interactions make this a far more engaging open-world romp than what the series has ever done. It captures the mundane, and makes it beautiful — it keeps surprising you. </div>
            <div className='flex-banner'><Image image={kingdom1} imageWidth='100%'></Image></div>
        </div>

        );
}

export default KingdomGallery;
