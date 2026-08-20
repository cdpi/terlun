
import { type Action } from "./action.js"

class VoteManager
	{
	private readonly votes:Record<Action, number>;

	public constructor()
		{
		this.votes = {"Avancer": 0, "Tourner à gauche": 0, "Tourner à droite": 0};
		}

	public get action():string
		{
		const forward = this.votes["Avancer"];
		const left = this.votes["Tourner à gauche"];
		const right = this.votes["Tourner à droite"];

		console.log(Math.max(forward, left, right));

		return "";
		}

	public add(action:Action):void
		{
		this.votes[action]++;
		}
	}

export
	{
	VoteManager
	};
