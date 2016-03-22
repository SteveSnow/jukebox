function jukebox() {
    aud = document.getElementById('audio')
    aud.addEventListener('ended', nextSong)
    var playlist = []

    this.togglePlay = function() {
        if (aud.paused) {
            aud.play()
        } else {
            aud.pause()
        }
    }
    this.setSong = function(song) {
        aud.src = song
        playlist.unshift(song)
    }
    this.addSong = function(song) {
        playlist.push(song)
    }
    this.removeSong = function(song) {
        i = playlist.indexOf(song)
        playlist.splice(i, 1)
    }
    this.nowPlaying = function() {
        if (aud.src != '') {
            return aud.src.split('audio/')[1].split('.')[0]
        } else {
            return ''
        }
    }
    this.play = function() {
        aud.play()
    }
    this.nextSong = function() {
        nextSong()
    }
    this.startPlaylist=function(){
      aud.src=playlist[0]
      aud.play()
    }

    function nextSong() {
        playlist.shift()
        if (playlist.length != 0) {
            aud.src = playlist[0]
            aud.play()
        } else { 
        aud.pause()
        aud.currentTime=0
          alert('out of songs') 
        }
        updatePlaylist()
    }

    function updatePlaylist() {
        oldSong = $('#playlistStage').children().first()
      console.log(  $(oldSong).children().last())
      $(oldSong).children().last().removeClass('fa-minus')
      $(oldSong).find('.playBtn').show()
        $('#songStage').append(oldSong)
    }

}