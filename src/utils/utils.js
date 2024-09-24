// Formats the timestamp to a more human-readable format.
export const formatTimestamp = (timestamp) => {
    const difference = Math.floor(new Date() - new Date(timestamp)) / 1000;
    const timeUnits = [
        { name: "year", seconds: 12 * 30.437 * 24 * 60 * 60 },
        { name: "month", seconds: 30.437 * 24 * 60 * 60 },
        { name: "day", seconds: 24 * 60 * 60 },
        { name: "hour", seconds: 60 * 60 },
        { name: "minute", seconds: 60 },
    ];

    if (difference < 60) {
        return "Just now";
    }

    for (const unit of timeUnits) {
        if (difference >= unit.seconds) {
            const value = Math.floor(difference / unit.seconds);
            return `${value} ${unit.name}${value > 1 ? "s" : ""} ago`;
        }
    }
};
