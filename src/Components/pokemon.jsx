import { useState, useEffect } from 'react'

const Pokemon = (props) => {
    const [Poke, setPoke] = useState(false);

    useEffect(() => {
        if(Poke){
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(response => setPoke(response.results))}
    }, [Poke]);

    return (
        <div>
            <button disabled={Poke} onClick={()=> setPoke(true) }>Fetch Pokemon</button>
            
            {Poke.length > 0 &&
                Poke.map
                    ((Pokemon, index) =>
                        {
                            return (
                            <div key={index}><ul/>
                            <li>{Pokemon.name}</li></div>)
                        }
                    )
            }
        </div>
    );
}
export default Pokemon;
