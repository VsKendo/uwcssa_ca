
export function getFromLocalStorage(keyString: string): string | null {
    return localStorage.getItem(keyString)
}

export function setToLocalStorage(keyString: string, valueString: string): boolean {
    try {
        localStorage.setItem(keyString, valueString)
    } catch (e: any) {
        return false
    }
    return true
}

