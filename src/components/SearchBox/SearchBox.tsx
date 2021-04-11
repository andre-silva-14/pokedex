import { ChangeEvent, useState } from 'react';
import styles from './SearchBox.module.css';

export default function SearchBox() {
    const [pokemonSearch, setPokemonSearch] = useState('');

    function handlePokemonSearch(e: ChangeEvent) {
        const input = e.target as HTMLInputElement;
        setPokemonSearch(input.value);

        console.log(input.value);
    }

    return (
        <div className={styles.inputContainer}>
            <input 
                onChange={handlePokemonSearch}
                type="text"
                placeholder="Search your Pokemon!"
                spellCheck="false"
            />
            <span>
                <img src="" alt=""/>
            </span>
        </div>
    )
}