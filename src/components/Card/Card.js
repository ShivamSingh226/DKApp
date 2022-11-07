import React from 'react'
import "./Card.css"
function Card({title,body,btn,href}) {
  return (
    <div className='card-container'>
        <div className='card-content'>


                <div className='card-title'>
                <h1>{title}</h1>
            </div>
            <div className='card-body'>
                <p>{body}</p>
            </div>
            
        </div>
        <div className='btn'>
                <button>
                    <a   href={href}
            target="_blank"
            rel="noreferrer">
                        {btn}
                    </a>
                </button>
            </div>
      
    </div>
  )
}

export default Card
