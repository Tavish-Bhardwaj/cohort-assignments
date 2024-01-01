function formatTime(hours, minutes, seconds, use12HourFormat) {
    let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (use12HourFormat) {
        const ampm = hours < 12 ? 'AM' : 'PM';
        hours = hours % 12 || 12;
        formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
    }

    return formattedTime;
}

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const time24 = formatTime(hours, minutes, seconds, false);
    const time12 = formatTime(hours, minutes, seconds, true);

    // Use \r to move the cursor back to the beginning of the line
    // process.stdout.write(`24-Hour Format: ${time24}\r`);
    process.stdout.write(`12-Hour Format: ${time12}\r`);
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to set the clock immediately
updateClock();
