import { useState, useEffect } from 'react'
import { evaluate } from 'mathjs'
import './Calculator.css'

// https://i.pinimg.com/originals/29/48/ea/2948ea46373362888081818d697c6d9e.png

export default function Calculator() {
    const [output, setOutput] = useState(0)
    const [input, setInput] = useState('')

    
    useEffect(() => {
        window.addEventListener('keydown', handleKeydown)
        
        const acceptableInput = ['1','2','3','4','5','6','7','8','9','0','/','*','+','-']
    
        function handleKeydown(e) {
            if (acceptableInput.includes(e.key))
                addToInput(e.key)
            else if (e.key === '=' || e.key === 'Enter')
                equals()
        }
        
    }, [])
    

    function addToInput(value){
        setInput(prevInput => prevInput+value)
    }

    function equals(){
        setOutput(evaluate(input))
        setInput('')
    }

    function clear() {
        setInput('')
        setOutput(0)
    }

    function decimalPoint() {
        // issue with minusing decimals e.g. 2.2-1.2
        var str = input
        var plus = str.slice(str.lastIndexOf('+') + 1)
        var minus = str.slice(str.lastIndexOf('-') + 1)
        var times = str.slice(str.lastIndexOf('*') + 1)
        var divide = str.slice(str.lastIndexOf('/') + 1)

        if (!plus.includes('.'))
            addToInput('.')
        else if (!minus.includes('.'))
            addToInput('.')
        else if (!times.includes('.'))
            addToInput('.')
        else if (!divide.includes('.'))
            addToInput('.')
    }

    return (
        <div className='calc'>
            <div id='display'>
                <div id='input'>{input}</div>
                <div id='output'>{output}</div>
            </div>
            <button className='calc-button' id='clear' onClick={clear}>C</button>
            {/* add functionality */} <button className='calc-button' id=''></button>
            <button className='calc-button' id='percent'>%</button>
            <button className='calc-button' id='divide' onClick={()=>addToInput('/')}>÷</button>
            <button className='calc-button calc-number' id='seven' onClick={()=>addToInput('7')}>7</button>
            <button className='calc-button calc-number' id='eight' onClick={()=>addToInput('8')}>8</button>
            <button className='calc-button calc-number' id='nine' onClick={()=>addToInput('9')}>9</button>
            <button className='calc-button' id='multiply' onClick={()=>addToInput('*')}>×</button>
            <button className='calc-button calc-number' onClick={()=>addToInput('4')} id='four'>4</button>
            <button className='calc-button calc-number' onClick={()=>addToInput('5')} id='five'>5</button>
            <button className='calc-button calc-number' onClick={()=>addToInput('6')} id='six'>6</button>
            <button className='calc-button' id='subtract' onClick={()=>addToInput('-')}>-</button>
            <button className='calc-button calc-number' id='one' onClick={()=>addToInput('1')}>1</button>
            <button className='calc-button calc-number' id='two' onClick={()=>addToInput('2')}>2</button>
            <button className='calc-button calc-number' id='three' onClick={()=>addToInput('3')}>3</button>
            <button className='calc-button' id='add' onClick={()=>addToInput('+')}>+</button>
            <button className='calc-button calc-number' id='zero' onClick={()=>addToInput('0')}>0</button>
            <button 
                className='calc-button' 
                id='decimal' 
                onClick={decimalPoint}>.</button>
            <button className='calc-button' id='equals' onClick={equals}>=</button>
        </div>
    )
}