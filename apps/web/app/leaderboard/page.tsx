"use-client"

import React from 'react'
import LeaderboardComponent from '../../components/LeaderBoard'

type Props = {}

const LeaderBoardPage = (props: Props) => {
  return (
    <main className="h-[1272px] px-28 pt-8 pb-14 flex-col justify-start items-start gap-6 inline-flex">
        <LeaderboardComponent />
    </main>
  )
}

export default LeaderBoardPage