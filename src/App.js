import './App.css';
import TopNav from './component/TopNav';
import Container from './component/Container';
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState(-1);
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <TopNav onCategorySelect={cat => setCategory(cat)} onSortSelect={srt => setSort(srt)} onSearch={srch => setSearch(srch)}/>
      <Container page={1} cat={category} sort={sort} search={search}/>
    </div>
  );
}

export default App;
