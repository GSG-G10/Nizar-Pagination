import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import CardPhoto from "./Card";
import { Fragment } from "react/cjs/react.production.min";

const MainPage = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetch(
      `https://api.unsplash.com/search/collections?page=${page}&limit=10&query=cat&client_id=kQ_rA8Dd9Tb-JZ80Nx6RyFBtaoIFyaP5kdLn5EmGkVM`,
      { signal }
    )
      .then((data) => data.json())
      .then((data) => setData(data.results));

    return () => {
      controller.abort();
    };
  }, [page]);

  return (
    <Fragment>
      <Pagination size="default" total={100} onChange={(e) => setPage(e)} />

      <div style={{ width: "100%", display: 'flex', flexWrap:'wrap' }}>
        {data &&
          data.map((ele) => (
            <CardPhoto
              key={ele.id}
              src={ele.preview_photos[0].urls.full}
              title={ele.title}
            />
          ))}
      </div>
    </Fragment>
  );
};

export default MainPage;
