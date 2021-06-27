interface IShowsList {
	Title: string,
	Url: string,
	Events: ISongKickEvent[]
}

// Replicating the SongKick API objects
// Some unused properties are omitted

interface ISongKickEvent {
	id: number,
	type: string,
	uri: string,
	displayName: string,
	start: string,
	end: string,
	location: ISongKickLocation,
	venue: ISongKickVenue,
	status: "ok" | "cancelled" | "postponed",
	ageRestriction?: string
}

interface ISongKickLocation {
	city: string
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