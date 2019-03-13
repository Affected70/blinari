function checkForUpdate()
{
    window.addEventListener('load', function(e) {
        window.applicationCache.addEventListener('updateready', function(e) {

            if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
                // Browser downloaded a new app cache.
                window.location.reload();
            } else {
                // Manifest didn't changed. Nothing new to server.
            }
        }, false);

    }, false);

    console.log("Launched Check for Update");
    console.log("window.applicationCache.status: " + window.applicationCache.status);

    if (window.applicationCache.status == 4)
    {
        console.log("Cache Reload");
        window.applicationCache.swapCache();
        window.location.reload();
        window.applicationCache.update();
    }

    if (window.applicationCache != undefined && window.applicationCache != null)
    {
        window.applicationCache.addEventListener('updateready', updateApplication);

    }
}
function updateApplication(event)
{
    if (window.applicationCache.status != 4) return;
    console.log("CACHE UPDATED");
    window.applicationCache.removeEventListener('updateready', updateApplication);
    window.applicationCache.swapCache();
    window.location.reload();
    window.applicationCache.update();
}