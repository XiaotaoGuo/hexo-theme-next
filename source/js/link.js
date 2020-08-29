link = {
    init: function() {
        var that = this;
        //这里设置的是刚才的 linklist.json 文件路径
        $.getJSON("/links/linklist.json",
        function(data) {
            that.render(data);
        });
    },
    render: function(data) {
        var html, nickname, avatar, site, li = "";
        for (var i = 0; i < data.length; i++) {
            nickname = data[i].nickname;
            avatar = data[i].avatar;
            site = data[i].site;
            info = data[i].info;
            li += '<div class="card">';
                li += '<a href="' + site + '" target="_blank">';
                li += '<div class="thumb" style="background: url( ' + avatar + ');">' + '</div>';
                li += '</a>';
                li += '<div class="card-header">';
                    li += '<div><a href="' + site + '" target="_blank">' + nickname + '</a></div>';
                    li += '<div>' + info + '</div>';
                li += '</div>';
            li += '</div>';
  
        }
        $(".link-navigation").append(li);
    }
  }
link.init();