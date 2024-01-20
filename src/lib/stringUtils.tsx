export function lengthValid(inputString: string, minLength: number, maxLength: number): boolean {
    const stringLength = inputString.length
    return stringLength >= minLength && stringLength <= maxLength
}

export function isUWinEmail(email: string): boolean {
    const suffix: string = '@uwindsor.ca'
    return email.endsWith(suffix) && email.length !== suffix.length && lengthValid(email, suffix.length + 1, 64)
}

export function getOrDefault(value: any): string {
    if (!value) return ''
    if (typeof value !== 'string') return String(value)
    return value
}
