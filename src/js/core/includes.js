import $ from 'jquery'

function loadIncludes(parent){
    if(!parent) parent = 'body'
    $(parent).find('[be-include]').each(function(i,e){
        const url = $(e).attr('be-include')
        $.ajax({
            url,
            success(data){
                $(e).html(data)
                $(e).removeAttr('be-include')

                loadIncludes(e)
            }
        })
    })
}
loadIncludes()
