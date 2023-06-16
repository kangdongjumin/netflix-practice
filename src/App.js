
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import Navigation from './component/Navigation';
import { Routes, Route } from  'react-router-dom'


// 1. 3개의 페이지 필요 홈페이지, 무비페이지, 상세페이지
// 2. 홈페이지에서 베너를 볼 수 있다.
// 3. 3가지 섹션의 영화를 볼 수있다 (popular top rated upcoming movie)
// 4. 각 영화의 마우스를 올려두면, 제목, 장르, 점수, 인기도, 청불여부 알수 있음
// 5. 영화를 슬라이드로 넘기면서 볼 수있다
// 6. 영화 디데일 페이지에서 영화에 대한 디테일한 정보를 볼 수있다(포스터,제목,줄거리, 등드등)
// 7. trailer를 누르면 trailer를 볼 수 있다
// 8. 영화 리뷰 볼 수있다
// 9. 관련된 영화도 볼 수 있다
// 10. 검색을 할 수 있다
// 11. 영화 정렬을 할 수 있다. 필터링 할 수있다


function App() {
  return( 
   <div>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id" element={<MovieDetail />} />

    </Routes>
   </div>
   )
}

export default App;
