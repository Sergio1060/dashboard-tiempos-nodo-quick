// ============================================================
// data.js — Quick Go | Dashboard Operativo Nodo
// Período: 19 Mayo – 09 Junio 2026
// Para actualización semanal: reemplazar solo este archivo
// ============================================================

const QUICK_DATA = {
  meta: {
    periodo: "19 Mayo – 09 Junio 2026",
    nodo: "Nodo Bogotá",
    generado: "2026-06-09",
    semanas: ["Semana 21 (19–25 Mayo)", "Semana 22 (26 Mayo–1 Jun)", "Semana 23 (2–9 Jun)"]
  },

  totales: {
    total_servicios: 3418,
    km_total: 31677,
    km_max: 55,
    km_promedio: 9.3,   // 31677 / 3418
    asig_min: 57.4,     // tiempo promedio asignación en minutos
    fin_min: 155.4,     // tiempo promedio ciclo completo en minutos
    recorrido_min: 98.0 // estimado: fin - asig
  },

  // Datos por día del mes
  por_dia: [
    { fecha: "2026-05-19", dia: 19, label: "Lun 19 May", dow: 1, servicios: 103,  km_total: 728,   km_max: 28, asig_min: 66.4, fin_min: 134.8 },
    { fecha: "2026-05-20", dia: 20, label: "Mar 20 May", dow: 2, servicios: 114,  km_total: 1105,  km_max: 42, asig_min: 59.1, fin_min: 126.3 },
    { fecha: "2026-05-21", dia: 21, label: "Mié 21 May", dow: 3, servicios: 164,  km_total: 1366,  km_max: 30, asig_min: 60.2, fin_min: 154.9 },
    { fecha: "2026-05-22", dia: 22, label: "Jue 22 May", dow: 4, servicios: 135,  km_total: 1126,  km_max: 25, asig_min: 85.9, fin_min: 169.0 },
    { fecha: "2026-05-23", dia: 23, label: "Vie 23 May", dow: 5, servicios: 95,   km_total: 847,   km_max: 31, asig_min: 70.7, fin_min: 158.7 },
    { fecha: "2026-05-24", dia: 24, label: "Sáb 24 May", dow: 6, servicios: 92,   km_total: 792,   km_max: 38, asig_min: 47.0, fin_min: 132.3 },
    { fecha: "2026-05-25", dia: 25, label: "Dom 25 May", dow: 0, servicios: 142,  km_total: 1342,  km_max: 45, asig_min: 63.4, fin_min: 156.2 },
    { fecha: "2026-05-26", dia: 26, label: "Lun 26 May", dow: 1, servicios: 127,  km_total: 1106,  km_max: 27, asig_min: 38.4, fin_min: 118.7 },
    { fecha: "2026-05-27", dia: 27, label: "Mar 27 May", dow: 2, servicios: 281,  km_total: 2436,  km_max: 51, asig_min: 35.3, fin_min: 146.8 },
    { fecha: "2026-05-28", dia: 28, label: "Mié 28 May", dow: 3, servicios: 298,  km_total: 2636,  km_max: 34, asig_min: 60.6, fin_min: 188.6 },
    { fecha: "2026-05-29", dia: 29, label: "Jue 29 May", dow: 4, servicios: 189,  km_total: 1747,  km_max: 35, asig_min: 44.1, fin_min: 145.7 },
    { fecha: "2026-05-30", dia: 30, label: "Vie 30 May", dow: 5, servicios: 165,  km_total: 1608,  km_max: 36, asig_min: 67.2, fin_min: 171.3 },
    { fecha: "2026-05-31", dia: 31, label: "Sáb 31 May", dow: 6, servicios: 108,  km_total: 766,   km_max: 29, asig_min: 76.3, fin_min: 166.8 },
    { fecha: "2026-06-01", dia: 1,  label: "Dom 1 Jun",  dow: 0, servicios: 157,  km_total: 1377,  km_max: 32, asig_min: 44.9, fin_min: 144.2 },
    { fecha: "2026-06-02", dia: 2,  label: "Lun 2 Jun",  dow: 1, servicios: 133,  km_total: 1340,  km_max: 34, asig_min: 55.5, fin_min: 139.1 },
    { fecha: "2026-06-03", dia: 3,  label: "Mar 3 Jun",  dow: 2, servicios: 160,  km_total: 1838,  km_max: 55, asig_min: 54.8, fin_min: 158.9 },
    { fecha: "2026-06-04", dia: 4,  label: "Mié 4 Jun",  dow: 3, servicios: 244,  km_total: 2410,  km_max: 47, asig_min: 55.7, fin_min: 168.3 },
    { fecha: "2026-06-05", dia: 5,  label: "Jue 5 Jun",  dow: 4, servicios: 174,  km_total: 1765,  km_max: 39, asig_min: 62.1, fin_min: 167.8 },
    { fecha: "2026-06-06", dia: 6,  label: "Vie 6 Jun",  dow: 5, servicios: 145,  km_total: 1524,  km_max: 37, asig_min: 63.9, fin_min: 153.4 },
    { fecha: "2026-06-07", dia: 7,  label: "Sáb 7 Jun",  dow: 6, servicios: 117,  km_total: 1084,  km_max: 27, asig_min: 88.9, fin_min: 186.5 },
    { fecha: "2026-06-08", dia: 8,  label: "Dom 8 Jun",  dow: 0, servicios: 148,  km_total: 1410,  km_max: 38, asig_min: 63.2, fin_min: 148.6 },
    { fecha: "2026-06-09", dia: 9,  label: "Lun 9 Jun",  dow: 1, servicios: 127,  km_total: 1324,  km_max: 43, asig_min: 30.6, fin_min: 125.9 }
  ],

  // Datos por hora del día (0-23)
  por_hora: [
    { hora: 0,  label: "00:00", servicios: 13,  km_total: 78,   km_max: 15, asig_min: 42.9,  fin_min: 108.0 },
    { hora: 1,  label: "01:00", servicios: 4,   km_total: 87,   km_max: 31, asig_min: 3.4,   fin_min: 89.4  },
    { hora: 2,  label: "02:00", servicios: 8,   km_total: 78,   km_max: 20, asig_min: 42.6,  fin_min: 125.0 },
    { hora: 3,  label: "03:00", servicios: 3,   km_total: 13,   km_max: 7,  asig_min: 70.2,  fin_min: 194.8 },
    { hora: 4,  label: "04:00", servicios: 7,   km_total: 41,   km_max: 9,  asig_min: 62.7,  fin_min: 140.6 },
    { hora: 5,  label: "05:00", servicios: 9,   km_total: 101,  km_max: 22, asig_min: 70.2,  fin_min: 238.8 },
    { hora: 6,  label: "06:00", servicios: 77,  km_total: 625,  km_max: 42, asig_min: 190.2, fin_min: 274.1 },
    { hora: 7,  label: "07:00", servicios: 115, km_total: 1076, km_max: 29, asig_min: 87.1,  fin_min: 189.7 },
    { hora: 8,  label: "08:00", servicios: 215, km_total: 2061, km_max: 48, asig_min: 58.8,  fin_min: 167.7 },
    { hora: 9,  label: "09:00", servicios: 237, km_total: 2236, km_max: 33, asig_min: 26.3,  fin_min: 128.2 },
    { hora: 10, label: "10:00", servicios: 269, km_total: 2774, km_max: 38, asig_min: 23.4,  fin_min: 130.8 },
    { hora: 11, label: "11:00", servicios: 229, km_total: 2305, km_max: 42, asig_min: 10.1,  fin_min: 113.6 },
    { hora: 12, label: "12:00", servicios: 236, km_total: 2042, km_max: 36, asig_min: 46.7,  fin_min: 131.7 },
    { hora: 13, label: "13:00", servicios: 213, km_total: 1966, km_max: 47, asig_min: 11.8,  fin_min: 106.4 },
    { hora: 14, label: "14:00", servicios: 241, km_total: 2093, km_max: 34, asig_min: 98.6,  fin_min: 183.8 },
    { hora: 15, label: "15:00", servicios: 236, km_total: 2364, km_max: 37, asig_min: 14.8,  fin_min: 109.5 },
    { hora: 16, label: "16:00", servicios: 210, km_total: 2209, km_max: 36, asig_min: 13.3,  fin_min: 123.0 },
    { hora: 17, label: "17:00", servicios: 240, km_total: 2420, km_max: 41, asig_min: 20.5,  fin_min: 121.8 },
    { hora: 18, label: "18:00", servicios: 251, km_total: 2179, km_max: 37, asig_min: 26.9,  fin_min: 136.2 },
    { hora: 19, label: "19:00", servicios: 232, km_total: 2235, km_max: 55, asig_min: 117.7, fin_min: 217.1 },
    { hora: 20, label: "20:00", servicios: 153, km_total: 1268, km_max: 32, asig_min: 52.6,  fin_min: 152.6 },
    { hora: 21, label: "21:00", servicios: 117, km_total: 817,  km_max: 45, asig_min: 215.6, fin_min: 294.1 },
    { hora: 22, label: "22:00", servicios: 76,  km_total: 399,  km_max: 19, asig_min: 312.3, fin_min: 368.0 },
    { hora: 23, label: "23:00", servicios: 27,  km_total: 210,  km_max: 38, asig_min: 81.5,  fin_min: 180.6 }
  ],

  // Semanas agrupadas (calculado a partir de por_dia)
  semanas: [
    {
      label: "Sem 21 (19-25 May)",
      dias: ["2026-05-19","2026-05-20","2026-05-21","2026-05-22","2026-05-23","2026-05-24","2026-05-25"],
      servicios: 845,
      km_total: 7306,
      asig_min: 64.5,
      fin_min: 148.9
    },
    {
      label: "Sem 22 (26 May-1 Jun)",
      dias: ["2026-05-26","2026-05-27","2026-05-28","2026-05-29","2026-05-30","2026-05-31","2026-06-01"],
      servicios: 1280,
      km_total: 11670,
      asig_min: 52.4,
      fin_min: 155.9
    },
    {
      label: "Sem 23 (2-9 Jun)",
      dias: ["2026-06-02","2026-06-03","2026-06-04","2026-06-05","2026-06-06","2026-06-07","2026-06-08","2026-06-09"],
      servicios: 1248,
      km_total: 12695,
      asig_min: 59.3,
      fin_min: 156.1
    }
  ],

  // SLA Definidos (configurables)
  sla: {
    asignacion_max_min: 60,     // SLA: asignación <= 60 min
    ciclo_max_min: 180,         // SLA: ciclo completo <= 180 min
    km_ranges: [
      { id: 1, label: "0 – 4 km",    min: 0,    max: 4,    sla_ciclo: 120 },
      { id: 2, label: "4.1 – 7 km",  min: 4.01, max: 7,    sla_ciclo: 150 },
      { id: 3, label: "7.1 – 10 km", min: 7.01, max: 10,   sla_ciclo: 180 },
      { id: 4, label: "> 10 km",     min: 10.01, max: 9999, sla_ciclo: 240 }
    ]
  }
};
