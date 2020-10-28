import $ from './lib/lib';
$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title w',
        body: 'lorem takoi lorem'
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-dander', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Данные сохранены');
                }
            ],
            [
                'sasa',
                ['btn-warning', 'ml-10'],
                false,
                () => {
                    alert('пиздец');
                }
            ]
        ]
    }
}));