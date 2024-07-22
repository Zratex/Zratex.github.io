export function rgbToHex(rgb: string) {
    // Séparer la chaîne en composants individuels
    const rgbValues = rgb.split(", ").map(Number);
    // Fonction pour convertir une valeur décimale en hexadécimal et ajouter un zéro si nécessaire
    function componentToHex(c: number) {
        const hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    // Convertir chaque composant RGB en hexadécimal
    const redHex = componentToHex(rgbValues[0]);
    const greenHex = componentToHex(rgbValues[1]);
    const blueHex = componentToHex(rgbValues[2]);

    // Assembler les valeurs hexadécimales
    const hexColor = `#${redHex}${greenHex}${blueHex}`;

    return hexColor;
}