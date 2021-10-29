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
        const width = 3 * 2 + 1,
              toI = (x, y) => x + y * width,
              table = makeTable(width, 3).appendTo(body).css({
                  'table-layout': 'fixed',
                  margin: 'auto'
              });
        const t = table.find('td');
        const w = addBtn(t.get(toI(0, 1)), '←', () => move('←')).outerWidth();
        addBtn(t.get(toI(2, 1)), '→', () => move('→'));
        addBtn(t.get(toI(1, 0)), '↑', () => move('↑'));
        addBtn(t.get(toI(1, 2)), '↓', () => move('↓'));
        addBtn(t.get(toI(0 + 4, 1)), 'Y', () => move('Y'));
        addBtn(t.get(toI(2 + 4, 1)), 'A', () => move('A'));
        addBtn(t.get(toI(1 + 4, 0)), 'X', () => move('X'));
        addBtn(t.get(toI(1 + 4, 2)), 'B', () => move('B'));
        console.log(w)
        table.css({width: w * width});
    }
    const move = c => {
        $('<div>').prependTo(foot).text(c + ' ' + new Date);
    };
})();
