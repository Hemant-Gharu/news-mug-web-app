
const Navbar = ({setCategory}) => {
   return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                  <a className="navbar-brand badge" href="/"><span className="badge bg-light text-dark p-2 fs-4">News Mug</span> </a>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <a className="nav-link active" onClick={()=> setCategory("business")} aria-current="page" href="#">Business</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link active" onClick={()=> setCategory("entertainment")} aria-current="page" href="#">Entertainment</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link active" onClick={()=> setCategory("health")} aria-current="page" href="#">Health</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link active" onClick={()=> setCategory("science")}  aria-current="page" href="#">Science</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link active" onClick={()=> setCategory("sports")} aria-current="page" href="#">Sports</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link active" onClick={()=> setCategory("echnology")} aria-current="page" href="#">Technology</a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   )
}

export default Navbar