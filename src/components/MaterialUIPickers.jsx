import React from 'react';
import 'moment/locale/it.js';
import Datetime from "react-datetime";
import '../App.css';


export class MaterialUIPickers extends React.Component {


    constructor(props) {
        super(props);

        let today = new Date('2014-08-18T21:11:54');
        let lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

        this.state = {
            today,
            lastWeek
        };

        console.log(this.state);
    }



    render() {return (
        <Datetime />
        );
    }
}
