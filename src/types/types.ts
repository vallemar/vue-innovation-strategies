export type ItemCategoryMenu = {
    name: string,
    key: string
}

export interface GenericSwapiResponse {
    count: number;
    results: ItemSWAPI[];
}

export interface ItemSWAPI {
    name: string;
    films: string[];
    url: string;
}

export interface People extends ItemSWAPI {
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    species: any[];
    vehicles: string[];
    starships: string[];
    created: Date;
    edited: Date;
}


export interface Starships extends ItemSWAPI {
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    pilots: any[];
    created: Date;
    edited: Date;
}


export interface Planets extends ItemSWAPI {
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    created: Date;
    edited: Date;

}