import React from 'react'

export default function Footer(){
    return(
        <footer>
        <div className="container">
        <p>Designed By Sagar Giri</p>
       
        </div>
        <style jsx>{`
        footer{
            background:#080808;
            color: #ffff;
            text-align: center;
            padding:50px;
           
        }
        p{
            letter-spacing:0.7px;
        }
        `}</style>
        </footer>
    )
}