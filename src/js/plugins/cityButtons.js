import $ from 'jquery'

const duration = 600

function filterByCity(city){
    $('[be-city]').each(function(i,e){
        const isTarget = $(this).attr('be-city') === city || city === null;
        isTarget ? $(this).fadeIn(duration) : $(this).fadeOut(duration)
    })
}

$.fn.cityButtons = function(){
    
    const cities = new Set

    $('[be-city]').each(function(i,e){
        cities.add($(e).attr('be-city'))
    })

    const btns = Array.from(cities).map(city =>{
        const btn = $('<button>').addClass(['btn','btn-info']).html(city)
        btn.click(e => filterByCity(city))
        return btn
    })

    const btnAll = $('<button>').addClass(['btn','btn-info','active']).html('Todas')
    btnAll.click(e => filterByCity(null))
    btns.push(btnAll)

    const btnGroup = $('<div>').addClass(['btn-group'])
    btnGroup.append(btns)

    ('this').html(btnGroup)
}
$('[be-city-buttons]').cityButtons()