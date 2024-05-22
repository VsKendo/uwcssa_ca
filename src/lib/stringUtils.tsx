export const emailSuffix: string = '@uwindsor.ca'

export function lengthValid(inputString: any, minLength: number, maxLength: number): boolean {
    if (!inputString) return false
    if (typeof inputString === 'string'){
        const stringLength = inputString.length
        return stringLength >= minLength && stringLength <= maxLength
    }
    return false
}

export function isUWinEmail(email: string): boolean {
    return email.endsWith(emailSuffix) && lengthValid(email, emailSuffix.length + 1, 64)
}

export function getOrDefault(value: any): string {
    if (!value) return ''
    if (typeof value !== 'string') return String(value)
    return value
}
