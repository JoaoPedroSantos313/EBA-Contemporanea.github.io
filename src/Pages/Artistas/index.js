import Abc_filter from '../../Components/abc_filter'
import Card_artist from '../../Components/card_artist';

import './artistas.css';

export default function Artistas(){
    
    const abc_array =["A","B","C","D","E","F","G","H",
                      "I","J","K","L","M","N","O","P",
                      "R","S","T","U","V","W","X","Y","Z"];

    function renderAbc(){
        return abc_array.map(items => {
        return <Abc_filter  letter={items}/> 
        })
    }

    return(
        <>
            <section className='abc_filter'>
                {renderAbc() }
            </section>

            <section className='artistas_main'>
            <div className="row">
               <div className='col-sm'> 
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Alexandre Vogler"
                                 image={'https://www.bambui.ifmg.edu.br/portal_padrao_joomla/joomla/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'}
                    />
                </div> 
                <div className='col-sm'>
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Beatriz Pimenta"
                                 image={'https://www.bambui.ifmg.edu.br/portal_padrao_joomla/joomla/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'}
                    />
                </div>   
                <div className='col-sm'>
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Beatriz Pimenta"
                                 image={'https://www.bambui.ifmg.edu.br/portal_padrao_joomla/joomla/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'}
                    />
                </div> 
            </div>    

            <div className="row">
               <div className='col-sm'> 
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Alexandre Vogler"
                                 image={'https://www.bambui.ifmg.edu.br/portal_padrao_joomla/joomla/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'}
                    />
                </div> 
                <div className='col-sm'>
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Beatriz Pimenta"
                                 image={'https://www.bambui.ifmg.edu.br/portal_padrao_joomla/joomla/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'}
                    />
                </div>   
                <div className='col-sm'>
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Beatriz Pimenta"
                                 image={'https://www.bambui.ifmg.edu.br/portal_padrao_joomla/joomla/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'}
                    />
                </div> 
            </div>  

               <div className="row">
               <div className='col-sm'> 
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Alexandre Vogler"
                                 image={'https://www.bambui.ifmg.edu.br/portal_padrao_joomla/joomla/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'}
                    />
                </div> 
                <div className='col-sm'>
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Beatriz Pimenta"
                                 image={'https://www.bambui.ifmg.edu.br/portal_padrao_joomla/joomla/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'}
                    />
                </div>   
                <div className='col-sm'>
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Beatriz Pimenta"
                                 image={'https://www.bambui.ifmg.edu.br/portal_padrao_joomla/joomla/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'}
                    />
                </div> 
            </div>     
            </section>  
        </>
    ) 
};