var url = ''
$(document).ready(function () {
    $(".block__catalog").mouseenter(function () {
        $('.block__catalog-hide').css("display", "block");
    },
    );
    $(".catalog-hide__level").mouseenter(function () {
        $('.catalog-hide__levels-hide').css("display", 'block');
    },
    );

    $(".catalog-hide__levels-hide").mouseleave(function () {
        $(this).css('display', 'none')
    })
    $(".block__catalog-hide").mouseleave(function () {
        $(this).css('display', 'none')
        $('.catalog-hide__levels-hide').css('display', 'none')
    })
    $(".block__view").mouseenter(function () {
        $(".block__characteristics").toggleClass("visible");
        $(".block__item").toggleClass('row-items')
        $('.item__img').toggleClass('row-img')
        $('.item__form').toggleClass('flex-form')
        $(".item__type, .item__power, .item__type-launch, .item__voltage, .item__model-under-name").toggleClass('row-item')
        $(".item__description, .item__button, .item__model").toggleClass('hidden')
    });
    $('.item__name').click(function () {
        $(this).siblings(".item__form").css('display', 'flex')
        $(this).css('display', 'none')
    })
    $('.item__form').submit(function (event) {
        event.preventDefault();
        // var $form = $(this),
        //     term = $form.find("input[name='name']").val(),
        //     url = $form("action");
        // var posting = $.post(url, {id: id, name: term });
        // try {
        //     posting.done(function (data) {
        //         var content = $(data).find('#content')
        //         $("#result").empty().append(content)
        //     })
        // } catch (err) {
        //     console.error(err)
        // }
        var term = $(this).find("input[name='name']").val()
        $(this).siblings('.item__name').text(term)
        $(this).css('display', 'none');
        $(this).siblings('.item__name').css('display', 'block');
    })

});