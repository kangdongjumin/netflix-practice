import React, { useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";

// 1. total page
// 2. page
// 3. page group
// 4. last page
// 5. first page
// 6. first ~ last 페이지 프린트

// 7. 만약 totalpage 3일 경우 3개의 페이지만 프린트하는법 last와 first의 규칙을 바꿈
// 8. << >> 이 버튼 만들어주기

const PaginationForMovies = ({ popularMovies }) => {
  const id = 1010581;
  const searchInput = "";
  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState("10");
  useEffect(() => {
    dispatch(movieAction.getMovies({ id, pageNum, searchInput }));
  }, [pageNum]);

  const pageGroup = Math.ceil(pageNum / 5);
  const last = pageGroup * 5;
  const first = last - 4;
  const pageGroupArr = [first, first + 1, first + 2, first + 3, last];
  const lastPage = 80;

  return (
    <div className="pagination-section">
      {pageNum > 0
        ? pageNum <= lastPage
          ? ""
          : setPageNum(lastPage)
        : setPageNum(1)}
      <Pagination>
        {pageGroup !== 1 ? (
          <Pagination.Prev onClick={() => setPageNum(pageNum - 1)} />
        ) : (
          ""
        )}
        {pageGroup !== 1 ? (
          <Pagination.Item onClick={() => setPageNum(1)}>{1}</Pagination.Item>
        ) : (
          ""
        )}
        {pageGroup !== 1 ? <Pagination.Ellipsis /> : ""}

        {pageGroupArr.map((i) =>
          i == pageNum ? (
            <Pagination.Item onClick={() => setPageNum(i)} active>
              {i}
            </Pagination.Item>
          ) : (
            <Pagination.Item onClick={() => setPageNum(i)}>{i}</Pagination.Item>
          )
        )}
        <Pagination.Ellipsis />
        <Pagination.Item onClick={() => setPageNum(lastPage)}>
          {lastPage}
        </Pagination.Item>
        <Pagination.Next onClick={() => setPageNum(pageNum + 1)} />
      </Pagination>
    </div>
  );
};

export default PaginationForMovies;
