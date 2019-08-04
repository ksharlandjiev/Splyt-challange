import config from '../config.json'

const normalize = (driver) => ({
  id: driver.driver_id,
  position: [parseFloat(driver.location.longitude), parseFloat(driver.location.latitude)],
  bearing: parseInt(driver.location.bearing)
});

export const getCars = (props) => {
    const {latitude, longitude, count } = props;
    
    return fetch(`${config.proxy}/api/fetch/${latitude}/${longitude}/${count}`)
    .then (res=> res.json())    
    .then(res => res.data.drivers.map(normalize))

    .catch (error => {
        console.error('failed to fetch from source', error);
    });
}
