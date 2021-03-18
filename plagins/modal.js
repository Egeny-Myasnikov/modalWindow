function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `

        <div class="vmodal__overflay">
            <div class="vmodal__window">
                <div class="vmodal__window--header">
                    <span class="vmodal__window--header__vmodal-title">Modal title</span>
                    <span class="vmodal__window--header__vmodal-close">&times;</span>
                </div>
                <div class="vmodal__window--body">
                    <p>Lorem ipsum dolor sit.</p>
                    <p>Lorem ipsum dolor sit.</p>
                </div>
                <div class="vmodal__window--footer">
                    <button>ok</button>
                    <button>cancel</button>
                </div>
            </div>
        </div>

    `)
    document.body.appendChild(modal)
    return modal
}

$.modal = function (options) {
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    let closing = false

    return {
        open() {
           !closing && $modal.classList.add('open')
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            }, ANIMATION_SPEED)
        },
        destroy() {}
    }
}