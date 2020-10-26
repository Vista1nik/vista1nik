// Coin Easter Egg
import React, {useState} from 'react'

const EasterEgg = props => {
    const [count, setCount] = useState(0)
    const [coinClass, setCoinClass] = useState('')

    return (
        <div onClick={() => {
            setCount(count + 1)

            if (count > 3) {
                setCoinClass('anim')
            }
        }}>
            <style jsx>{`
                @keyframes coin-animation {
                    0% {
                        opacity: 0;
                        transform: translateY(0);
                    }
                    50% {
                        opacity: 1;
                        transform: translateY(-42px);
                    }
                    100% {
                        opacity: 0;
                        transform: translateY(0);
                    }
                }

                img {
                    height: 48px;
                    opacity: 0;
                    display: none;
                    position: absolute;
                    margin-left: 29px;
                }

                .anim {
                    display: block;
                    animation: coin-animation 0.5s;
                }
            `}</style>
            <img className={coinClass} onAnimationEnd={() => {
                setCoinClass('')
            }} src="coin.png" />
            {props.children}
        </div>
    )
}

export default EasterEgg