$(document).ready(function() {
    var j = new jukebox
    $('.btn').click(function(e) {
        j.startPlaylist()
    });

    $('.playBtn').click(function(e) {
        aud = document.getElementById('audio')
        if (j.nowPlaying() != $(e.target).data('song').split('audio/')[1].split('.')[0]) {
            song = $(e.target).data('song')
            j.setSong(song)
            $('#nowPlaying').html(j.nowPlaying())
        }
        j.play()
       moveSongToTop(e,j)
    });

    $('.addBtn').click(function(e) {
        song = $(e.target).data('song')
        moveSong(e,j)
    });

$('#nextBtn').click(function(){
	j.nextSong()
})

});

function moveSongToTop(e,j) { 
        $(e.target).parent().find('.playBtn').hide()
        $('#playlistStage').prepend($(e.target).parent())
        $(e.target).parent().find('.addBtn').addClass('fa-minus')
   
}
function moveSong(e,j) {
    if ($(e.target).parent().parent().attr('id') == 'songStage') {
        $(e.target).parent().find('.playBtn').hide()
        $('#playlistStage').append($(e.target).parent())
        $(e.target).parent().find('.addBtn').addClass('fa-minus')
        j.addSong(song)
    } else if ($(e.target).parent().parent().attr('id') == 'playlistStage') {
        $(e.target).parent().find('.playBtn').show()
        $('#songStage').append($(e.target).parent())
        $(e.target).parent().find('.addBtn').removeClass('fa-minus')
        j.removeSong(song)
    }
}