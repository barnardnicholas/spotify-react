import Header from './Header';

import { useEffect, useState } from 'react';
import getPaginatedCategories from '../api/getPaginatedCategories';

function App() {
  const [cats, setCats] = useState({ items: [], limit: 10, offset: 0, total: 0 });

  // Get locale from borwser if possible
  let locale = navigator.languages || ['en-US'];

  useEffect(() => {
    const { offset, limit } = cats;
    getPaginatedCategories({ offset, limit, locale })
      .then(data => setCats(data))
      .catch(e => console.log('oh no!', e));
  }, [cats.offset, cats.limit]);

  const handleClickPrev = () => {
    let offset = cats.offset - cats.limit;
    if (offset < 0) offset = 0;
    setCats({ ...cats, offset });
  };
  const handleClickNext = () => {
    let offset = cats.offset + cats.limit;
    if (offset >= cats.total) offset = cats.total;
    setCats({ ...cats, offset });
  };

  return (
    <div className="App">
      <Header>
        <div className="btns">
          <button
            className="btn"
            onClick={handleClickPrev}
            disabled={cats.offset <= 0 ? true : false}
          >
            {'<'}
          </button>
          <span className="page-readout">
            {Math.floor((cats.offset + cats.limit) / cats.limit)} /{' '}
            {Math.round(cats.total / cats.limit)}
          </span>
          <button
            className="btn"
            onClick={handleClickNext}
            disabled={cats.total - cats.limit <= cats.offset ? true : false}
          >
            {'>'}
          </button>
        </div>
      </Header>
      <div className="pseudo-header"></div>

      <section className="results">
        {cats.items.map(cat => (
          <div className="result-tile" key={cat.id} onClick={() => {}}>
            <h2>{cat.name}</h2>
            <img
              src={cat.icons[0].url}
              alt={cat.name}
              style={{
                height: cat.icons[0].height,
                width: cat.icons[0].width,
                borderRadius: '10%',
              }}
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
