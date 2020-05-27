(function () {
    var dbRoot = firebase.database();
    var comments = dbRoot.ref('comments/');
    comments.on('child_added', snap => {
        var publishedOn = Date(snap.child("time").val());
        $('.comments').prepend('<a class="card mb-3 text-left text-white bg-secondary fromtop" target="_blank"><div class="row no-gutters"><div class="col"><div class="card-body"><h5 class="card-title">' + snap.child("name").val() + '</h5><p class="card-text">' + snap.child("comment").val()  + '</span></small></p></div></div></div></a>');
    });
}());
