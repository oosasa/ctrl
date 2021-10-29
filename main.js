(async () => {
    await import('https://code.jquery.com/jquery-3.6.0.slim.min.js');
    const $ = window.$;
    const html = $('body').empty().css({
        'text-align': 'center',
        padding: '1em',
        'user-select': 'none'
    });
    const head = $('<dl>').appendTo(html),
          body = $('<dl>').appendTo(html),
          foot = $('<dl>').appendTo(html);
    const addCSS = href => $('<link>').appendTo('head').prop({href, rel: 'stylesheet'});
    addCSS('https://unpkg.com/nes.css@2.2.0/css/nes.min.css');
    const makeTable = (w, h) => {
        const table = $('<table>');
        for(const y of Array(h).keys()) {
            const tr = $('<tr>').appendTo(table);
            for(const x of Array(w).keys()) {
                $('<td>').appendTo(table);
            }
        }
        return table;
    };
    const addBtn = (h, ttl, func) => $('<button>').appendTo(h).text(ttl).on('click', func);
    $('<h1>').appendTo(head).text('コントローラ');
    {
        const width = 3 * 2 + 1;
        const toI = (x, y) => x + y * width;
        makeTable(width, 3).appendTo(body);
        const tds = body.find('td');
        addBtn(tds.get(toI(0, 1)), '←', () => move('a'));
        addBtn(tds.get(toI(2, 1)), '→', () => move('d'));
        addBtn(tds.get(toI(1, 0)), '↑', () => move('w'));
        addBtn(tds.get(toI(1, 2)), '↓', () => move('s'));
    }
    const move = way => {
        $('<div>').prependTo(foot).text((()=>{
            switch(way){
                case 'a': return '←';
                case 'd': return '→';
                case 'w': return '↑';
                case 's': return '↓';
            }
        })() + new Date);
    };
})();
