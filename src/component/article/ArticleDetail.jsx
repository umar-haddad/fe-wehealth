import { useNavigate, useParams } from "react-router-dom"
import { useArticleDetail } from "../../hooks/useArticleDetail";
import { Skeleton } from "antd";

function ArticleDetail() {
   const { article_id: id } = useParams()
   const {
      data: dataDetail,
      isLoading,
   } = useArticleDetail(id, true);

   const data = dataDetail?.data?.article;
   const date = new Date(data?.createdAt);
   const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'Asia/Jakarta',
   };
   const formattedDate = date.toLocaleDateString('id-ID', options);

   const navigate = useNavigate();

   const handleBack = () => {
      navigate(-1);
   }


   return (
      <div className="container-xl margin-top-100">
         <button className="btn btn-outline-secondary back-button"
            onClick={handleBack}
         >
            <i className="fas fa-arrow-left"></i> Kembali
         </button>
         <div className="main-content">
            {isLoading && <Skeleton active />}
            {!isLoading && <>
               <h1>{data?.title}</h1>
               <p className="fs-6 text-body-secondary">{data?.category}, {formattedDate}</p>
               <p>{data?.description}</p>
               <img src={data?.image} alt={data?.title} className="img-fluid mb-2" />
               <p>{data?.content}</p>
            </>}
         </div>
      </div>
   )
}

export default ArticleDetail