export default function RecentTasks({ tasks }) {
  console.log(tasks, "tasks")
  return <div >
    <ul>
      {tasks.map((task, index) => {
        return <li key={index} style={{ width: "max-content", marginLeft: "auto", marginRight: "auto", marginBottom: "5px", borderRadius: "10px", padding: "10px", backgroundColor: "cyan" }}>
          Task name : <span style={{fontSize: "20px", fontWeight: "bold" }}>{task.taskName} </span>| assigned to : <span style={{fontSize: "20px", fontWeight: "bold" }}>{task.personName}</span> | team : <span style={{fontSize: "20px", fontWeight: "bold" }}>{task.teamName}</span>
        </li>
      })}
    </ul>
  </div>
}