/**
 * 
 * @param {string} container 
 */

function Responsive_background_images(container = false) {
    const template = document.createElement('bg-resource');
    

    /** If the selector is not provided we use the default one */
    if (container == false) {
        container = 'bgr-responsive';
    }  

    let _divs = document.querySelectorAll("." + container);
    
    //check if there are any containers on this page
    if (_divs.length > 0 ) {
        parse_background_images();

        window.addEventListener('resize', function () {        
            parse_background_images();
        });
    }//-if

    function parse_background_images() {
        [..._divs].map(function (elm, index) {
            let _res = _divs[index].querySelectorAll('bg-resource');
            [..._res].map(function (_res_elem, _res_index) {
                let mql = window.matchMedia(
                    _res[_res_index].getAttribute('media')
                );

                if (mql.matches) {
                    let _current_div = _divs[index].style;
                    let new_bg = `url("${_res[_res_index].getAttribute('srcset')}")`;
                    let background_size = _res[_res_index].getAttribute('size');

                    //change the background image only if it's different
                    if (new_bg != _current_div.backgroundImage) {
                        //check for the size attribute


                        _current_div.backgroundImage = new_bg;

                        if (background_size) {
                            _current_div.backgroundSize = background_size;
                        } else {
                            _current_div.backgroundSize = '';
                        }
                    }
                }
            });
        });
    }
}