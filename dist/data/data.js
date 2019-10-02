"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Types = __importStar(require("../types/requests"));
exports.data = {
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
};
