(function () {
    var username = $('#name');
    var email = $('#email');
    var comment = $('#comment');
    var timestamp = Date.now();
    const dbRoot = firebase.database();
    $('.btn').on('click', function () {
        const commentUpdate = {
            comment: comment.val(),
            name: username.val(),
            email: email.val(),
            time: timestamp,
        };
        const newPostKey = dbRoot.ref('comments/').push().key;
        dbRoot.ref('comments/' + newPostKey).set(commentUpdate);
    });

}());
