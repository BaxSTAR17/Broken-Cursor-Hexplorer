hexcolors = ['000002', '000100', '202002', '000000', '000808', '000005', '800000', '120000', '002800', '000020', '000000', '400000', '000100', '200000', '000000', '804000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '000000', '001C1C', '1C0000', '000000', '003C3C', '3C0000', '000000', '003838', '380000', '000000', '003838', '380000', '000000', '003838', '380000', '000000', '003838', '380000', '000000', '003838', '380000', '000000', '003838', '380000', '000000', '003838', '380000', '000000', '003838', '380000', '000000', '003838', '380000', '000000', '003838', '380000', '000000', '003838', '380000', '000000', '003C3C', '3C0000', '000000', '001C1C', '1C0000', '000000', '000000', '003FFF', 'FFFFFF', 'FFFFFF', 'F00000', '000000', '0FFFFF', 'FFFFFF', 'FFFF00', '000000', '0000F0', '00000F', 'FFFF00', '000000', '0003C0', '00000F', 'FFFF00', '000000', '0003C0', '00000F', 'FFFF00', '000000', '0003C0', '00000F', 'FFFF00', '000000', '0003C0', '00000F', 'FFFF00', '000000', '0003C0', '00000F', 'FFFF00', '000000', '0003C0', '00000F', 'FFFF00', '000000', '0003C0', '00000F', 'FFFF00', '000000', '0003C0', '00000F', 'FFFF00', '000000', '0003C0', '00000F', 'FFFF00', '000000', '0003E0', '00000F', 'FFFF00', '000000', '0003FF', 'FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFC', '000000', '000003', 'FFFFFF', 'FFFFFF', 'FFC000', '000000', '03FFFF', 'FFFFFF', 'FFFFFC', '000000', '000000', '3C0000', '000000', '03C000', '000000', '003C00', '000000', '00000F', '000000', '000003', 'C00000', '000000', '00F000', '000000', '003C00', '000000', '00000F', '000000', '000003', 'C00000', '000000', '00F000', '000000', '003C00', '000000', '00000F', '000000', '000003', 'C00000', '000000', '00F000', '000000', '003C00', '000000', '00000F', '000000', '000003', 'C00000', '000000', '00F000', '000000', '003C00', '000000', '00000F', '000000', '000000', 'F00000', '000000', 'FFFFFF', 'FFFFFF', 'FFFF00', '000000']

function initiateHexBox() {
    const gridbox = document.querySelector(".gridbox")
    for (const hex of hexcolors) {
        let element = document.createElement('div')
        element.classList.add('box')
        element.style.backgroundColor = `#${hex}`
        gridbox.append(element)
    }
}

function onSlide(value) {
    document.documentElement.style.setProperty('--width', value)
    document.getElementById('bits').value = `${value}`
}

function onType(value) {
    document.getElementById('slider').value = value
    onSlide(value)
}

function onSaturate(value) {
    document.documentElement.style.setProperty('--sature', value / 100)
    document.getElementById('saturation').value = `${value}`
    document.getElementById('sature').value = `${value}`
}

function onRotate(value) {
    let rotation = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--rotation'))
    document.documentElement.style.setProperty('--rotation', (rotation + value) % 360)
}

function onFlip(direction) {
    let flip = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue(`--${direction}flip`))
    document.documentElement.style.setProperty(`--${direction}flip`, flip * -1)
    if(flip == 1) document.getElementById(`${direction}flip`).classList.add('checked')
    else document.getElementById(`${direction}flip`).classList.remove('checked')
}

function reset() {
    onType(32)
    onSaturate(100)
    document.documentElement.style.setProperty('--rotation', 0)
    document.documentElement.style.setProperty(`--hflip`, 1)
    document.getElementById(`hflip`).classList.remove('checked')
    document.documentElement.style.setProperty(`--vflip`, 1)
    document.getElementById(`vflip`).classList.remove('checked')
}

initiateHexBox()
