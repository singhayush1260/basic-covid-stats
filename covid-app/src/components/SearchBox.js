
const SearchBox=(props)=>
{
    const passCountryName=(e)=>
    {
     e.preventDefault();
     let country=e.target.country.value;
     console.log(country);
     props.transferCountryName(country);
     e.target.country.value="";
    }
 return <>
 <div className="search-cont">
           <form  className="form-group" onSubmit={passCountryName}>
            <input type="text" className="country-name" name="country" placeholder="Search country" required="" />
            <button className="btn" type="submit">Search</button>
           </form>
       </div>
 </>
}
export default SearchBox;