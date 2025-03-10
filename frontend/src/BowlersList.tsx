import { useEffect, useState } from "react";
import { bowler } from "./types/bowler";
import './style.css';


function BowlersList() {
  const [bowlers, setBowlers] = useState<bowler[]>([]);

  useEffect(() => {
    const fetchBowlers = async () => {
      const response = await fetch("https://localhost:5000/api/Bowling");
      const data = await response.json();
      setBowlers(data);
    };
    fetchBowlers();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>First Name:</th>
            <th>Middle Inital:</th>
            <th>Last Name:</th>
            <th>Address:</th>
            <th>City:</th>
            <th>State:</th>
            <th>ZIP:</th>
            <th>Phone Number:</th>
            <th>Team Name:</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((f) => (
            <tr key={f.bowlerId}>
              <td>{f.bowlerFirstName}</td>
              <td>{f.bowlerMiddleInit}</td>
              <td>{f.bowlerLastName}</td>
              <td>{f.bowlerAddress}</td>
              <td>{f.bowlerCity}</td>
              <td>{f.bowlerState}</td>
              <td>{f.bowlerZip}</td>
              <td>{f.bowlerPhoneNumber}</td>
              <td>{f.team.teamName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlersList;
