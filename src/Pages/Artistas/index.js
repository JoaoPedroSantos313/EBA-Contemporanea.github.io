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
                                 title= "Agrippina R. Manhattan"
                                 image={'AGRIPPINA_R_MANHATTAN_PIC2.png'}
                    />
                </div> 
                <div className='col-sm'>
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Alexandre Vogler"
                                 image={'ALEXANDRE_VOGLER_PIC2.png'}
                    />
                </div>   
                <div className='col-sm'>
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Ana Holck"
                                 image={'ANA_HOLCK_PIC.png'}
                    />
                </div> 
            </div>    

            <div className="row">
               <div className='col-sm'> 
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Andréa Hygino"
                                 image={'ANDREA_HYGNO_PIC2.png'}
                    />
                </div> 
                <div className='col-sm'>
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Angélica Dass"
                                 image={'ANGELICA_DASS_PIC.png'}
                    />
                </div>   
                <div className='col-sm'>
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Antonio Amador"
                                 image={'ANTONIO_AMADOR_PIC2.png'}
                    />
                </div> 
            </div>  

            <div className="row">
               <div className='col-sm'> 
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Beatriz Pimenta"
                                 image={'BEATRIZ_PIMENTA_PIC2.png'}
                    />
                </div> 
                <div className='col-sm'>
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Guga Ferraz_____"
                                 image={'GUGA_FERRAZ_PIC2.png'}
                    />
                </div>   
                <div className='col-sm'>
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Marcos Cardoso"
                                 image={'MARCOS_CARDOSO_PIC2.png'}
                    />
                </div> 
                
            </div>     

            <div className="row">
               <div className='col-sm'> 
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Mery Horta______"
                                 image={'MERY_HORTA_PIC2.png'}
                    />
                </div> 
                <div className='col-sm'>
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Panmela Castro"
                                 image={'PANMELA_CASTRO_PIC2.png'}
                    />
                </div>   
                <div className='col-sm'>
                    <Card_artist icon={'icon_pasta.png'}
                                 title= "Paula Scamparini"
                                 image={'PAULA_SCAMPARINI_PIC2.png'}
                    />
                </div> 
                
            </div>   

            
            </section>  
        </>
    ) 
};