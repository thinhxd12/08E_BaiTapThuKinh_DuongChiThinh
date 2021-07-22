import React, { Component } from 'react'

export default class BaiTapThuKinh extends Component {


    dataGlasses = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    state = {
        glasses: {
            "id": "",
            "price": "",
            "name": "",
            "url": "",
            "desc": ""
        },
        glassesCompare: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    renderTableGlasses = () => {
        return this.dataGlasses.map((glasses, index) => {
            return <div key={index} className="col-md-2">
                <div className="mb-3">
                    <button className="btn-default card__img" onClick={() => {
                        this.changeGlasses(glasses);
                    }} >
                        <img src={glasses.url} className="img-fluid" alt="..." />
                    </button>

                </div>
            </div>

        });
    };

    renderModel = (glasses) => {
        if (glasses.url !== '') {
            return <div className="card w-25">
                <div className="model">
                    <img src="./glassesImage/model.jpg" alt="..." className="img-fluid" />
                    <img src={glasses.url} alt="..." className="img-fluid glasses__model" />
                </div>
                <div className="glasses__info">
                    <h4>{glasses.name}</h4>
                    <p>{glasses.desc}</p>
                </div>
            </div>
        }
        else return <div className="card w-25">
            <img src="./glassesImage/model.jpg" alt="..." className="img-fluid" />
        </div>
    }

    changeGlasses = (glassesClick) => {
        this.setState({ glasses: glassesClick });
    };

    render() {
        return (
            <div className="glasses__app" style={{ background: 'url(./glassesImage/background.jpg)' }}>
                <h3>TRY GLASS APP ONLINE</h3>
                <div className="container pb-5">

                    <div className="mx-auto mb-2 d-flex justify-content-around">
                        {this.renderModel(this.state.glassesCompare)}
                        {this.renderModel(this.state.glasses)}
                    </div>

                    <div className="card__item pt-3">
                        <div className="row">
                            {this.renderTableGlasses()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
