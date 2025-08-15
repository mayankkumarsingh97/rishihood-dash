//@
// services/auth.service.ts
//@
export interface UserProfile {
    id: number;
    email: string;
    username: string;
    password: string;
    name: {
        firstname: string;
        lastname: string;
    };
    address: {
        city: string;
        street: string;
        number: number;
        zipcode: string;
        geolocation: {
            lat: string;
            long: string;
        };
    };
    phone: string;
}

export async function getUserProfile(): Promise<UserProfile> {
    const response = await fetch(`https://fakestoreapi.com/users/3`);
    if (!response.ok) {
        throw new Error(`${response.status} - Failed to fetch User profile!`);
    }
    const data: UserProfile = await response.json();
    return data;
}