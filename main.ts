enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    currentIndex += 1
    if (currentIndex >= messagelist.length) {
        currentIndex = 0
    }
    basic.showString("" + (currentIndex))
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("" + Username + ":" + messagelist[currentIndex])
    basic.showString("" + Username + ":" + messagelist[currentIndex])
    basic.showIcon(IconNames.Yes)
})
let currentIndex = 0
let messagelist: string[] = []
let Username = ""
radio.setGroup(1)
Username = "firetrips9"
messagelist = [
"hi",
"idk how but this actually works",
":D",
"xD",
"very c00l"
]
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.Happy)
basic.showIcon(IconNames.Yes)
