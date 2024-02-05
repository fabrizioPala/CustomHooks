import { useState } from 'react';

export function useCurrentLocation() {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getCurrentLocation = () => {
        setLoading(true);

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
                setError(null);
            },
            (error) => {
                console.error("Error getting current location:", error);
                setLocation(null);
                setError(error);
            },
            { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
        );

        setLoading(false);
    };

    return {
        location,
        error,
        loading,
        getCurrentLocation,
    };
}