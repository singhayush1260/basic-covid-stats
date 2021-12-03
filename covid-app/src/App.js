import logo from './logo.svg';
import './App.css';
import InfoBox from './components/InfoBox';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import { useState } from 'react';
function App() 
{
  const[covidData,setCovidData]=useState({});
  const[dataFound,setDataFound]=useState(false);
  const[isLoaded,setIsLoaded]=useState(true);
  const receiveCountryName=(country)=>
  {
    if(country=="")
    {
    alert("Please enter country first");
    return;
  }
  console.log("in app",country);
  fetch(`https://covid-19-data.p.rapidapi.com/country?name=${country}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "10ed0c57femsh52d5912947d687dp192a50jsna2aadfa5de20"
	}
})
.then(response => {
    
	console.log(response);
    return response.json();
}).then(data=>{
    console.log(data);
    if(data.length==0)
    {
      console.log("no data found")
      setDataFound(false);
  }
    else
    {
    setCovidData(data[0]);
    setDataFound(true);
    setIsLoaded(false);
  }
})
  }
  let altHTML;
  if(!dataFound)
  {
    altHTML=<p className="alt-text">No data Found.</p>;
  }
  if(isLoaded)
  {
    altHTML="";
  }
return (
    <>
    <div className="container">
      <Header/>
      <SearchBox transferCountryName={receiveCountryName}/>
      {altHTML}
      {dataFound&&<InfoBox data={covidData}/>} 
    </div>
    </>
  );
}

export default App;
