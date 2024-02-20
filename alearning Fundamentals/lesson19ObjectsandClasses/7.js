class Song{
    constructor(typeList, name, time) {
        this.typeList = typeList;
        this.name = name;
        this.time = time;
    }

    showSong(){
        console.log(this.name);
    }
}

function favoriteSong(list) {
    let n = Number(list.shift());
    let listOfSongs = []
    for (let i = 0; i < n ; i++) {
        let [typeList, name, time] = list[i].split('_');
        let songsDetails = new Song(typeList, name, Number(time));
        listOfSongs.push(songsDetails);
    }

    for (const songName of listOfSongs) {
        songName.showSong();  
    }
    
}
favoriteSong([3,

    'favourite_DownTown_3:14',
    
    'favourite_Kiss_4:16',
    
    'favourite_Smooth Criminal_4:01',
    
    'favourite'] );