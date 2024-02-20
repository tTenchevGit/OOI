class Song {
    constructor(typeList, name, time) {
        this.typeList = typeList;
        this.name = name;
        this.time = time;
    }

    showSong() {
        console.log(this.name);
    }
}

function favoriteSong(list) {
    let removeFirst = list.shift();
    let removeLast = list.pop();
        list.map(x => {
            let [typeList, name, time] = x.split('_');
            let songsDetails = new Song(typeList, name, Number(time));
            return songsDetails;
        }).forEach(x => x.showSong());
}
favoriteSong([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);