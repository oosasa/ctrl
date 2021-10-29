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
        const td = table.find('td'),
              _a = addBtn(td.get(toI(0, 1)), '←', () => move('←')),
              _d = addBtn(td.get(toI(2, 1)), '→', () => move('→')),
              _w = addBtn(td.get(toI(1, 0)), '↑', () => move('↑')),
              _s = addBtn(td.get(toI(1, 2)), '↓', () => move('↓')),
              y = addBtn(td.get(toI(0 + 4, 1)), 'Y', () => move('Y')),
              a = addBtn(td.get(toI(2 + 4, 1)), 'A', () => move('A')),
              x = addBtn(td.get(toI(1 + 4, 0)), 'X', () => move('X')),
              b = addBtn(td.get(toI(1 + 4, 2)), 'B', () => move('B'));
        _a.add(_d).add(_w).add(_s).add(td.get(toI(1, 1))).css({
            'backgroundColor': 'rgba(66, 86, 123, 0.5)'
        });
        y.add(a).add(x).add(b).css({
            'border-radius': '90%'
        });
        table.css({width: _a.outerWidth() * width});
    }
    const move = c => {
        $('<div>').prependTo(foot).text(c + ' ' + new Date);
    };
})();
