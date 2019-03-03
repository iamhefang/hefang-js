export function base64encode(str: string): string {
    return btoa(encodeURIComponent(str));
}

export function base64decode(baseString: string): string {
    return decodeURIComponent(atob(baseString))
}