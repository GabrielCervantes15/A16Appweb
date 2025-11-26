function calcularSueldo(horasTrabajadasTotal, tarifaPorHora) {
    const limite_horas_normales = 40;
    const factor_extra = 1.5;

    let horasBase = 0;
    let horasExtra = 0;

    if (horasTrabajadasTotal > limite_horas_normales) {
        horasBase = limite_horas_normales;
        horasExtra = horasTrabajadasTotal - limite_horas_normales;
    } else {
        horasBase = horasTrabajadasTotal;
        horasExtra = 0;
    }

    const pagoHorasNormales = horasBase * tarifaPorHora;
    
    const tarifaHorasExtra = tarifaPorHora * factor_extra;
    const pagoHorasExtra = horasExtra * tarifaHorasExtra;

    const totalAPagar = pagoHorasNormales + pagoHorasExtra;

    console.log("--- Detalle del Pago Semanal ---");
    console.log(`⏱Total de Horas Registradas: ${horasTrabajadasTotal}`);
    console.log(`Tarifa Base: $${tarifaPorHora.toFixed(2)}`);
    console.log("-------------------------------------");

    console.log(`Horas normales (Base 40): ${horasBase}`);
    console.log(`Horas extra (150%): ${horasExtra}`);
    console.log("-------------------------------------");

    console.log(`Pago por horas normales: $${pagoHorasNormales.toFixed(2)}`);
    console.log(`Pago por horas extra: $${pagoHorasExtra.toFixed(2)}`);
    console.log("-------------------------------------");

    console.log(`Total a Pagar: $${totalAPagar.toFixed(2)}`);
    console.log("-------------------------------------");

}
