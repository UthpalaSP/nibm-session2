export class ChartData {
    total: ResultType
    gender: ResultType
    district: ResultType
    totalPatientCount: number
}

export class ResultType {
    positive: number
    negative: number
    invalid: number
}