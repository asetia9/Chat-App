export const renderTheme = theme => {
    document.documentElement.setAttribute('data-theme', theme);
};
export const clearTheme = theme => {
    document.documentElement.removeAttribute('data-theme');
};
