const ls = localStorage as Storage
export const Username = 'username'
export function getFromLocalStorage(keyString: string): string | null {
    return ls.getItem(keyString)
}

export function setToLocalStorage(keyString: string, valueString: string): boolean {
    try {
        ls.setItem(keyString, valueString)
    } catch (e: any) {
        return false
    }
    return true
}

