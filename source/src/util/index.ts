export function generateAnchor(v: string) {
    return v.toLowerCase().replace(/\W+/g, '-').replace(/^-|-$/g, '');
}
