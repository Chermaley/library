import $ from './lib/lib';

$('button').addAtt('cal', 'goven');

$('button').on('click', function() {

    $(this).getAtt('cal', 'goven');
});

