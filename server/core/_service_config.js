
/**
 *  When service need public access...
 */
if (_env.is("dev")) {
    _service.allow()
}

/*
if (_service.path == 'samples/my-service') {
    _service.allow()
}
*/

if (_service.path.startsWith('commerce/' || _service.path.startsWith('contact/') {
    _service.allow()
}
