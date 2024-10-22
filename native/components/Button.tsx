import React from 'react'
import { Button } from 'react-native'

export default props => {
    const execute = (): void => {
        console.warn('Exec!!!')
    }
    return (
        <>
            <Button
                title="Execute!"
                onPress={execute}
                
            />

            <Button
                title="Execute2!"
                onPress={() => {
                    console.warn("Exec 2!!!")
                }}
                color="#fff" 
            />
        </>
        
    )
}