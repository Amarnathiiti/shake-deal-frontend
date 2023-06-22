import { useEffect, useState } from "react"
import TeamCard from "./TeamCard"
import axios from "axios"

export default function ViewTeams() {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/getAllTeams").then((res) => {
      console.log(res.data.teams)
      setTeams(res.data.teams)
    })
  }, [])

  return <div className="viewTeam">{teams.map((team, index) => {
    return <TeamCard team={team} key={index}/>
  })}</div>
}