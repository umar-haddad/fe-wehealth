import imgLayanan from "../../../public/assets/img/Detail.png";
import "./detailLayanan.css";

function DetailLayanan() {
  return (
    <div>
      <div className="container p-5">
        <div className="row d-flex">
          <div className="col-md-12 ">
            <div className=" d-flex">
              <div className="col-md-6">
                <div className="div-3 d-flex flex-column align-items-center">
                  <div className="div-4 p-5 d-flex flex-column align-items-start justify-content-between">
                    <i className="bi bi-chevron-compact-left"> </i>
                    <div className="div-5 align-self-center">Kembali</div>
                  </div>
                  <img src={imgLayanan} className="img-2" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="column-2 d-flex flex-column mt-5 p-5">
                  <div className="div-6 d-flex mt-5 flex-column text-black text-4xl font-medium leading-10 whitespace-nowrap max-md:max-w-full">
                    dr. Marjis, Sp. M
                  </div>
                  <div className="div-8 text-black text-opacity-80 text-sm leading-6 whitespace-nowrap mt-6 max-md:max-w-full">
                    Spesialis Mata
                  </div>
                  <div className="border-bottom mt-8 pr-20 pt-5 pb-2 border-top-0 border-solid border- max-md:max-w-full max-md:pr-5">
                    <div className="div-9 ">
                      <div className="col-md-12">
                        <div className="d-flex ">
                          <div className="">
                            <div className="p-2 text-black text-opacity-80 text-base font-medium leading-6 whitespace-nowrap">
                              <h6>Klinik :</h6>
                              <span className="pl-5">Klinik Medika Jaya</span>
                            </div>
                            <div className="p-2 text-black text-opacity-80 text-base font-medium leading-6 whitespace-nowrap">
                              <h6>Bidah :</h6>
                              <span className="pl-5">Spesialis Kandungan</span>
                            </div>
                            <div className="p-2 text-black text-opacity-80 text-base font-medium leading-6 whitespace-nowrap mt-6">
                              <h6>Pengalaman :</h6>
                              <span className="pl-5">5 Tahun</span>
                            </div>
                            <div className="p-2 text-black text-opacity-80 text-base font-medium leading-6 whitespace-nowrap">
                              <h6>Jam Klinik :</h6>
                              <span className="pl-5">15:00 - 21:00</span>
                            </div>
                            <div className="justify-content-center align-items-center mt-3">
                              <button className="btn btn-primary">
                                Buat Janji
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12"></div>
                    </div>
                  </div>
                  <div className="p-2 col-12">
                    Setelah menempuh pendidikan dokter di Fakultas Kedokteran
                    Universitas Andalas, Dokter Marjis melanjutkan program studi
                    spesialis mata di almamaternya tersebut dan selesai pada
                    tahun 2004. Tidak berhenti disitu, beliau melanjutkan
                    pendidikan konsultan/subspesialis katarak dan bedah
                    refraktif. Dokter Marjis siap melayani dengan sepenuh hati.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailLayanan;
