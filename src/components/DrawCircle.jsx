import * as turf from '@turf/turf';

const DrawCircle = (mapRef, radius, lat, long) => {
    if(long > 0 || lat > 0) {
        let _center = [long, lat];
        let _options = {
        steps: 80,
        units: 'kilometers' // or "mile"
        };

        let _circle = turf.circle(_center, radius, _options);

        mapRef.current.addSource("circleData", {
            type: "geojson",
            data: _circle,
        });

        mapRef.current.addLayer({
            id: "circle-fill",
            type: "fill",
            source: "circleData",
            paint: {
                "fill-color": "red",
                "fill-opacity": 0.5,
            },
        });
    }
}

export default DrawCircle;