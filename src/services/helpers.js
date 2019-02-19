
export const generateId = (function generateId() {
    var counter = 0;
    return function (prefix = 'element') {
        return `${prefix}-${counter++}`;
    }
})();

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}