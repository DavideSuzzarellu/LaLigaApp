export const getYearFromDateString = (dateString: string) => {
    const date = new Date(dateString);
    return date.getFullYear();
};