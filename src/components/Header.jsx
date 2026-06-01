import  menu from  "../assets/icon/menu.png"


export default function Header() {
  return (
    <header className="header">
      <div className=" header-flex">
        <div className=" first-header-div">
<p className="me">Olayinka Christianah Olabisi</p>
        </div>
      <div className="second-header-div">
        <button className="header-b"> Home</button>
       <button className="header-b"> About</button>
        <button className="header-b">Service</button>
       <button className="header-b">Skills</button>
        <button className="header-b">Blog</button>
        
</div>
<img className="menu" src={menu} alt="my image"/>
</div>
    </header>
  );
}