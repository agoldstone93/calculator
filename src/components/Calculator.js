import './Calculator.css'

// https://i.pinimg.com/originals/29/48/ea/2948ea46373362888081818d697c6d9e.png

export default function Calculator() {
    return (
        <div className='calc'>
            <div id='display'>Display</div>
            <button className='calc-button' id='clear'>C</button>
            <button className='calc-button' id=''></button>
            <button className='calc-button' id='percent'>%</button>
            <button className='calc-button' id='divide'>÷</button>
            <button className='calc-button' id='seven'>7</button>
            <button className='calc-button' id='eight'>8</button>
            <button className='calc-button' id='nine'>9</button>
            <button className='calc-button' id='multiply'>×</button>
            <button className='calc-button' id='four'>4</button>
            <button className='calc-button' id='five'>5</button>
            <button className='calc-button' id='six'>6</button>
            <button className='calc-button' id='subtract'>-</button>
            <button className='calc-button' id='one'>1</button>
            <button className='calc-button' id='two'>2</button>
            <button className='calc-button' id='three'>3</button>
            <button className='calc-button' id='add'>+</button>
            <button className='calc-button' id='zero'>0</button>
            <button className='calc-button' id='decimal'>.</button>
            <button className='calc-button' id=''></button>
            <button className='calc-button' id='equals'>=</button>
        </div>
    )
}