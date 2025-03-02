'use client'

import { useEffect, useState } from "react";
import Game from "../Game";
import MatchInterface from "@/interface/Match/Matchinterface";

export default function GamesLoading() {

  const [loading, setLoading] = useState(true);
  const [matches, setMatches] = useState<[MatchInterface] | []>([]);

  function GetURL(sport: string) {
    return "https://odds.p.rapidapi.com/v4/sports/" + sport + "/scores?daysFrom=3";
  }

  const getMatches = (league: string) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '23bf0a3d47mshb81e5b8a65f33ebp13f897jsn0373a9cc48f0',
        'X-RapidAPI-Host': 'odds.p.rapidapi.com'
      }
    };

    try {
      fetch(GetURL(league), options)
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(data => {
          console.log(data);
          setMatches(data);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMatches('soccer_spain_la_liga');
  }, [])

  return (
    <>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {
          loading ? (
            <div className=" fixed top-0 left-0 w-full h-full bg-white/50 flex justify-center items-center">
              Loading...
            </div>
          ) : (
            <div className="flex flex-col gap-4 items-center">
              <h1>
                ULTIMOS PARTIDOS DE LA LIGA
              </h1>
              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                  matches.map((match: MatchInterface, index: number) => {
                    return (
                      <Game
                        match={match}
                        key={index + 1}
                      />
                    )
                  })
                }
              </div>
            </div>
          )
        }
      </main>
      {
        !loading && (
          <footer className=" flex w-full content-center justify-center items-center gap-4">
            <p className=" flex gap-2.5">
              Created by <a href="https://github.com/ruugii" className=" flex content-center justify-center items-center gap-2.5 hover:underline">Roger Barrero</a>
            </p>
            <p className=" flex gap-2.5">
              <a href="https://github.com/ruugii/results-la-liga" className=" flex content-center justify-center items-center gap-2.5 hover:underline">
                Github repository <img src="/github-logo.svg" alt="github logo" width="20px" />
              </a>
            </p>
          </footer>
        )
      }
    </>
  )
}