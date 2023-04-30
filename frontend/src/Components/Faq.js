const Faq = ()=>{
    return(
        <section id="faq">
        <div className="container">
          <div className="section-title">
            <h2>FAQ</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <ul className="faq-list">
                <li>
                  <div data-bs-toggle="collapse" className="collapsed question" href="#faq1">
                    Apa itu FILING ?
                    <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                    <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                      <p>
                        FIKTI Learning (FILING) merupakan program kerja dari
                        Departemen Akademik. FILING memiliki kegiatan seperti
                        pengembangan minat dan bakat bagi mahasiswa/i FIKTI UG
                        yang dilaksanakan dalam bentuk workshop secara bertahap
                        dengan 4 kali pertemuan selama satu bulan. FILING berfokus
                        untuk mengasah hardskill para peserta dengan pokok materi
                        pembelajaran di bidang teknologi informasi.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div data-bs-toggle="collapse" href="#faq2" className="collapsed question">
                      Kapan dan dimana FILING dilaksanakan?
                      <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                      <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                        <p>
                          Pada Hari, Tanggal : Minggu, 10, 17, 24 April dan 8 mei 2022
                          Di Zoom Cloud Meeting
                        </p>
                      </div>
                    </li>
                    <li>
                      <div data-bs-toggle="collapse" href="#faq3" className="collapsed question">
                        Apakah ada biaya pendaftaran di FILING?
                        <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                        <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                          <p>
                            Iya ada biaya pendaftaran.
                            Sebesar Rp.25.000,- per materi workshop
                          </p>
                        </div>
                      </li>    
                      <li>
                        <div data-bs-toggle="collapse" href="#faq4" className="collapsed question">
                          Bagaimana saya mengetahui bahwa saya berhasil meregistrasi?
                          <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                          <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                            <p>
                              Setelah berhasil mendaftar para peserta akan diundang ke dalam grup yang disediakan oleh panitia.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div data-bs-toggle="collapse" href="#faq5" className="collapsed question">
                      Apa kita bisa memilih 2 materi workshop sekaligus?
                      <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                      <div id="faq5" className="collapse" data-bs-parent=".faq-list">
                        <p>
                          Iya boleh memilih 2 materi workshop.
                        </p>
                      </div>
                    </li>      
                    <li>
                      <div data-bs-toggle="collapse" href="#faq6" className="collapsed question">
                        Kapan pendaftaran workshop FILING ditutup?
                        <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                        <div id="faq6" className="collapse" data-bs-parent=".faq-list">
                          <p>
                            Pendaftran di tutup pada tanggal 10 april 2022
                          </p>
                        </div>
                      </li>     
                    </ul>
                  </div>
            </div>     
          </div>
        </section>
    )
}
export default Faq;