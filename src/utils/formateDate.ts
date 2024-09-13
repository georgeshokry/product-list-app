export function formateDate(date: Date){
    const currentDate = new Date(date)
    return new Intl.DateTimeFormat('en-US', {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(currentDate);
}