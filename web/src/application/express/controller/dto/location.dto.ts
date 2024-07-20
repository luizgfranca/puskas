import { Location } from "../../../../module/location/location.model";

type CreateLocationDto = {
    name?: string;
    acronym?: string;
}

type GetLocationQueryParamsDto = {
    acronym?: string
}

function toLocation(dto: CreateLocationDto): Location {
    return new Location(dto.name, dto.acronym);
}

export {
    type CreateLocationDto,
    type GetLocationQueryParamsDto,
    toLocation
}