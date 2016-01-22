/*!
 * Custom Post
 */

(function () {
    'use-strict';

    class Post {
        constructor ($el) {
            this.$el = $el;
            this.$imgs = this.$el.find('img');
            this.$links = this.$el.find('a');
            this.$tables = this.$el.find('table');
            this.init();
        }

        init () {
            this.initImages();
            this.initTables();
            this.initTables();
            this.initLinks();
        }

        initImages () {
            this.$imgs.each(function (index) {
                $(this).attr('data-lightbox-img', index);
            });
        }

        initTables () {
            this.$tables.each(function () {
                $(this)
                    .addClass('table')
                    .wrap('<div class="table-responsive"></div>');
            });
        }

        initLinks () {
            this.$links.each(function () {
                $(this).attr('target', '_blank');
            });
        }
    }

    $(document).ready(() => {
        new Post($('.post'));
    });
})();
