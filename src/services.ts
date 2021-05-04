enum TypeColor {
    electronics = '#FFC107',
    jewelery = '#007BFF',
    mensClothing = '#DC3545',
    womensClothing = '#17A2B8',
}

export const setTypeColor = (type: string): string => {
    switch (type) {
        case 'electronics':
            return TypeColor.electronics;
        case 'jewelery':
            return TypeColor.jewelery;
        case "men's clothing":
            return TypeColor.mensClothing;
        case "women's clothing":
            return TypeColor.womensClothing;
        default:
            return'#333';
    }
};