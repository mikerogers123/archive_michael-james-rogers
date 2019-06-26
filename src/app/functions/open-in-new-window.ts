export const openInNewWindow = (uri: string) => {
    const win = window.open(uri, '_blank');
    win.focus();
}