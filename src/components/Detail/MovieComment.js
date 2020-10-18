import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

const MovieComment = () => {
  let history = useHistory();

  //해당 컴포넌트에서 사용할 예약목록 useState
  const [postList, setPostList] = useState([]);

  //컴포넌트가 최초 로딩될떄만 실행
  useEffect(() => {
    const apiUrl = 'http://localhost:8000/blog/';

    axios
      .get(apiUrl)
      .then((response) => {
        console.log('조회목록데이터:', response.data);

        setPostList(response.data);
      })
      .catch((response) => {
        console.error(response);
      });
  }, []);

  return (
    <div>
      <h1>Comment List</h1>

      {postList.map((item, i) => {
        return (
          <React.Fragment key={item.id}>
            <div>
              <h3>
                user:{item.username} | {item.movie_title} | {item.movie_rating}{' '}
                |{item.modify_dt}
              </h3>
              <p>{item.comment} </p>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default MovieComment;
