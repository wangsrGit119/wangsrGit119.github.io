 define([], function () {
        return {
            page: 1,
            offset: 20,
            init: function () {
                var that = this;
                $.getJSON("../output.json", function (data) {
                    that.render(that.page, data);

                    that.scroll(data);
                });
            },

            render: function (page, data) {
                var begin = (page - 1) * this.offset;
                var end = page * this.offset;
                if (begin >= data.length) return;
                var html, li = "";
                for (var i = begin; i < end && i < data.length; i++) {
                    li += '<li><div class="img-box">' +
                        '<a class="img-bg" rel="external" href="https://github.com/wangsrGit119/wangsrGit119.github.io.git/photos/' + data[i] + '?raw=true" target="_blank"></a>' +
                        '<https: github.com="" wangsrgit119="" wangsrgit119.github.io.git="" photos="" '="" +="" data[i]="" '?raw="true"">' +
                        '</https:></div></li>';
                }

                $(".img-box-ul").append(li);
                $(".img-box-ul").lazyload();
                $("a[rel=example_group]").fancybox();
            },

            scroll: function (data) {
                var that = this;
                $(window).scroll(function() {
                    var windowPageYOffset = window.pageYOffset;
                    var windowPageYOffsetAddHeight = windowPageYOffset + window.innerHeight;
                    var sensitivity = 0;

                    var offsetTop = $(".instagram").offset().top + $(".instagram").height();

                    if (offsetTop >= windowPageYOffset && offsetTop < windowPageYOffsetAddHeight + sensitivity) {
                        that.render(++that.page, data);
                    }
                })
            }
        }
    })