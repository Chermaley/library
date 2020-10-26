import $ from './lib/lib';

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(850);
});
$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(850);
});
$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(850);
});