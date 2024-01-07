
let cols: string[] = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500','bg-pink-500', 'bg-lime-500', 'bg-teal-500', 'bg-fuchsia-500'];

export function avatarInfo(name: string):{ initials: string; background: string}{

    // console.log(name);
    const [firstName, lastName] = name.split(" ");
    // console.log(`${firstName[0]}${lastName[0]}`)
    return {
        // initials, firstName[0]+
        initials:`${firstName[0]}${lastName[0]}`,
        background:getRandomColor()
    };
}
function getRandomColor(): string {
    let cl =cols[Math.floor(Math.random() * (cols.length-1))];
    return cl;
}

