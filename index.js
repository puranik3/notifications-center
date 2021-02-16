(function() {
    NC.init({
        position: NC.POSITION.TOP_RIGHT
    });

    function getDuration() {
        let duration = document.querySelector( '#duration' ).value.trim();
        return duration ? parseInt( duration ) : undefined;
    }

    // /* A title (string), A description (string), and a close button (closes the notification) */ 
    document.querySelector( '#show-success' ).addEventListener( 'click', function() {
        const notification = NC.show({
            type: 'success', // 'success' | 'info' | 'error'
            title: 'Success',
            description: 'New team was added',
            duration: getDuration()
        });
    });

    document.querySelector( '#show-info' ).addEventListener( 'click', function() {
        const notification = NC.show({
            type: 'info',
            title: 'Info',
            description: 'Hang on! We are fetching your meetings.',
            duration: getDuration()
        });
    });

    document.querySelector( '#show-error' ).addEventListener( 'click', function() {
        const notification = NC.show({
            type: 'error',
            title: 'Oops!',
            description: 'Soemthing bad happened. Your data may not have been saved',
            duration: getDuration()
        });
    });
}());