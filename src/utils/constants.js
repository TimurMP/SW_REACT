import friend1 from "../Images/friend1.jpg";
import friend2 from "../Images/friend2.jpg";
import friend3 from "../Images/friend3.jpg";
import friend4 from "../Images/friend4.jpg";
import friend5 from "../Images/friend5.jpg";
import friend6 from "../Images/friend6.jpg";
import friend7 from "../Images/friend7.jpg";
import friend8 from "../Images/friend8.jpg";
import friend9 from "../Images/friend9.jpg";
import {logDOM} from "@testing-library/react";

export const friends = [friend1, friend2, friend3, friend4, friend5, friend6, friend7, friend8, friend9];

export const navItems = ['Home', 'About me', 'Star Wars', 'Contact'];




export const baseUrl = `https://sw-info-api.herokuapp.com`;

// test()
//
// function test() {
//     fetch(`${baseUrl}/v1/planets`)
//         .then(r => r.json())
//         .then(a => a.map(i => {
//             this.setState()
//         }))
//         .then(d => console.log(d.map(i => i.name)))
//
//
// }

// export async function returnText() {
//     let text1 = getTExt();
//
//
// }
//
// async function getTExt(){
//     return fetch(returnMovieTextUrl())
//         .then(r => r.json())
//         .then(ff => {
//             return ff.opening_crawl
//         });
// }



// export const text = returnText();