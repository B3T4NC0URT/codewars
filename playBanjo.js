function areYouPlayingBanjo(name) {

return name.charAt(0).match(/[rR]/) ? name + " plays banjo" : name + " does not play banjo"

}
console.log(areYouPlayingBanjo(""))