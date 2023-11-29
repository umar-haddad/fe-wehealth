import "./ListLayanan.css";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useArticleDetail } from "../../../src/hooks/useArticleDetail";
import { Divider, Skeleton } from "antd";

function ListLayanan() {
  const { article_id: id } = useParams();

  // get article detail
  const { data: dataDetail, isLoading: skeleton } = useArticleDetail(id, true);

  const data = dataDetail?.data?.article;

  return (
    <div>
      <div className="container  pt-12">
        <div className="container bg-white d-flex flex-column align-items-center mt-5 px-5 py-5">
          <div className="div-1 text-black text-4xl font-semibold leading-10 tracking-tighter whitespace-nowrap mt-4">
            <h2> Cari layanan faskes</h2>
          </div>
          <div className="d-flex justify-content-between gap-5 mt-5 pr-16">
            <div className="border border-2 "></div>
            <div className="d-flex gap-5 pl-5 pr-3.5 py-1.5 rounded-sm"></div>
            <div className="border border-2 border-secondary bg-white d-flex justify-content-between gap-5 pl-3 rounded-sm"></div>
          </div>
          <div className="mt-12  px-8">
            <div className="d-flex flex-wrap gap-5">
              <div className="flex-grow">
                <div className=" d-flex ">
                  <div className="div-5 px-2 ">
                    <select id="terdekat" className="input1 px-5">
                      <option value="1">test1</option>
                      <option value="2" selected="selected">
                        test2
                      </option>
                      <option value="3">test3</option>
                    </select>
                  </div>
                  <div className="div-7 col-3">
                    <select id="jenis" className="input2 px-5 ">
                      <option value="1">test1</option>
                      <option value="2" selected="selected">
                        test2
                      </option>
                      <option value="3">test3</option>
                    </select>
                  </div>
                  <div className="div-2 col-12 px-2 mx-5 d-flexjustify-content-between">
                    <input
                      type="search"
                      id="search"
                      name="search"
                      placeholder="input search text"
                      className="input3 col-8 "
                    />
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
                {skeleton && <Skeleton active />}
                {!skeleton && data && (
                  <Fragment key={data.id}>
                    <Divider orientation="left">Data Article</Divider>
                    <div className="article-image-container">
                      <img src={data.image} alt={data.title} />
                    </div>
                    <table className="detail-article__table">
                      <tbody>
                        <tr>
                          <th>Judul</th>
                          <td>: {data?.title}</td>
                        </tr>
                        <tr>
                          <th>Kategori</th>
                          <td>: {data?.category}</td>
                        </tr>
                        <tr>
                          <th>Deskripsi</th>
                          <td>: {data?.description}</td>
                        </tr>
                        <tr>
                          <th>Isi</th>
                          <td>: {data?.content}</td>
                        </tr>
                      </tbody>
                    </table>
                  </Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListLayanan;
