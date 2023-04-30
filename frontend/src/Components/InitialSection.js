import Artboard30 from '../assets/Artboard30.png'
const InitialSection = ()=>{
    return(
      <section id="hero" className="d-flex align-items-center">
          <div className="container position-relative">
            <div className="caption" styles="text-align: left;margin-top: 200px;">
              <h1 className="huruf-besar">FILiNG</h1>
              <h1 className="huruf-kecil">(FIKTI Learning)</h1>
              <h2><b styles="color: #553580;">“Ready to Face Global Competition by </b><span className="text-kuning"><b styles="color:#86b4e0 ;">Improving Data Science and Laravel
                    Basic Skills”</b></span></h2>
              <a href="#about" className="btn-get-started scrollto">Pelajari Lebih Lanjut</a>
            </div>
            <div className="image"><img src={Artboard30} alt="logo-filing" width="700px" /></div>
          </div>
      </section>
    )
}
export default InitialSection;

