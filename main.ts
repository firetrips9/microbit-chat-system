enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    if (currentIndex == 0 && !(idkwhattonamethisbutok)) {
        currentIndex = -1
        comment("variable below fixes problem of having to")
        comment("cycle all the way through to use the first msg")
        idkwhattonamethisbutok = true
    }
    currentIndex += 1
    if (currentIndex >= messagelist.length) {
        idkwhattonamethisbutok = true
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
    currentIndex = 0
    idkwhattonamethisbutok = false
    basic.showIcon(IconNames.Yes)
})
function comment (text: string) {
	
}
let idkwhattonamethisbutok = false
let currentIndex = 0
let messagelist: string[] = []
let Username = ""
comment("comment blocks do nothing, just my notes")
radio.setGroup(1)
comment("change number above for private chats or different rooms")
comment("change username below (it will show when you message)")
Username = "firetrips9"
comment("messages below will still render")
comment("even if you dont have the same as others")
comment("avoid overly long messages as the micro:bit only")
comment("has 25 LEDs/pixels and it has to scroll text on screen")
messagelist = [
"hi",
"idk how but this actually works",
":D",
"xD",
"very c00l",
"microwave"
]
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.Happy)
basic.showIcon(IconNames.Yes)
