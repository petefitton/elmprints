export interface Poster {
    imageURL: string;
}
export interface User {
	_id: string,
	firstname: string,
	lastname: string,
	email: string,
	password: string,
	billingAddress: Address,
	shippingAddress: Address,
	shoppingCart: Item[],
	orderHistory: Item[],
	wishList: Item[]
	_v: number,
	isValidPassword(user: User, password: string): boolean
}
export interface Address {
	_id: string,
	streetOne: string,
	streetTwo: string,
	city: string,
	state: string,
	zipcode: string
}

export interface Item {
	_id: string,
	item: string,
	price: string,
	imgUrl: string,
	imageID: string,
	sourceID: string
}

export type AxiosServerError = { 
	code: number, 
	description: string 
}

export type AxiosServerResponse = {
    statusCode: string,
    responseObject: ServerImageInformation[]
}

export type ServerImageInformation = {
	title: string,
	sourceID: string,
	imageID: string,
	imagePath: string,
	price: number
}
export type ProductInformation = {
	title: string,
	sourceID: string,
	imageID: string,
	imagePath: string,
	price: string
}