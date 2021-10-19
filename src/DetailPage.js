import React from "react";
import DetailTrailer from "./DetailTrailer.js";
import DetailInfo from "./DetailInfo.js";
import DetailRelated from "./DetailRelated.js";
import './DetailPage.css';

export default function DetailPage() {
    return (
        <div id="DetailPage">
        <DetailTrailer/>

        <DetailInfo/>

        <DetailRelated/>

        </div>
    );
}

