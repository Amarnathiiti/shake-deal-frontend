import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import RecentTasks from './RecentTasks'

export default function InputComponent() {
  const [taskName, setTaskName] = useState('')
  const [selectedTeamId, setSelectedTeamId] = useState(null)
  const [teams, setTeams] = useState([])
  const [tasks, setTasks] = useState([])
  
  useEffect(() => {
    axios.get("http://localhost:8080/getAllTeams").then((res) => {
      console.log(res.data.teams)
      setTeams(res.data.teams)
    })
  }, [])

  function taskChangeHandler(e) {
    e.preventDefault()
    setTaskName(e.target.value)
  }

  function teamSelectHandler(e) {
    e.preventDefault()
    setSelectedTeamId(e.target.value)
  }

  function assignButtonHandler() {
    if (!selectedTeamId) {
      alert("please select team")
      return
    }
    if (taskName.length === 0) {
      alert("task name should not be empty")
      return
    }
    axios.post("http://localhost:8080/createTask", { taskName: taskName, teamId: selectedTeamId })
      .then((res) => {
        console.log(res.data)
        const newTaskDetails = {taskName: res.data.result.taskName, teamName:res.data.result.teamName, personName: res.data.result.personName}
        setTasks((prev) => { return [...prev, newTaskDetails] })
      }).catch((err) => {
      alert('some error occured')
    })
  }

  return <div>
    <div className='taskInput'>
      <label style={{margin: "10px"}}>Task</label>
      <input type='text' value={taskName} onChange={taskChangeHandler} placeholder='Enter task Details' style={{padding: "10px", borderRadius: "10px", fontSize: "20px"}}></input>
    </div>
    <div className='selector'>
    <label style={{margin: "10px"}}>Select Team</label>
      <select onChange={teamSelectHandler} style={{ fontSize: "20px", padding: "5px" }}>
        <option value={null} selected></option>
        {teams.map((team) => {
          return <option key={team._id} value={team._id} style={{fontSize: "20px"}}>{team.name}</option>
        })
      }
      </select>
    </div>
    <div >
      <button onClick={assignButtonHandler} style={{fontSize: "20px", padding: "10px", color: "white", backgroundColor: "blue", borderRadius: "10px"}}>Assign Task</button>
    </div>
    <RecentTasks tasks={tasks} />
  </div>
}