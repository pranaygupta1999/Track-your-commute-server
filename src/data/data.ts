import * as Types from '../types/requests';

interface Data {
    Users: Array<Types.User>,
    Drivers: Array<Types.Driver>,
}

export var data: Data = {
    Users: [
        {
            userId: 1,
            userName: "Pranay",
            password: "pranay",
            location: {
                latitude: 18.529883,
                longitude: 73.850668
            },
            userType: Types.UserType.EndUser,
            associatedDriverId: 1
        },
        {
            userId: 2,
            userName: "Pratik",
            password: "pratik",
            location: {
                latitude: 21.128973,
                longitude: 81.765244
            },
            userType: Types.UserType.EndUser,
            associatedDriverId: 2
        }
    ],
    Drivers: [],
}
    
