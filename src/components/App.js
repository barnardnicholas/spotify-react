import Header from './Header';

import { useEffect, useState } from 'react';
import getInitalCategories from '../api/getInitalCategories';

function App() {
  const [cats, setCats] = useState({ items: [], limit: 8, offset: 0, total: 0 });

  useEffect(() => {
    getInitalCategories()
      .then(data => setCats(data))
      .catch(e => console.log('oh no!', e));
  }, []);

  return (
    <div className="App">
      <Header />
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
