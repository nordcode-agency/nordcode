const baseOptions: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'long',
    year: '2-digit',
    hour12: false,
};

export const dateFormatter = new Intl.DateTimeFormat('de-DE', baseOptions);

export const getDateFormatter = (date: Date | string): Intl.DateTimeFormat => {
    const parsedDate = new Date(date);
    const dateHasTime = parsedDate.toISOString().substring(11, 19) !== '00:00:00';
    const formatter = new Intl.DateTimeFormat('de-DE', {
        ...baseOptions,
        hour: dateHasTime ? '2-digit' : undefined,
        minute: dateHasTime ? '2-digit' : undefined,
    });

    return formatter;
};

export const formatDate = (date: Date | string): string => {
    const parsedDate = new Date(date);
    const formatter = getDateFormatter(date);

    return formatter.format(parsedDate);
};
