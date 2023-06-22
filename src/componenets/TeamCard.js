export default function TeamCard({team}) {
  return <div className="teamCard">
    <p style={{ fontSize: "20px", fontWeight: "bold" }}>{team.name}</p>
    <ul>
      {team.members.map((member) => {
        return <li key={member._id}  style={{width: "max-content"}}>{member.name}</li>
      })}
    </ul>
  </div>
}