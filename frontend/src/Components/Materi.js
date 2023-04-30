import DATASCIENTIS from '../assets/DATASCIENTIS.png';
import LARAVEL from '../assets/LARAVEL.png';
import DataScientist from './events/DataScientist.js';
import Laravel from './events/Laravel.js';
const Materi = ()=>{
    return(
        <section id="materi">
        <div className="container">
          <div className="section-title">
            <h2>Materi yang ada Di Filing 2022</h2>
          </div>
          <div className="row">
            <div className="section-headers">
            </div>
            <div className="col-lg-6 col-md-6 ml-3">
              <div className="speaker"> <a href="./event/DataScientist.js">
                <img src={DATASCIENTIS} alt="Speaker 1" className="img-fluid"/></a>
                <div className="details">
                  <h3><a href={DataScientist}>Data Science</a></h3>
                  <p>Workshop ini mengangkat tema Explore Data Science with Python & SQL. Dan akan mempajari Data Preparation and Analysis
                  </p>
                  <div className="social">
                    <a href="./event/DataScientist.js">Selengkapnya...</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="speaker"> 
              <a href="./event/Laravel.js">
                <img src={LARAVEL} alt="Speaker 2" className="img-fluid"/></a>
                <div className="details">
                  <h3><a href={Laravel}>Laravel Basic</a></h3>
                  <p>Workshop ini mengangkat tema introduction to Laravel Basic. Dan akan mempelajari Laravel Framework.</p>
                  <div className="social">
                    <a href="./event/Laravel.js">Selengkapnya...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Materi;