
import { shuffle } from "besso/util/array.js";
import { type Action, Actions } from "./action.js"

class Player
	{
	private readonly actions:Array<Action>;

	public constructor()
		{
		this.actions = shuffle(new Array<Action>(...Actions));
		}

	public vote():Action
		{
		return this.actions.shift()!;
		}
	}

export
	{
	Player
	};
