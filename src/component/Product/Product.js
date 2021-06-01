import React,{useState} from 'react'
import './Product.css'

const Product = () => {
    const [blue, setBlue] = useState(false);
    const [red, setRed] = useState(false);
    const [green, setGreen] = useState(false);
    const [orange, setOrange] = useState(true);
    const [black, setBlack] = useState(false);
    const [num, setNum] = useState(true);
    const [num1, setNum1] = useState(false);
    const [num2, setNum2] = useState(false);
    const [num3, setNum3] = useState(false);
    const [num4, setNum4] = useState(false);
    const [value, setValue] = useState(1899);
    return (
        <div className="container">
            <div className="card">
                <div className="shoeBackground">
                    <div className="gradients"> 
                        <div className={blue?"gradient second":"gradient"} color="blue"></div>
                        <div className={red?"gradient second":"gradient"} color="red"></div>
                        <div className={green?"gradient second":"gradient"}color="green"></div>
                        <div className={orange?"gradient second":"gradient"} color="orange"></div>
                        <div className={black?"gradient second":"gradient"} color="black"></div>
                    </div>
                    <h1 className="nike">nike</h1>
                    <img src="logo.png" alt="" className="logo"/>
                    <div className="share"><i className="fas fa-share-alt"></i></div>
                    <img src="/blue.png" alt="" className={blue?"shoe show":"shoe"} color="blue"/>
                    <img src="/red.png" alt="" className={red?"shoe show":"shoe"} color="red"/>
                    <img src="/green.png" alt="" className={green?"shoe show":"shoe"} color="green"/>
                    <img src="/orange.png" alt="" className={orange?"shoe show":"shoe"} color="orange"/>
                    <img src="/black.png" alt="" className={black?"shoe show":"shoe"} color="black"/>
                </div>
            <div className="info">
                <div className="shoeName">
                    <div>
                        <h1 className="big">Nike Zoom KD 12</h1>
                        <span className="new">new</span>
                    </div>
                    <h3 className="small">Men's running shoes</h3>
                </div>
                <div className="description">
                    <h3 className="title">Product Info</h3>
                    <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                </div>
                <div className="color-container">
                    <h3 className="title">Color</h3>
                    <div className="colors">
                        <span className={blue?"color active":"color"} primary="#2175f5" color="blue" onClick={()=>{setBlue(true);setRed(false);setGreen(false);setOrange(false);setBlack(false)}}></span>
                        <span className={red?"color active":"color"} primary="#f84848" color="red" onClick={()=>{setBlue(false);setRed(true);setGreen(false);setOrange(false);setBlack(false)}}></span>
                        <span className={green?"color active":"color"} primary="#29b864" color="green" onClick={()=>{setBlue(false);setRed(false);setGreen(true);setOrange(false);setBlack(false)}}></span>
                        <span className={orange?"color active":"color"} primary="#ff5521" color="orange"onClick={()=>{setBlue(false);setRed(false);setGreen(false);setOrange(true);setBlack(false)}}></span>
                        <span className={black?"color active":"color"} primary="#444" color="black"onClick={()=>{setBlue(false);setRed(false);setGreen(false);setOrange(false);setBlack(true)}}></span>
                    </div>
                </div>
                <div className="size-container">
                    <h3 className="title">size</h3>
                    <div className="sizes">
                        <span className={num?"size active":"size"} onClick={()=> {setNum(true);setNum1(false);setNum2(false);setNum3(false);setNum4(false);setValue(value)}}>7</span>
                        <span className={num1?"size active":"size"} onClick={()=> {setNum(false);setNum1(true);setNum2(false);setNum3(false);setNum4(false);setValue(value)}}>8</span>
                        <span className={num2?"size active":"size"} onClick={()=> {setNum(false);setNum1(false);setNum2(true);setNum3(false);setNum4(false);setValue(2500)}}>9</span>
                        <span className={num3?"size active":"size"} onClick={()=> {setNum(false);setNum1(false);setNum2(false);setNum3(true);setNum4(false);setValue(2759)}}>10</span>
                        <span className={num4?"size active":"size"} onClick={()=> {setNum(false);setNum1(false);setNum2(false);setNum3(false);setNum4(true);setValue(3000)}}>11</span>
                    </div>
                </div>
                <div className="buy-price">
                    <div className="buy"><i className="fas fa-shopping-cart"></i>Add to card</div>
                    <div className="price">
                        <i className="fas fa-rupee-sign"></i>
                        <h1>{value}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Product;