import User from "./user";

export default interface Event{

    _id?: string ,
    EventName: string,
    Description: string,
    user: User
}