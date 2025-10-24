let room=prompt(`пеши день недели?`)
switch (room) {
    case `1`:
        alert(`понидельник`)
        break;
    case `2`:
        alert (`вторник`)
        break;
    case`3`:
        alert(`среда`)
        break;
    case `4`:
        alert(`четверг`)
        break;
    case `5`:
        alert(`пятница`)
        break;
    case `6`:
        alert(`субота`)
        break;
    case `7`:
        alert(`воскрисение`)
    default:
        alert(`нет такого дня названия!`)
        break;
}

