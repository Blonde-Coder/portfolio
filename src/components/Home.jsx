import  search  from  "../assets/icon/search.png"
import About from "./About";

function Home() {
  return (
    <div className="homePage">
      <button className="searchBox"> 
      <img className="search " src={search} alt="search"/>
      <input className=" input " type="text" placeholder="Type here..." />
      </button>
      <div className="aDiv"> 
       <a href="About"> NAME</a>
       <a href="About"> AGE</a>
       <a href="About">EDUCATION</a>
       <a href="About">TITLE</a>
       <a href="About">PROFESSION</a>
       <a href="About">IMAGES</a>
       <a href="About">VIDEOS</a>
      </div>
      
        </div>
  );
}

export default Home;