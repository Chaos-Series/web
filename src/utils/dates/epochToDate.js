
function epochToDate(epoch) {
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    const date = new Date(epoch * 1000);
    const diaSemana = diasSemana[date.getDay()];
    const diaMes = date.getDate();
    const mes = meses[date.getMonth()];

    return `${diaSemana}, ${diaMes} de ${mes}`;
}

export default epochToDate;