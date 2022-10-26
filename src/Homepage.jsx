import React, { useState } from "react";
let alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'W', 'Y', 'Z']


export default function Homepage() {
  const [count, sorter] =
    useState(function generateRandomLetter() {
      return (

        <span className="text-xl md:text-3xl text-red-900 uppercase">Click on SORT to start!</span>

      );
    });
  function clickOnSort(e) {
    let arraySorteio = Math.floor(Math.random() * alfabeto.length)
    let sorteio = alfabeto[arraySorteio]
    alfabeto.splice(arraySorteio, 1)
    console.log(alfabeto)
    sorter(sorteio)
    if (sorteio === undefined) {
      sorter(
        <span className="text-xl md:text-3xl text-red-900 uppercase">GAME OVER!</span>
      )
    }
  }
  function ClickonReset(e) {
    if (alfabeto.length < 26) {
      alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'W', 'Y', 'Z']
      console.log(alfabeto)
      sorter(
        <span className="text-xl md:text-3xl text-red-900 uppercase">Click on SORT to start!</span>
      )

    } else {
      sorter(
        <span className="text-xl md:text-3xl text-red-900 uppercase">You cannot reset now!</span>
      )
    }
  }
  return (
    <div className="min-h-screen bg-blue-700">
      <div className="flex flex-row justify-center">
        <header className="text-3xl md:text-5xl uppercase mt-5 font-bold font-shadows text-white tracking-widest">Letter Sorter</header>
      </div>

      <div className="flex flex-row justify-center items-center mt-24">
        <h1 className="text-5xl mt-5 font-bold font-amiri">{count}</h1>
      </div>

      <div className="flex flex-row justify-center mt-40 space-x-3.5">
        <button onClick={clickOnSort} className="bg-purple-400 border rounded-xl px-8 py-3 font-bold font-josefin uppercase ease-in-out duration-300 hover:bg-purple-700 hover:scale-110">Sort</button>
        <button onClick={ClickonReset} className="bg-purple-400 border rounded-xl px-8 py-3 font-bold font-josefin uppercase ease-in-out duration-300 hover:bg-purple-700 hover:scale-110">Reset</button>
      </div>
    </div>
  )
}