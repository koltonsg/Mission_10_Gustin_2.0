import {team} from './team'

export type bowler = {
  bowlerId: number;
  teamId: number;
  bowlerLastName: string;
  bowlerFirstName: string;
  bowlerMiddleInit?: string;
  bowlerAddress: string;
  bowlerCity: string;
  bowlerState: string;
  bowlerZip: string;
  bowlerPhoneNumber: string;
  team: team;
};

export default bowler
