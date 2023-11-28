import "./Profile.css";
import ImageProfil from "../../../public/assets/img/home2.png";

function Profile() {
  return (
    <div>
      <div className="div container py-3 px-3">
        <div className="div-2 row col-12 mx-auto">
          <div className="div-3 d-flex w-25 mx-lg-1">
            <button className="btn btn-outline-secondary back-button">
              <i className="fas fa-arrow-left"></i> Kembali
            </button>
          </div>
          <div className="div-5 col-12 d-flex mt-5 px-5 flex-column">
            <div className="div-6 py-5">Profil Saya</div>
            <div className="div-7 col-12 d-flex align-items-center justify-content-between my-3">
              <div className="div-8 col-6 d-flex justify-content-between position-relative">
                <div className="div-9 col-12 d-flex align-items-end position-relative ">
                  <img
                    loading="lazy"
                    src={ImageProfil}
                    className="img-2 position-relative h-50 w-50 align-self-start "
                  />
                  <i className="fa-solid fa-camera"></i>
                </div>
                <div className="div-10 col-6 d-flex flex-column align-items-start justify-content-center">
                  <span className="mb-2">Angel Lala</span>
                </div>
              </div>

              <div className="div-11 justify-content-center align-self-center">
                Ubah Profile
              </div>
            </div>
            <div className="div-12">
              <div className="div-14 position-relative text-start">
                Informasi pribadi
              </div>
              <div className="div-13 col-3 d-flex flex-column">
                <div className="col-12  mb-2">Email</div>
                <div className="d-flex flex-row justify-content-between align-items-center mb-3">
                  <div className="div-17 text-center me-2">test@gmail.com</div>
                  <i className="fa-regular fa-pen-to-square"></i>
                </div>

                <div className="div-18 mb-2">Address</div>
                <div className="d-flex flex-row justify-content-between align-items-center mb-3">
                  <div className="div-20 me-2">Jalan Test, Jakarta Timur</div>
                  <i className="fa-regular fa-pen-to-square"></i>
                </div>

                <div className="div-24 mb-2">Phone</div>
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <div className="div-24 me-2">+628421421300</div>
                  <i className="fa-regular fa-pen-to-square"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="div-25"></div>
          <div className="div-26 col-12 pt-5 pb-5  d-flex gap-5 text-center">
            <div className="div-27 col-2">
              <div className="div-28 col-3">Umur</div>
              <span className="border1 border-3 "></span>
            </div>
            <div className="div-29 col-2">
              <div className="div-30 col-3">Berat Badan</div>
              <span className="border1 border-3"></span>
            </div>
            <div className="div-31 col-2">
              <div className="div-32 col-3">Tinggi Badan</div>
              <span className="border1 border-3"></span>
            </div>
            <div className="div-33 col-4 ">
              <div className="div-34 col-2">BMI</div>
              <span className="border1 border-3"></span>
            </div>
          </div>
          <div className="div-35"></div>
          <div className="row div-36 pt-5 pb-5">
            <div className=" div-37 col-12">
              <div className="mb-3">
                <div className="border-bottom">Jenis Kelamin</div>
                <span className=" border1 border-3"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
