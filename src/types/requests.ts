/**
 * @author Pranay Gupta
 * @created 12 sept
 */
import { Dictionary } from "express-serve-static-core";

export enum UserType { EndUser = "end-user", Driver = "driver" };

/**
 * The schema for the location type
 * @todo Implement this type in database
 */
export interface Location {
    latitude: Number,
    longitude: Number
};
/**
 * The schema for the user type
 * @todo Implement this type in database
 */
export interface User {
    userId: Number,
    userName: String,
    password: String,
    location: Location,
    userType: UserType.EndUser,
    associatedDriverId: Number
}
/**
 * The schema for the driver type
 * @todo Implement this type in database
 */
export interface Driver {
    driverId: Number,
    location: Location,
    isTravelling: Boolean,
    userType: UserType.Driver
}
