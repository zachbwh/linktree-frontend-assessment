interface IShowsList {
	Title: string,
	Events: ISongKickEvent[]
}

// Replicating the SongKick API objects
// Some unused properties are omitted

interface ISongKickEvent {
	id: number,
	uri: string,
	displayName: string,
	start: string,
	venue: ISongKickVenue,
	status: "ok" | "cancelled" | "postponed" | "sold-out", // added sold out status (not in songkick api)
}

interface ISongKickVenue {
	displayName: string,
	city: ISongKickCity
}

interface ISongKickCity {
	displayName: string,
	country: {
		displayName: string
	}
}

export default IShowsList