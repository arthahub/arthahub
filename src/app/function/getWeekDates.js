export function getWeekDates() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - dayOfWeek);
    
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dates = [];

    for (let i = 0; i < 7; i++) {
        const currentDate = new Date(startOfWeek);
        currentDate.setDate(startOfWeek.getDate() + i);
        
        dates.push({
        day: days[i], 
        date: currentDate.getDate(),
        month: currentDate.toLocaleString('default', { month: 'short' })
        });
    }

    return dates;
}