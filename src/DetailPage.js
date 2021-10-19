import React from "react";
import DetailTrailer from "./DetailTrailer.js";
import DetailInfo from "./DetailInfo.js";
import DetailRelated from "./DetailRelated.js";
import { Redirect } from "react-router-dom";
import './DetailPage.css';

export default function DetailPage() {
    if (sessionStorage.getItem('detailID')==null) {
        return (<Redirect to="/Home"/>);
    }
    else {
        return (
        <div id="DetailPage">
        <DetailTrailer/>

        <DetailInfo/>

        <DetailRelated/>

        </div>
        );
    }
    
}

