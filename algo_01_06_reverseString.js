var pokémon = [
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
];

// console.log the pokémon objects whose id is evenly divisible by 3
console.log("Pokemon objects whose id is evenly divisible by 3: ");
for (let i = 0; i < pokémon.length; i++) {
    if (pokémon[i].id % 3 === 0) {
        console.log(pokémon[i]);
    }
}

// console.log the pokémon objects that have more than one type
console.log("Pokemon objects that have more than one type: ");
for (let i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types.length > 1) {
        console.log(pokémon[i]);
    }
}

// console.log the names of the pokémon whose only type is "poison"
// Solution #1
console.log("Pokemon whose only type is \"poison\": ");
for (let i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types.length === 1 && pokémon[i].types[0] === "poison") {
        console.log(pokémon[i].name);
    }
}

// Solution #2
for (let i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types.length === 1 && pokémon[i].types.includes("poison") === true) {
        console.log(pokémon[i].name);
    }
}

// console.log the first type of all the pokémon whose second type is "flying"
console.log("The first type of all the pokémon whose second type is \"flying\": ");
for (let i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types[1] == "flying") {
        console.log(pokémon[i].types[0]);
    }
}

// Bonus Challenge: console.log the reverse of the names of the pokémon whose only type is "poison"
console.log("The reverse of the names of the pokémon whose only type is \"poison\": ");
for (let i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types.length === 1 && pokémon[i].types == "poison") {
        let name = pokémon[i].name;
        let reverseName = "";
        for (let i = name.length - 1; i >= 0; i--) {
            reverseName += name[i];
        }
        reverseName = reverseName.charAt(0).toUpperCase()
            + reverseName.slice(1, -1)
            + reverseName.charAt(reverseName.length - 1).toLowerCase();
        console.log(reverseName);
    }
}

/*
* String.charAt(indexNumber): returns the character from the specified index in a string
* String.toLowercase(): returns the calling string value converted to lower case
* String.toUppercase(): returns the calling string value converted to upper case
* Array.slice(start(inclusive, optional), end(exclusive, optional))
* - returns a new array containing the extracted elements, does not alter the original array
* - slice() or slice(start) or slice (start, end)
* - negative index indicates an offset from the end of the sequence (slice(-2) extracts the last two elements in the sequence)
*/

// Solution #2
for (let i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types.length === 1 && pokémon[i].types == "poison") {
        let name = pokémon[i].name;
        let reverseName = name.split("").reverse().join("");
        console.log(reverseName);
    }
}

/*
* String.split(separator, limit):
* - splits a string into an array of substrings, returns the new array, and does not change the origianl string
* - separator: "" splits a string into each character -> ; " " splits a string between words;
* Array.reverse(): reverses an array in place. The first array element becomes the last and the last becomes the first.
* Array.join(): joins all elements of an array into a string.
*/