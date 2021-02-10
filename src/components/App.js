import { useEffect, useState } from 'react';
import getInitalCategories from '../api/getInitalCategories';

function App() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getInitalCategories()
            .then(data => setCategories(data.items))
            .catch(e => console.log('oh no!', e));
    }, []);
    return (
        <div className="App">
            <h2 style={{ textAlign: 'center', fontWeight: 200, fontSize: 40 }}>Spotichip</h2>
            <section
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignContent: 'space-between',
                    justifyContent: 'space-between',
                    margin: '1em',
                }}
            >
                {categories.map(cat => (
                    <div onClick={() => {}} style={{ cursor: 'pointer' }}>
                        <h2 style={{ textAlign: 'center', fontWeight: 200 }}>{cat.name}</h2>
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
