export default function CountriesListShimmer(){

    const dataArray = Array.from({length:10}).map((e,i)=>(
         <div key={i}  className="country-card" style={{height:'350px',backgroundColor:'rgb(102, 102, 102)'}}>  
            <div style={{height: '180px',backgroundColor: 'rgb(176 176 176 / 55%)'}}></div>
            <div style={{ height: "35px",backgroundColor: 'rgb(176 176 176 / 55%)',marginBlock: '13px',width:'89%',marginInline: 'auto'}}></div>
            <div style={{ height: "20px",backgroundColor: 'rgb(176 176 176 / 55%)',marginTop:'24px',marginBlock: '9px',width:'89%',marginInline: 'auto'}}></div>
            <div style={{ height: "20px",backgroundColor: 'rgb(176 176 176 / 55%)',marginBlock: '9px',width:'89%',marginInline: 'auto'}}></div>
            <div style={{ height: "20px",backgroundColor: 'rgb(176 176 176 / 55%)',marginBlock: '9px',width:'89%',marginInline: 'auto'}}></div>
         </div>
        ))

    return(
        <>
            <div className="countries-container"> 
                {dataArray}
            </div>
        </>
    )
}