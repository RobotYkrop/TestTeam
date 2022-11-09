export interface Procedure {
  date: string,
  medicineId: number,
  medicineBatchNumber: string,
  isPeriodical: boolean,
  periodDays: number
}

export interface ProcedureResponse {
  id: number,
  date: string,
  medicineId: number,
  medicineBatchNumber: string,
  isPeriodical: boolean,
  periodDays: number
}

export interface ProcedureExternal {
  id: number,
  date: string,
  type: string,
  medicineId: number,
  medicineBatchNumber: string,
  isPeriodical: boolean,
  periodDays: number
}
