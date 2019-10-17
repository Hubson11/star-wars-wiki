export const getTableData = (type, data) => {
    let bodyTableData = []
    let headersTable = []
    switch(type){
        case 'people':
            bodyTableData = data.map(item => [item.name, item.skin_color, item.eye_color, item.height, item.mass])
            headersTable = ['Name', 'Skin color', 'Eye color', 'Height', 'Mass'];
            bodyTableData = { bodyTableData, headersTable };
            break;
        case 'planets':
            bodyTableData = data.map(item => [item.name, item.climate, item.diameter, item.orbital_period, item.population, item.rotation_period, item.surface_water])
            headersTable = ['Name', 'Climate', 'Diameter', 'Orbital period', 'Population', 'Rotation period', 'Surface water'];
            bodyTableData = { bodyTableData, headersTable };
            break;
        case 'vehicles':
            bodyTableData = data.map(item => [item.name, item.model, item.passengers, item.max_atmosphering_speed, item.manufacturer, item.vehicle_class])
            headersTable = ['Name', 'Model', 'Passengers', 'Max speed', 'Manufacturer', 'Vehicle class'];
            bodyTableData = { bodyTableData, headersTable };
            break;
        case 'starships':
            bodyTableData = data.map(item => [item.name, item.passengers, item.MGLT, item.hyperdrive_rating, item.length, item.manufacturer, item.model])
            headersTable = ['Name', 'Passengers', 'MGLT', 'Hyperdrive', 'Length', 'Manufacturer', 'Model'];
            bodyTableData = { bodyTableData, headersTable };
            break;
        case 'films':
            bodyTableData = data.map(item => [item.title, item.director, item.producer, item.release_date])
            headersTable = ['Title', 'Director', 'Producer', 'Release date'];
            bodyTableData = { bodyTableData, headersTable };
            break;    
        case 'species':
            bodyTableData = data.map(item => [item.name, item.classification, item.average_lifespan, item.average_height, item.designation, item.language])
            headersTable = ['Name', 'Classification', 'Average lifespan', 'Average height', 'Designation', 'Language'];
            bodyTableData = { bodyTableData, headersTable };
            break;            
        default:
            return data;
    }
    return bodyTableData;
}