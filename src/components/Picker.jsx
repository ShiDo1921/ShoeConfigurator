import React from 'react'
import { useSnapshot } from 'valtio'
import { shoeColorState } from '../states/shoe_states'
import { HexColorPicker } from 'react-colorful'

export const Picker = () => {
    const snapState = useSnapshot(shoeColorState);

    function onChangeColor(color){
        shoeColorState.items[snapState.currentSelected] = color;
    }   

    return (
        <div style={styles.container}>
            <h2 style={styles.label}>
                {snapState.currentSelected}
            </h2>
            <HexColorPicker 
                style={styles.colorPicker}
                onChange={onChangeColor}
                
            />
        </div>
    )
}

const styles = {
    container: {
        // padding: '1rem 2rem',
        display: 'flex',
        flexDirection: 'column'
    },
    label: {
        textAlign: 'center',
        fontSize: '2rem',
        padding: '1rem',
        margin: '.5rem 0',
        color: '#E8F3F1'
    },
    colorPicker: {

    }
}
