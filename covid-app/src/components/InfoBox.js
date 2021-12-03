

const InfoBox=(props)=>
{
    console.log("in app info",props.data)
 return <>
 <div className="info-box">
           <div className="data-box country">Country:{props.data.country}</div>
           <div className="data-box total">Confirmed: {props.data.confirmed}</div>
           <div className="data-box recovered">Recovered: {props.data.recovered}</div>
           <div className="data-box critical">Critical: {props.data.critical}</div>
           <div className="data-box deaths">Deaths: {props.data.deaths}</div>
       </div>
 </>
}
export default InfoBox;
