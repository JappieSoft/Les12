function dateConverter(date) {
    const newDate = new Date(date);

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    return newDate.toLocaleDateString("nl-NL", options);

}

export default dateConverter;