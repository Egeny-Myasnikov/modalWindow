

const modal = $.modal({
    title: 'Vladilen Modal',
    closable: true,
    content: `
    <h4> Какой то контент</h4>
    <p> lorem lorem lorem lorem </p>
    <p> lorem lorem lorem lorem </p>
    `,
    width: '400px',
    footerButtons: [
        {text: 'Ok', type: 'btn-primary',  handler(){
            modal.close()
        } },
         {text: 'Cancel', type: 'btn-danger',  handler(){
            modal.close()
        } },
    ]
})