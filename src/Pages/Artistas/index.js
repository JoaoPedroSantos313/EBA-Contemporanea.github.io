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
                                 image={'https://static.wixstatic.com/media/8b4bc0_f799a1879db44a80aa49eef8368c141b~mv2.jpg'}
                    />
                </div> 
                <div className='col-sm'>
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Antonio Gonzaga Amador"
                                 image={'ANTONIO_AMADOR_OBRA2.png'}
                    />
                </div>   
                <div className='col-sm'>
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Alexandre Sá"
                                 image={'https://static.wixstatic.com/media/8b4bc0_3c8b995516ae477f84e931065c7d754c~mv2.png'}
                    />
                </div> 
            </div>    

            <div className="row">
               <div className='col-sm'> 
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Alvaro Seixas"
                                 image={'https://static.wixstatic.com/media/8b4bc0_3c8b995516ae477f84e931065c7d754c~mv2.png'}
                    />
                </div> 
                <div className='col-sm'>
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Ana Holck"
                                 image={'https://static.wixstatic.com/media/8b4bc0_3c8b995516ae477f84e931065c7d754c~mv2.png'}
                    />
                </div>   
                <div className='col-sm'>
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Analu Cunha"
                                 image={'https://static.wixstatic.com/media/8b4bc0_3c8b995516ae477f84e931065c7d754c~mv2.png'}
                    />
                </div> 
            </div>  

            <div className="row">
               <div className='col-sm'> 
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Angelo Venosa"
                                 image={'https://static.wixstatic.com/media/8b4bc0_3c8b995516ae477f84e931065c7d754c~mv2.png'}
                    />
                </div> 
                <div className='col-sm'>
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Beatriz Pimenta"
                                 image={'https://static.wixstatic.com/media/8b4bc0_3c8b995516ae477f84e931065c7d754c~mv2.png'}
                    />
                </div>   
                <div className='col-sm'>
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "bruno Miguel"
                                 image={'https://static.wixstatic.com/media/8b4bc0_3c8b995516ae477f84e931065c7d754c~mv2.png'}
                    />
                </div> 
                
            </div>     

            <div className="row">
               <div className='col-sm'> 
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Carlos Contente"
                                 image={'https://static.wixstatic.com/media/8b4bc0_3c8b995516ae477f84e931065c7d754c~mv2.png'}
                    />
                </div> 
                <div className='col-sm'>
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Carolina Ponte"
                                 image={'https://static.wixstatic.com/media/8b4bc0_3c8b995516ae477f84e931065c7d754c~mv2.png'}
                    />
                </div>   
                <div className='col-sm'>
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Carolina Ponte"
                                 image={'https://static.wixstatic.com/media/8b4bc0_3c8b995516ae477f84e931065c7d754c~mv2.png'}
                    />
                </div> 
                
            </div>   

            
            </section>  
        </>
    ) 
};