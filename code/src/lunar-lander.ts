
import { Player } from "./player.js";
import { VoteManager } from "./vote.js";

class LunarLander
	{
	public constructor()
		{
		}

	public simulation():void
		{
		const players = Array.from({length: 5}, () => new Player());

		const votes = new VoteManager();

		for (let i = 0; i < 3; i++)
			{
			players.forEach(player =>
				{
				votes.add(player.vote());
				});

			votes.action;
			}
		}
	}

new LunarLander().simulation();
