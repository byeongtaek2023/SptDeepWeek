import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import { codenseContent } from "shared/data";

function Foter() {

  const render = useSelector((state)=> state.rerender)

  const catchMem = useSelector((state)=> state.members)

  const filterMeber = catchMem
    ? render.filter((item) => item.writedTo ===catchMem)
    : render;

    if (filterMeber.length === 0) {
      return <div> {catchMem}에게 남겨진 팬레터가 없습니다. 첫 번째 팬레터의 주인공이 되어주세요!</div>;
    }

  return (
    <div>
      <ul>
        {filterMeber.map((item) => {

          return (
            <li key={item.id}>
            
              <div>
                <img src={item.avatar} alt={""} />
              </div>
              <Link to={`/details/${item.id}`}>
                <div>
                  <h3>{item.nickname}</h3>
                  <p>{codenseContent(item.content, 70)}</p>
                  <p>작성 대상: {item.writedTo}</p>
                  <p>작성 일자: {item.createdAt}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Foter;
