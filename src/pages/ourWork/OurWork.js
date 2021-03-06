import { useEffect, useState } from "react";
import SelectMenu from "../../Components/SelectMenu/SelectMenu";
import Spinner from "../../Components/Spinner/Spinner";
import axiosInstance from '../../helpers/axios';
import "./OurWork.css";

const OurWork = () => {
  const [previousWork, setPreviousWork] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");

  const pages = new Array(totalPages).fill(null);

  useEffect(() => {
    getPreviousWork();
  }, [pageNumber, category]);

  const getPreviousWork = async () => {
    setLoading(true);
    const response = await axiosInstance.get(
      `/previous-work?page=${pageNumber}&category=${category}`
    );
    const previousWork = await response.data;
    setPreviousWork(previousWork.previousWork);
    setTotalPages(previousWork.totalPages);
    setLoading(false);
  };

  return (
    <div className="gallery">
      <div className="gallery-header">
        <h3>Gallery</h3>
      </div>

      <div className="select-menu-container">
        <SelectMenu
          setCategory={setCategory}
          category={category}
          setPageNumber={setPageNumber}
        />
      </div>

      <div className="gallery-grid-container">
        {loading && <Spinner />}
        {previousWork.map((item) => (
          <div key={item._id} className="gallery-grid__image-box">
            <div className="gallery-item">
              <div className="gallery-grid__image-box">
                <img className="gallery-grid__image" src={item.imageUrl} />
              </div>
              <div className="gallery-grid__image-overlay">
                <p className="gallery-grid__image-madeBy">
                  made by: {item.madeBy}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {pages.map((page, pageIndex) => (
          <button
            key={pageIndex}
            className="pagination-button"
            onClick={() => setPageNumber(pageIndex)}
          >
            {pageIndex + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
